import { Document } from "../Document/index.js";
import { Predictions } from "../Predictions/index.js"


const tags = {
    type: "tagname",
    suggestions: [
        { text: "a" },
{ text: "abbr" },
{ text: "acronym",
deprecated: true },
{ text: "address" },
{ text: "area" },
{ text: "article" },
{ text: "aside" },
{ text: "audio" },
{ text: "b" },
{ text: "base" },
{ text: "bdi" },
{ text: "bdo" },
{ text: "big",
deprecated: true },
{ text: "blockquote" },
{ text: "body" },
{ text: "br" },
{ text: "button" },
{ text: "canvas" },
{ text: "caption" },
{ text: "center",
deprecated: true },
{ text: "cite" },
{ text: "code" },
{ text: "col" },
{ text: "colgroup" },
{ text: "data" },
{ text: "datalist" },
{ text: "dd" },
{ text: "del" },
{ text: "details" },
{ text: "dfn" },
{ text: "dialog" },
{ text: "dir",
deprecated: true },
{ text: "div" },
{ text: "dl" },
{ text: "dt" },
{ text: "em" },
{ text: "embed" },
{ text: "fencedframe",
experimental: true },
{ text: "fieldset" },
{ text: "figcaption" },
{ text: "figure" },
{ text: "font",
deprecated: true },
{ text: "footer" },
{ text: "form" },
{ text: "frame",
deprecated: true },
{ text: "frameset",
deprecated: true },
{ text: "h1" },
{ text: "head" },
{ text: "header" },
{ text: "hgroup" },
{ text: "hr" },
{ text: "html" },
{ text: "i" },
{ text: "iframe" },
{ text: "img" },
{ text: "input" },
{ text: "ins" },
{ text: "kbd" },
{ text: "label" },
{ text: "legend" },
{ text: "li" },
{ text: "link" },
{ text: "main" },
{ text: "map" },
{ text: "mark" },
{ text: "marquee",
deprecated: true },
{ text: "menu" },
{ text: "menuitem",
deprecated: true, nonStandard: true },
{ text: "meta" },
{ text: "meter" },
{ text: "nav" },
{ text: "nobr",
deprecated: true },
{ text: "noembed",
deprecated: true },
{ text: "noframes",
deprecated: true },
{ text: "noscript" },
{ text: "object" },
{ text: "ol" },
{ text: "optgroup" },
{ text: "option" },
{ text: "output" },
{ text: "p" },
{ text: "param",
deprecated: true },
{ text: "picture" },
{ text: "plaintext",
deprecated: true },
{ text: "portal",
experimental: true },
{ text: "pre" },
{ text: "progress" },
{ text: "q" },
{ text: "rb",
deprecated: true },
{ text: "rp" },
{ text: "rt" },
{ text: "rtc",
deprecated: true },
{ text: "ruby" },
{ text: "s" },
{ text: "samp" },
{ text: "script" },
{ text: "search" },
{ text: "section" },
{ text: "select" },
{ text: "slot" },
{ text: "small" },
{ text: "source" },
{ text: "span" },
{ text: "strike",
deprecated: true },
{ text: "strong" },
{ text: "style" },
{ text: "sub" },
{ text: "summary" },
{ text: "sup" },
{ text: "table" },
{ text: "tbody" },
{ text: "td" },
{ text: "template" },
{ text: "textarea" },
{ text: "tfoot" },
{ text: "th" },
{ text: "thead" },
{ text: "time" },
{ text: "title" },
{ text: "tr" },
{ text: "track" },
{ text: "tt",
deprecated: true },
{ text: "u" },
{ text: "ul" },
{ text: "var" },
{ text: "video" },
{ text: "wbr" },
{ text: "xmp",
deprecated: true }

    ]
};






class HTMLDoc extends Document {
    
    constructor(plaintext, {predictiveTags = tags} = {}){
        super(plaintext);

        this.predictions = new Predictions([predictiveTags]);
    }

    onCreate(plaintext){
        const splitLines = this.splitLines(plaintext);

        this.lines = this.parse(splitLines);
    }

    parse(splitLines){
        // Opening Tags
        const openingTagRe = /(?<openingBracket><(?=[^\/]))(?<tagName>[a-zA-Z0-9-]+){1}(?<attributes>[^<>]*)(?<closingBracket>>{0,1})/g;
        const closingTagRe = /<\/(?<tagName>[a-zA-Z-0-9]+)>/g;
        const closingTagPlaceholderRe = /{{(?<tagName>[a-zA-Z-0-9]+)}}/g;
        const attributeRe = /(?<name>[a-zA-Z0-9]+(?==))=(?:(?<quoteType>"|')(?<quotedValue>[^"']*)(?:"|')|(?<bareValue>[a-zA-Z0-9]*))/g;
        // Parent has split into lines. Now I can parse the lines for HTML
        splitLines.forEach((line, index) => {
            // Replace closing tags with a placeholder to replace AFTER replacing opening tags
            let parsedLine = line.replace(closingTagRe, (match, tagName) => {
                return `{{${tagName}}}`
            })

            // Replace opening tags
            parsedLine = parsedLine.replace(openingTagRe, (match, openingBracket, tagName, attributes, closingBracket) => {
                let parsedMatch = "";
                
                parsedMatch += this.createWrapper("<", "opening-angle-bracket").outerHTML
                parsedMatch += this.createWrapper(tagName, "tagname", "tagname").outerHTML

                if(attributes){
                    //parsedMatch += "NEED TO PARSE ATTRIBUTES"
                    let parsedAttributes = attributes.replace(attributeRe, (match, name, quoteType, quotedValue, bareValue) => {
                        let parsedAttribute = "";

                        parsedAttribute += this.createWrapper(name, "attribute-name").outerHTML
                        parsedAttribute += this.createWrapper("=", "equal-sign").outerHTML

                        if(quotedValue){
                            parsedAttribute += this.createWrapper(`${quoteType}`, "open-quote").outerHTML
                            parsedAttribute += this.createWrapper(quotedValue, "attribute-value").outerHTML
                            parsedAttribute += this.createWrapper(`${quoteType}`, "close-quote").outerHTML
                        } else if(bareValue) {
                            parsedAttribute += this.createWrapper(bareValue, "attribute-value").outerHTML
                        }

                        return parsedAttribute
                    })
                    parsedMatch += parsedAttributes
                }

                if(closingBracket){
                    parsedMatch += this.createWrapper(">", "closing-angle-bracket").outerHTML
                }

                return parsedMatch
                
            })


            parsedLine = parsedLine.replace(closingTagPlaceholderRe, (match, tagName) => {
                let parsedMatch = "";
                
                parsedMatch += this.createWrapper("<", "opening-angle-bracket").outerHTML
                parsedMatch += this.createWrapper("/", "backslash").outerHTML
                parsedMatch += this.createWrapper(tagName, "tagname").outerHTML
                parsedMatch += this.createWrapper(">", "closing-angle-bracket").outerHTML

                return parsedMatch
                
            })

            if(parsedLine === ""){
                parsedLine = " "
            }

            

            splitLines[index] = this.createLine(parsedLine)

        })


        return splitLines

    }

}

export {HTMLDoc}