class PredictiveList extends HTMLElement {
    #activeElement;

    constructor(){
        super()
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"})

        const wrapper = document.createElement("div");

        const style = document.createElement("style");

        style.textContent = `
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li {
                background: red;
            }
            .deprecated,
            .experimental,
            .non-standard {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 900;
                pointer-events:none;
            }

            .deprecated {
                color: white;
                background: red;
            }

            .experimental {
                color: white;
                background: orange;
            }

            .non-standard {
                color: white;
                background: grey;
            }

            .active {
                border: 1px solid black
            }
            
            `;


        this.list = document.createElement("ul");
        this.list.setAttribute("id", "list")

        this.list.addEventListener("click", this.#onClick)

        wrapper.append(style, this.list)

        shadow.appendChild(wrapper)
    }

    refresh(){
        this.list.replaceChildren()
    }

    clear(){
        this.list.replaceChildren()
    }

    #onClick = (e) => {
        const element = e.target;
        const suggestion = element.getAttribute("data-suggestion")

        if(suggestion && this.onSelectSuggestion){
            this.onSelectSuggestion(suggestion)
        }

        this.clear()

    }

    moveArrowUp(){
        if(this.activeElement.previousElementSibling){
            this.activeElement = this.activeElement.previousElementSibling
        } else {
            this.activeElement = this.list.lastChild
        }
    }

    moveArrowDown(){
        if(this.activeElement.nextElementSibling){
            this.activeElement = this.activeElement.nextElementSibling
        } else {
            this.activeElement = this.list.firstChild
        }
    }

    onSelectSuggestion(){
        console.log("Hello")
    }

    deprecatedElement(){
        const wrapper = document.createElement("div")
        wrapper.classList.add("deprecated")

        const textNode = document.createTextNode("Deprecated")

        wrapper.append(textNode);

        return wrapper;
    }

    nonStandardElement(){
        const wrapper = document.createElement("div")
        wrapper.classList.add("non-standard")

        const textNode = document.createTextNode("Non Standard")

        wrapper.append(textNode);

        return wrapper;
    }

    experimentalElement(){
        const wrapper = document.createElement("div")
        wrapper.classList.add("experimental")

        const textNode = document.createTextNode("Experimental")

        wrapper.append(textNode);

        return wrapper;
    }

    createElement(tag, textContent, className){
        const wrapper = document.createElement(tag);
        const textNode = document.createTextNode(textContent)

        wrapper.classList.add(className)
        wrapper.append(textNode)

        return wrapper
    }

    createSuggestion({text, deprecated = false, experimental = false, nonStandard = false} = {}){
        const element = document.createElement("li")
        element.setAttribute("data-suggestion", text)
        
        const textNode = document.createTextNode(text)
        element.append(textNode);

        if(deprecated){
            element.append(this.createElement("span", "Deprecated", "deprecated"))
        }

        if(experimental){
            element.append(this.createElement("span", "Experimental", "experimental"))
        }

        if(nonStandard){
            element.append(this.createElement("span", "Non Standard", "non-standard"))
        }

        return element;
    }

    set activeElement(element){
        if(this.#activeElement){
            this.#activeElement.classList.remove("active")
        }

        this.#activeElement = element;
        this.#activeElement.classList.add("active")

    }

    selectCurrent(){
        console.log("this.activeElement:", this.activeElement)
        this.activeElement.click()
    }

    get activeElement(){
        return this.#activeElement 
    }

    set suggestions(suggestions){
        const elements = suggestions.map((suggestion) => {
            return this.createSuggestion(suggestion)
        })

        this.list.replaceChildren(...elements)

        this.activeElement = elements[0]
    }


}

customElements.define("predictive-list", PredictiveList)


export {PredictiveList}