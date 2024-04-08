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
{ text: "/implement close tag" },
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



const constObjDeclarationRe = /const (?<variableName>[a-zA-Z0-9]+) *= *{(?<object>[^}]*)}/g;


const varLetConstDec = /(?<type>const|let|var) (?<name>[a-zA-Z0-9]+) *= *(?:(?<obj>{[^}]*})|(?<string>"[^"]*"))/g;


const JSRegexpressions = {
    "string": /(?<string>".*")/g,
    "className": /class (?<className>[a-zA-Z0-9]+)/g,
    "variableDec": /(?<type>const|let|var) (?<variableName>[a-zA-Z0-9]+)/g
}

class JSDoc extends Document {
    
    constructor(plaintext, {predictiveTags = tags} = {}){
        super(plaintext);

        this.predictions = new Predictions([predictiveTags]);
    }

    onCreate(plaintext){
        const {filteredScopes, scopeBlocks} = this.parseScopedBlock(plaintext)
        const splitLines = this.splitLines(plaintext);

        this.lines = this.parse(splitLines);
    }

    static #test;

    parseScopedBlock(plaintext) {
        const blockScopeRe = /\{[^{]*\}/g;
        const stringsRe = /"(?<_string>.*)"/g;
        const scopeBlocks = [];
        let scopeIndex = -1;

        let filteredScopes = plaintext;
        
         // Break into block scopes first
         filteredScopes = filteredScopes.replace(blockScopeRe, (match) => {
            scopeIndex++;

            let parsedScopeBlock = match;

            console.log("BLOCK QUOTE", match)
            parsedScopeBlock = parsedScopeBlock.replace(stringsRe, (match, _string) => {
                let parsedMatch = this.createWrapper("\"", "quote-open").outerHTML;

                parsedMatch += this.createWrapper(_string, "string").outerHTML
                parsedMatch += this.createWrapper("\"", "quote-close").outerHTML;

                return parsedMatch
            })


            scopeBlocks[scopeIndex] = parsedScopeBlock;
            return `**scopeblock-${scopeIndex}**`;
        })

        return {
            filteredScopes,
            scopeBlocks
        }
    }

    /**
     * 
     RE for HTML:
     /(?<=<[^>]*)(?<attrName>[\w-]+) *= *(?<attrValue>"[^"]*"|'[^']*'|[^ ]*)|(?<tagName>(?<=<)[\w-]+|(?<=<\/)[\w-]+)|(?<docType><!DOCTYPE *html *(?<legacyDoctypeString>.+){0,1}>)|(?:(?<openingCommentBlockTag><!--)(?<comments>[^<]*)(?<closingCommentBlockTag>-->))|(?<closingTagBracket><\/)|(?<openingTagBracket><)|(?<selfClosingBracket>\/>)|(?<tagCloseBracket>>)/g

     RE for JS
     /(?<singleQuoteString>'[^'].*')|(?<doubleQuoteString>"[^"].*")|(?<jsonProp>[\w]+(?= *:))|(?<property>#{0,1}[\w]+)(?= *=)|(?<method>#{0,1}[\w]+ *\()|(?<symbol>=>|[\(\);'"={}:,])|(?<keyword>\bconst\b|\bvar\b|\blet\b|\bstatic\b|\bclass\b)|(?<path>[\w]+\.)|(?<variable>[\w]+)/g

     Need to create an array that I can feed into it for list of keywords
     * 
     * 
     */

    parse(splitLines){
        console.log("HEY")
        const allStarRE = /(?<singleQuoteString>'[^'].*')|(?<doubleQuoteString>"[^"].*")|(?<jsonProp>[\w]+(?= *:))|(?<property>#{0,1}[\w]+)(?= *=)|(?<method>#{0,1}[\w]+ *\()|(?<symbol>=>|[\(\);'"={}:,])|(?<keyword>\bconst\b|\bvar\b|\blet\b|\bstatic\b|\bclass\b)|(?<path>[\w]+\.)|(?<variable>[\w]+)/g;
        const stringsRe = /"(?<_string>.*)"/g;
        const keywordsRe = /(?<_keyword>class|function|const|let|var) (?<_name>[a-zA-Z0-9]+)/g;
        const classesRe = /^(?<_indent>[ ]*)(?<_isPrivate>#){0,1}(?<_isStatic>static ){0,1}(?<_name>[a-zA-Z0-9]+)(?= *(?=(?<_isMethod>\()|(?<_isArrowMethod>= *\()|(?<_isProperty>=)|(?<_isDeclaration>;)))/g;
        const objectPathRe = /(?<_path>(?:(?:[a-zA-Z0-9$_]+\.)+[a-zA-Z0-9$_]+)+)/g;
        const variablesAsValue = /((?<_isEquals>=)|(?<_isColon>:))(?<_spacer> *)(?<_name>[a-zA-Z0-9_$]+)(?=[ ;\n,)]|$)/g;
        const argsRe = /(?<=\(|{|, *)(?<_arg>[\w]+)/g;

        splitLines.forEach((line, index) => {
            let parsedLine = line;

           

            /*parsedLine = parsedLine.replace(stringsRe, (match, _string) => {
                let parsedMatch = this.createWrapper("\"", "quote-open").outerHTML;

                parsedMatch += this.createWrapper(_string, "string").outerHTML
                parsedMatch += this.createWrapper("\"", "quote-close").outerHTML;

                return parsedMatch
            })*/

            parsedLine = parsedLine.replace(variablesAsValue, (match, ignore, _isEquals, _isColon, _spacer, _name) => {
                let parsedMatch = "";

                if(_isEquals){
                    parsedMatch = this.createWrapper("=", "operator-equals").outerHTML;
                } else if(_isColon){
                    parsedMatch = this.createWrapper(":", "operator-colon").outerHTML;
                }

                parsedMatch += this.createTextNode(" ".repeat(_spacer.length)).textContent;
                parsedMatch += this.createWrapper(_name, "variable").outerHTML;

                

                return parsedMatch
            })

            parsedLine = parsedLine.replace(objectPathRe, (match, _path) => {
                const pathSplit = _path.split(".");
                const object = pathSplit.shift();

                let parsedMatch = this.createWrapper(object, "path-object").outerHTML;

                pathSplit.forEach((property) => {
                    parsedMatch += this.createTextNode(".").textContent;
                    parsedMatch += this.createWrapper(property, "path-property").outerHTML;
                })

                return parsedMatch
            })

            

            parsedLine = parsedLine.replace(classesRe, (match, _indent, _isPrivate, _isStatic, _name, _isMethod, _isArrowMethod, _isProperty, _isDeclaration) => {

                let classPrefix = ["class"];
                let parsedMatch = this.createTextNode(" ".repeat(_indent.length)).textContent;

                if(_isStatic){
                    classPrefix.push("static")
                    parsedMatch += this.createWrapper("static", "class-static-prefix").outerHTML

                    
                }

                if(_isPrivate) {
                    classPrefix.push("private")
                    parsedMatch += this.createWrapper("#", "class-private-prefix").outerHTML
                }

                if(_isMethod) {
                    classPrefix.push("method")
                } else if (_isArrowMethod) {
                    classPrefix.push("arrowmethod")
                } else if (_isProperty) {
                    classPrefix.push("property")
                } else if (_isDeclaration) {
                    classPrefix.push("declaration")
                }

                
                parsedMatch += this.createWrapper(_name, classPrefix.join("-")).outerHTML

                return parsedMatch
            })

            

            parsedLine = parsedLine.replace(keywordsRe, (match, _keyword, _name) => {
                let parsedMatch = this.createWrapper(_keyword, `keyword-${_keyword}`).outerHTML;
                parsedMatch += this.createTextNode(" ").textContent
                parsedMatch += this.createWrapper(_name, `${_keyword}-name`).outerHTML
                parsedMatch += this.createTextNode(" ").textContent

                return parsedMatch
            })

            

            if(parsedLine === ""){
                parsedLine = " "
            }

            splitLines[index] = this.createLine(parsedLine)
        })

        return splitLines
    }

    parse2(splitLines){
        // Opening Tags
        const openingTagRe2 = /(?<openingBracket><(?=[^\/]))(?<tagName>[a-zA-Z0-9-\/]+){1}(?<attributes>[^<>]*)(?<closingBracket>>{0,1})/g;
        const openingTagRe = /(?<openingBracket><(?=[^]))(?<tagName>[a-zA-Z0-9-/]+){1}(?<attributes>[^<>]*)(?<closingBracket>>{0,1})/g;
        const closingTagRe = /<\/(?<tagName>[a-zA-Z-0-9]+)>/g;
        const unclosedClosingTagRe = /<\//g;
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

export {JSDoc}