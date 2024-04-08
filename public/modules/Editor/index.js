import { Cursor } from "../Cursor/index.js";
import { Document } from "../Document/index.js";
import { HTMLDoc } from "../HTMLDoc/index.js";
import { JSDoc } from "../JSDoc/index.js";

class Editor {
    constructor({doc = "New Document", editor, modals, predictiveList, mimetype = "html"} = {}){
        this.mimetype = mimetype;
        this.editor = editor;
        this.modals = modals;
        this.predictiveList = predictiveList;
        this.doc = this.createDoc(doc, mimetype);
        this.cursor = new Cursor();

        this.editor.append(...this.doc.lines);

        this.editor.addEventListener("keydown", this.onKeyDown);
        this.editor.addEventListener("keyup", this.onKeyUp);
        this.editor.addEventListener("paste", this.onPaste);
        this.editor.addEventListener("copy", this.onCopy);
        this.editor.addEventListener("cut", this.onCut);
        this.editor.addEventListener("mouseover", this.onMouseOver);
        this.editor.addEventListener("mouseout", this.onMouseOut);
        this.editor.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("selectionchange", this.onSelectionChange);
        
        this.changedLines = []

    }

    onSelectionChange =(e) => {
        if(!this.cursor.isCollapsed){
            this.editor.classList.add("range-selection")
        } else {
            if(this.editor.classList.contains("range-selection")) {
                this.editor.classList.remove("range-selection")
            }
        }
    }

    onMouseDown = (e) => {
        const line = e.target.closest("[data-type='line']")
        this.highlightActiveLine(line)
    }

    onMouseOut = (e) => {
        const highlights = this.editor.querySelectorAll("[data-type].highlight-pair")

        Array.from(highlights).forEach((line) => {
            line.classList.remove("highlight-pair")
        })
    }

    highlightPair(line, openingElement, closingName){
        const walker = document.createTreeWalker(line, NodeFilter.SHOW_ELEMENT)
        let isLooking = false;

        while(walker.nextNode()){
            if(walker.currentNode === openingElement) {
                isLooking = true;
            }

            if(isLooking) {
                if (walker.currentNode.getAttribute("data-type") === closingName) {
                    walker.currentNode.classList.add("highlight-pair")
                    openingElement.classList.add("highlight-pair")
                    break;
                }
            }
        }
    }

    onMouseOver = (e) => {
        const element = e.target;
        const type = element.getAttribute("data-type")
        const line = element.closest("[data-type='line']")

        switch(type){
            case "open-quote":
                this.highlightPair(line, element, "close-quote");
                break;
            case "opening-angle-bracket":
                this.highlightPair(line, element, "closing-angle-bracket");
                break;
        }

        /*if(type === "open-quote"){
            const walker = document.createTreeWalker(line, NodeFilter.SHOW_ELEMENT)
            let isLooking = false;

            while(walker.nextNode()){
                if(walker.currentNode === e.target) {
                    isLooking = true;
                }

                if(isLooking) {
                    if (walker.currentNode.getAttribute("data-type") === "close-quote") {
                        walker.currentNode.classList.add("highlight-pair")
                        e.target.classList.add("highlight-pair")
                        break;
                    }
                }
            }

        }*/
    }

    getLineContaining(node) {
        const startNode = (node.nodeType === Node.TEXT_NODE)
            ? node.parentElement
            : node;
        
        const line = startNode.closest("[data-type='line']")

        return line;
    }

    getDataType(node) {
        const startNode = (node.nodeType === Node.TEXT_NODE)
            ? node.parentElement
            : node;
        
        const line = startNode.closest("[data-type]")

        return line.getAttribute("data-type");
    }

    get activeLine() {
        const anchorNode = this.cursor.anchorNode;

        return this.getLineContaining(anchorNode)
        
    }

    get activeType(){
        const anchorNode = this.cursor.anchorNode;

        return this.getDataType(anchorNode)
    }

    closestPredictiveInput(){
        const anchorNode = this.cursor.anchorNode;
        const startNode = (anchorNode.nodeType === Node.TEXT_NODE)
            ? anchorNode.parentElement
            : anchorNode;
        
        const line = startNode.closest("[data-predictive]")

        return line;
    }

