class HTMLDocV2 extends Document {
    constructor(plaintext){
        super(plaintext)

    }

    splitLines(plaintext){
        const arrayOfLines = plaintext.split("\n");

        return arrayOfLines.map((line) => {
            //return line.trim()

            return this.createLine(line)
        });
    }

    parse(plaintext){
        const openingTags = /<[^</]*>/g;
        const closingTags = /<\/(?<tagName>[a-zA-Z0-9-]+)>/g;
        const closingTagPlaceholders = /{{\/(?<tagName>[a-zA-Z0-9-]+)}}/g;

        plaintext = plaintext.replace(closingTags, (match, tagName) => {
            return `{{/${tagName}}}`
        })

        plaintext = plaintext.replace(openingTags, (match) => {
            return this.parseOpeningTag(match)
        })

        plaintext = plaintext.replace(closingTagPlaceholders, (match, tagName) => {
            let parsedMatch = "";

            parsedMatch += this.createWrapper("<", "opening-angle-bracket").outerHTML
            parsedMatch += this.createWrapper("/", "backslash").outerHTML
            parsedMatch += this.createWrapper(tagName, "tagname").outerHTML
            parsedMatch += this.createWrapper(">", "closing-angle-bracket").outerHTML;

            return parsedMatch
        })

        this.lines = this.splitLines(plaintext);
    }

    onCreate(plaintext){
        this.parse(plaintext)
    }

    

    parseOpeningTag (plaintext) {
        const attributeRe = /(?<name>[a-zA-Z0-9]+(?==))=(?:(?<quoteType>"|')(?<quotedValue>[^"']*)(?:"|')|(?<bareValue>[a-zA-Z0-9]*))/g;
        const openingTagRe = /(?<openingBracket><(?=[^\/]))(?<tagName>[a-zA-Z0-9-]+){1}(?<attributes>[^<>]*)(?<closingBracket>>{0,1})/g;
        plaintext = plaintext.replace(openingTagRe, (match, openingBracket, tagName, attributes, selfClosingSlash, closingBracket) => {
            let parsedMatch = "";
                
            parsedMatch += this.createWrapper("<", "opening-angle-bracket").outerHTML
            parsedMatch += this.createWrapper(tagName, "tagname").outerHTML

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

            parsedMatch += this.createWrapper(">", "closing-angle-bracket").outerHTML

            return parsedMatch
        })

        return plaintext
    }

    

}