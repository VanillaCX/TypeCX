class Cursor {
    #column = 0;

    constructor(){
        this.selection = window.getSelection();
    }

    get selectedText(){
        return this.selection.toString();
    }

    set column (value){
        this.#column = value;
    }

    get column (){
        return this.#column;
    }

    get range (){
        return this.selection.getRangeAt(0)
    }

    get textContent(){
        return this.anchorNode.textContent;
    }

    get nextChar(){
        return this.textContent.charAt(this.selection.anchorOffset)
    }

    get previousChar(){
        return this.textContent.charAt(Math.max(this.selection.anchorOffset - 1, 0))
    }

    get anchorNode (){
        return this.selection.anchorNode
    }

    get baseNode (){
        return this.selection.baseNode
    }


    get baseOffset (){
        return this.selection.baseOffset
    }

    get extentNode (){
        return this.selection.extentNode
    }

    get extentOffset (){
        return this.selection.extentOffset
    }

    get isCollapsed(){
        return this.selection.isCollapsed;
    }

    collapseToStart(){
        this.selection.collapseToStart()
    }

    skipForward(count){
        
    }

    selectNode(node){
        const range = document.createRange();
        range.selectNodeContents(node);
        this.selection.removeAllRanges();
        this.selection.addRange(range);

    }

    moveTo(node, position = 0) {
        this.selectNode(node);
        this.selection.setPosition(node, position)
    }

    moveToEnd(node) {
        this.selectNode(node);
        this.selection.collapseToEnd()
    }

}

export {Cursor}