    get previousLine(){
        return this.activeLine.previousElementSibling;
    }

    get nextLine(){
        return this.activeLine.nextElementSibling;
    }

    moveToAbsolute(line, position){
        const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
        let accumLength = 0;
        let notMoved = true;

        while(walker.nextNode()) {
            const currentNode = walker.currentNode;

            if(position <= accumLength + currentNode.length){
                // Found node
                notMoved = false;
                const caretPosition = position - accumLength
                this.cursor.moveTo(currentNode, caretPosition)
                break;
            } 

            accumLength += currentNode.length;
            
        }

        if(notMoved){
            this.cursor.moveTo(line.lastChild, line.lastChild.textContent.length)
        }

        //this.highlightActiveLine()

    }

    get leftOfCursor(){
        const baseNode = this.cursor.baseNode;
        const baseOffset = this.cursor.baseOffset;
        const line = this.getLineContaining(baseNode)

        const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
        let plaintext = "";

        while(walker.nextNode()) {
            const currentNode = walker.currentNode;

            if(currentNode === baseNode){
                plaintext += currentNode.textContent.substring(0, baseOffset)
                break;
            } else {
                plaintext += currentNode.textContent
            }

            
        }

        return plaintext
    }

    get rightOfCursor(){
        const extentNode = this.cursor.extentNode;
        const extentOffset = this.cursor.extentOffset;
        const line = this.getLineContaining(extentNode)

        const walker = document.createTreeWalker(line, NodeFilter.SHOW_ALL)
        let reachedExtentNode = false;
        let plaintext = "";

        while(walker.nextNode()){
            const currentNode = walker.currentNode;

            if(reachedExtentNode && currentNode.nodeType === Node.TEXT_NODE){
                plaintext += currentNode.textContent
            }

            if (currentNode === extentNode && currentNode.nodeType === Node.TEXT_NODE) {
                plaintext += currentNode.textContent.substring(extentOffset)
                reachedExtentNode = true;
            }
            
        }

        return plaintext
    }

    deleteSelectedLines({keepFirstLine = true} = {}){
        const linesToDelete = this.selectedLines;
        const selectLine = (keepFirstLine)
            ? linesToDelete.shift()
            : linesToDelete[linesToDelete.length - 1].nextElementSibling
                 || linesToDelete[0].previousElementSibling;

        linesToDelete.forEach((lineToDelete) => {
            // Search for line in this.doc.lines
            const removeAtIndex = this.doc.lines.findIndex((line) => lineToDelete === line);
            // Remove LI from DOM
            this.doc.lines[removeAtIndex].remove()

            // Remove LI from array
            this.doc.lines.splice(removeAtIndex, 1)
        })
        
        if(selectLine){
            this.cursor.moveTo(selectLine);

        } else {
            const newLine = this.doc.createLine("New Line ...")

            this.editor.append(newLine)
            this.cursor.moveTo(newLine)
        }

    }

    get selectedLines(){
        const baseNode = this.cursor.baseNode;
        const extentNode = this.cursor.extentNode;

        const firstLine = this.getLineContaining(baseNode)
        const lastLine = this.getLineContaining(extentNode)

        // Single Line
        if(baseNode === extentNode){
            return [firstLine]
        }

        // Multiple Lines ...
        const lines = [firstLine];
        let currentLine = firstLine.nextElementSibling;

        while(currentLine !== lastLine){
            lines.push(currentLine)
            currentLine = currentLine.nextElementSibling;
        }

        lines.push(lastLine)

        return lines;

    }

    createDoc(doc, mimetype = this.mimetype){
        let docObj;

        switch(mimetype){
            case "html":
                docObj = new HTMLDoc(doc)
                break;
            case "js":
                docObj = new JSDoc(doc)
                break;
            default:
                docObj = new Document(doc);
                break
        }

        return docObj
    }

    onCut = (e) => {
        e.preventDefault();
        if(this.cursor.isCollapsed){
            this.deleteSelectedLines({keepFirstLine: false});
        } else {
            console.log("Replace selected text")
        }
    }

