import { Editor } from "../modules/Editor/index.js";

const doc = `<html>
ignore="this"
ignoremetoo=true
    <head></head>
    <body>
        <form
            method="post"
            class="my-form">
        
            <input 
                type="text"
                class="my-input"
                required=true
                placeholder="Enter text">

            
            <input type="text" class="my-input" required=true placeholder="Enter text">
        </form>
        <heading>
            <h1>Heading goes here</h1>
            <h2>Sub heading goes here</h2>
        </heading>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus obcaecati, suscipit similique at minima debitis? Quod minus error quasi veniam. Possimus in enim a voluptate officia consequuntur dolores cum obcaecati!</p>

        <div class="my-class">
            <div class="my-class andanother">
                <div style="color:red; background-color:pink">
                    <span>Hello</span>
                    <input type="text" required=true />
                </div>
            </div>
        </div>

        <ul>
            <li>
                List Item <button type="button">Button</button>
            </li>

            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            <li>
                List Item <button type="button">Button</button>
            </li>
            
        </ul>
    </body>
</html>    
        `;

        const smallDoc = `<html>
    <head>
        <title>Hey</title>
    </head>
</html>`;

const tinyDoc = `
Line One

<head>
    <title>Hey</title>    <title>Hey</title>
</head>`;

const typeEditor = new Editor({
    doc: tinyDoc,
    editor: document.getElementById("editor"),
    modals: document.getElementById("modals"),
    predictiveList: document.getElementById("predictive-list"),
    mimetype: "html"
})