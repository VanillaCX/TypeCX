import { Editor } from "../modules/Editor/index.js";



const htmlDoc = `<div>

    <input type="text" id="userInput" placeholder="Say something">
    <button type="button" id="button">Speak</button>

    <div id="output"></div>

</div>`;

const jsDoc = `
const name = "lee"
var object = {
one: "two";
}
const myFunction = (test) => {}
var string = "Hello"

function myFunction({message}){
}

function myFunction(message, one, two = "hello"){
}

function myFunction(message,message,message){
}

const result = myFunction({message: "Hello"})

const myFunction = () => {}
let myFunction = () => {}
var myFunction = () => {}

class Speaker = {
    hey;
    #private = "lee"
    #privateMethod(){}
    static myVar = "Hello"
    static method = (e) = {
}
    constructor ({test = one, name = "Default", output} = {}){
        this.name = name;
        this.output = output;
    }

    constructor({test = one, name = "Default", output} = {}){
        this.name = name;
        this.output = output;
    }

    saySomething(plaintext, one = "one", two = two){
        this.output.innerHTML = plaintext
    }
}

const userInput = document.getElementById("userInput")
const output = document.getElementById("voice")
const button = document.getElementById("button")

const speaker = new Speaker({
    name: "Yo Yo",
    output: output
})

button.addEventListener("click", (e) => {
    const message = userInput.value;

    speaker.saySomething(message)
})
`

const htmlEditor = new Editor({
    doc: htmlDoc,
    editor: document.getElementById("html_editor"),
    modals: document.getElementById("modals"),
    predictiveList: document.getElementById("predictive-list"),
    mimetype: "html"
})

const jsEditor = new Editor({
    doc: jsDoc,
    editor: document.getElementById("js_editor"),
    modals: document.getElementById("modals"),
    predictiveList: document.getElementById("predictive-list"),
    mimetype: "js"
})