    onCopy = (e) => {
        e.preventDefault();
        let pastedtext = this.cursor.range.toString();

        e.clipboardData.setData('text/html', pastedtext);
        e.clipboardData.setData('text/plain', pastedtext);
    }

    onPaste = (e) => {
        e.preventDefault();
        const pastedtext = e.clipboardData.getData("text/plain")
        this.setData("ignoreRefreshLine", true)
        this.paste(pastedtext);
    }

    refreshLine(){
        this.paste("")
    }

    #data = {}

    setData(key, value){
        this.#data[key] = value;
    }

    getData(key){
        return this.#data[key];
    }

    killSuggestions(){
        this.setData("currentPredictionTarget", null);
        this.predictiveList.clear()
    }

    displaySuggestions(line){
        const type = line.getAttribute("data-predictive")
        const value = line.textContent;
        const target = line.textContent;

        const lineBox = line.getBoundingClientRect();

        this.predictiveList.style.top = `${lineBox.top + lineBox.height}px`;
        this.predictiveList.style.left = `${lineBox.left}px`;

        
        // Ask doc if it has any suggestion matches...
        const suggestions = this.doc.predictions.getSuggestions(type, value)
        if(suggestions.length > 0){
            // Register element to be updated should user click on a suggestion
            this.setData("currentPredictionTarget", line);
            
            // Update custom element with list of suggestions
            this.predictiveList.suggestions = suggestions;
    
            // Callback function when a suggestion is clicked
            this.predictiveList.onSelectSuggestion = (value) => {
                const target = this.getData("currentPredictionTarget");
                this.setData("currentPredictionTarget", null);

                target.textContent = value;
                this.cursor.moveToEnd(target)
                this.refreshLine()
            }
        } else {
            this.predictiveList.clear()
        }
        

    }

    onKeyUp = (e) => {
        const previousLineContent = this.getData("previousLineContent");
        const newLineContent = this.activeLine.textContent;
        const lineHasBeenUpdated = previousLineContent !== this.activeLine.textContent;
        const ignoreRefreshLine = this.getData("ignoreRefreshLine");

        console.log("ignoreRefreshLine:", ignoreRefreshLine)

        if(lineHasBeenUpdated && this.cursor.isCollapsed){

            if(ignoreRefreshLine){
                this.setData("ignoreRefreshLine", false)
            } else {
                this.refreshLine()
            }


            const predictiveInput = this.closestPredictiveInput();

            if(predictiveInput){
                this.displaySuggestions(predictiveInput);
            } else {
                this.killSuggestions()
            }
        }

        

        this.setData("previousLineContent", this.activeLine.textContent)
        
    }

    highlightActiveLine(activeLine = this.activeLine){

        if (!activeLine.classList.contains("active")){
            const previousLine = this.editor.querySelector(".active");
            if(previousLine) {
                previousLine.classList.remove("active")

            }
            activeLine.classList.add("active")

        }
    }

    moveArrowUp(){
        const predictiveListOpen = this.getData("currentPredictionTarget");
        if(predictiveListOpen){
            this.predictiveList.moveArrowUp()
            console.log("Move Arrow on Predictive List")
        } else {
            const previousLine = this.previousLine;

            if(previousLine){
                const absoluteCursorPosition = this.leftOfCursor.length;
    
                // Move cursor into position in the last pasted line
                this.moveToAbsolute(this.previousLine, absoluteCursorPosition)
    
                this.highlightActiveLine()
            }
    
        }
        
    }

    moveArrowDown(){
        const predictiveListOpen = this.getData("currentPredictionTarget");
        if(predictiveListOpen){
            this.predictiveList.moveArrowDown()
            console.log("Move Arrow on Predictive List")
        } else {
            const nextLine = this.nextLine;

            if(nextLine){
                const absoluteCursorPosition = this.leftOfCursor.length;

                // Move cursor into position in the last pasted line
                this.moveToAbsolute(this.nextLine, absoluteCursorPosition)

                this.highlightActiveLine()

            }
        }
        
    }

