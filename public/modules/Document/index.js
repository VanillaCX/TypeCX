import { Predictions } from "../Predictions/index.js"

class Document {    
    #lines;

    constructor(plaintext){
        this.onCreate(plaintext)

        this.predictions = new Predictions();
    }

    onCreate(){
        const splitLines = this.splitLines(plaintext);

        this.lines = this.parse(splitLines);
    }

    parse(splitLines){
        // Parent has split into lines. Now I can parse the lines for HTML
        splitLines.forEach((line, index) => {
            line = line.replace(/</g, "&lt;");
            splitLines[index] = this.createLine(line)
        })

        return splitLines
    }

    splitLines(plaintext){
        const arrayOfLines = plaintext.split("\n");

        return arrayOfLines.map((line) => {
            //return line.trim()
            return line
        });
    }

    createTextNode(plaintext) {
        const textNode = document.createTextNode(plaintext);

        return textNode
    }
    
    createWrapper(plaintext, type, predictive = false) {
        const wrapper = document.createElement("div")
        wrapper.setAttribute("data-type", "wrapper")

        if(predictive) {
            wrapper.setAttribute("data-predictive", predictive)
        }

        const innerWrapper = document.createElement("div")
        innerWrapper.setAttribute("data-type", type)

        const textNode = document.createTextNode(plaintext)

        innerWrapper.append(textNode)
        wrapper.append(innerWrapper)

        return wrapper
    }

    createLine(plaintext) {
        const wrapper = document.createElement("li")
        wrapper.setAttribute("data-type", "line")
        wrapper.innerHTML = plaintext

        return wrapper
    }


}

export {Document}