    moveArrowLeft(){
        const absoluteCursorPosition = Math.max(this.leftOfCursor.length - 1, 0);

        this.moveToAbsolute(this.activeLine, absoluteCursorPosition)
    }

    moveArrowRight(){
        const absoluteCursorPosition = this.leftOfCursor.length + 1;

        this.moveToAbsolute(this.activeLine, absoluteCursorPosition)
    }

    onKeyDown = (e) => {
        const key = e.key;
        const altKey = e.altKey;
        const ctrlKey = e.ctrlKey;
        const metaKey = e.metaKey;
        const shiftKey = e.shiftKey;
        const value = this.editor.innerText;
        let pastetext;
        let selectedText;

        const wrapPairs = [
            ["(", ")"],
            ["[", "]"],
            ["{", "}"],
        ]

        switch(key){
            case '"':
            case "'":
                e.preventDefault()
                if(this.cursor.isCollapsed){
                    const nextChar = this.rightOfCursor[0];
                    const nextCharPosition = this.leftOfCursor.length + 1;

                    if(nextChar === key){
                        this.moveToAbsolute(this.activeLine, nextCharPosition)

                    } else {
                        pastetext = `${key}${key}`;
                        this.paste(pastetext, -1)
                    }
                } else {
                    selectedText = this.cursor.selectedText;
                    pastetext = `${key}${selectedText}${key}`;
                    this.paste(pastetext)
                }
                break;
            case "(":
            case "[":
            case "{":
                e.preventDefault()
                const pair = wrapPairs.find((pair) => pair[0] === key);

                if(this.cursor.isCollapsed) {
                    const nextChar = this.rightOfCursor[0];
                    const nextCharPosition = this.leftOfCursor.length + 1;

                    if(nextChar === pair[0]) {
                        this.moveToAbsolute(this.activeLine, nextCharPosition)

                    } else {
                        pastetext = `${pair[0]}${pair[1]}`;
                        this.paste(pastetext, -1)
                    } 

                } else {
                    selectedText = this.cursor.selectedText;
                    pastetext = `${pair[0]}${selectedText}${pair[1]}`;
                    this.paste(pastetext)
                }
                break;
            case ")":
            case "]":
            case "}":
                const nextChar = this.rightOfCursor[0];
                const nextCharPosition = this.leftOfCursor.length + 1;

                if(this.cursor.isCollapsed && nextChar === key) {
                    e.preventDefault()
                    this.moveToAbsolute(this.activeLine, nextCharPosition)

                }
                break;
            case "ArrowUp":
                e.preventDefault();
                this.moveArrowUp();
                break;
            case "ArrowDown":
                e.preventDefault();
                this.moveArrowDown();
                break;
            case "ArrowLeft":
                e.preventDefault();
                this.moveArrowLeft();
                break;
            case "ArrowRight":
                e.preventDefault();
                this.moveArrowRight();
                break;
            
            case "Tab":
                e.preventDefault()
                if(shiftKey){
                    this.tabLeft()
                } else {
                    this.insertTab()
                }
                break;
            case "Backspace":
                const leftOfCursor = this.leftOfCursor.trim();
                if(leftOfCursor === "" && this.cursor.isCollapsed){
                    // Need to igniore if it is at position 0 on line !!
                    this.removeTab(e)
                }
                break;
            case "Enter":
                e.preventDefault();
                this.insertLineBreak();
                break;
        }

        

        
    }

    replaceActiveLine(lines){

    }

    pasteIntoDoc(newLines, activeLine){
        // Find position of active line in the doc
        const index = this.doc.lines.findIndex((line) => line === activeLine);

        // Replace active line with new lines
        this.doc.lines.splice(index, 1, ...newLines)

    }

    pasteIntoView(parsedLines, cursorPosition = 0){
        // Remove any selected lines
        this.deleteSelectedLines()

        // Should NOT display ALL lines. Need to implememnt lazy loading
        this.activeLine.replaceWith(...parsedLines)

        // Move pointer to after insertion point
        this.moveToAbsolute(parsedLines[parsedLines.length - 1], cursorPosition)

        // Highlight active line
        this.highlightActiveLine()
    }

    paste(plaintext, offset = 0){
        if(plaintext === ""){
            console.log("JUST PARSE")
        } else {
            console.log("PASTE", plaintext)
        }
        // Split plaintext into lines (\n)
        const lines = this.doc.splitLines(plaintext);
        const lastLineLength = lines[lines.length - 1].length;

        const leftOfCursor = this.leftOfCursor;
        const rightOfCursor = this.rightOfCursor;

        const cursorPosition = (lines.length === 1)
            ? leftOfCursor.length + lastLineLength + offset
            : lastLineLength + offset;

        // Insert text left of cursor at begining of first line
        lines[0] = leftOfCursor + lines[0];

        // Add text right of cursor to end of last line
        lines[lines.length - 1] += rightOfCursor

        // Parse lines
        const parsedLines = this.doc.parse(lines);

        // Insert lines into doc
        this.pasteIntoDoc(parsedLines, this.activeLine);

        // Update view
        this.pasteIntoView(parsedLines, cursorPosition)

    }

    

   

    replaceLine(plaintext, {moveCaretTo = 0} = {}){
        const linesToPaste = this.doc.splitLines(plaintext);
        const parsedLinesToPaste = this.doc.parse(linesToPaste)

        // Find index of active line in the document object
        const pasteAtIndex = this.doc.lines.findIndex((line) => line === this.activeLine)

        // Remove active line and insert newly pasted lines
        this.doc.lines.splice(pasteAtIndex, 1, ...parsedLinesToPaste);

        // Update Editor
        this.activeLine.replaceWith(...parsedLinesToPaste)

        // Move cursor into position in the last pasted line
        this.moveToAbsolute(parsedLinesToPaste[parsedLinesToPaste.length - 1], moveCaretTo)
    }

    tabLeft() {
        // Get leading whitespace
        const leadingWhiteSpaceRe = /^ +/;
        const indent = this.activeLine.textContent.match(leadingWhiteSpaceRe);
        const indentLength = (indent) ? indent[0].length : 0;

        // Calculate how many spaces to get to previous tab stop 
        const distanceToPreviousTabStop = (indentLength) % 4 || 4;
        
        // Get position of cursor
        const caretPosition = this.leftOfCursor.length;

        // Set new indent length ( set to zero if negative number )
        const newIndentLength = Math.max(indentLength - distanceToPreviousTabStop, 0);

        // Create leading white space for indent
        const tabs = " ".repeat(newIndentLength);

        // Replace current indent with nex indent
        const newLine = this.activeLine.textContent.replace(leadingWhiteSpaceRe, tabs)

        // Replace active line with updated text content
        this.replaceLine(newLine, {moveCaretTo: Math.max(caretPosition - distanceToPreviousTabStop, 0)})
        
        this.highlightActiveLine()

    }

    insertLineBreak(){
        const predictiveListOpen = this.getData("currentPredictionTarget");
        if(predictiveListOpen){
            this.predictiveList.selectCurrent()
        } else {
            this.paste("\n");
        }
    }

    insertTab() {
        const predictiveListOpen = this.getData("currentPredictionTarget");
        if(predictiveListOpen){
            this.predictiveList.selectCurrent()
        } else {
            // Get absolute cartet position in current line
            const caretPosition = this.leftOfCursor.length;

            // Determine next tab stop
            const nextTabStop = 4 - (caretPosition % 4)

            // Create tab with spaces until next tab stop
            const tab = " ".repeat(nextTabStop)

            // Paste tab
            this.paste(tab)
        }


        
    }

    removeTab(e){
        const leftOfCursor = this.leftOfCursor;
        const rightOfCursor = this.rightOfCursor;
        const caretPosition = leftOfCursor.length;

        if(caretPosition > 0){
            e.preventDefault()

            let previousTabStop = caretPosition % 4 || 4;
        
            const indentLength = Math.max(0, caretPosition - previousTabStop);
            const tabs = " ".repeat(indentLength);

            const newLine = `${tabs}${rightOfCursor}`
            this.replaceLine(newLine, {moveCaretTo: indentLength})
        }

        
        
        

    }

}

export {Editor}