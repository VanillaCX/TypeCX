[
    {
        name: "input",
        status: "standard",
        startTag: "required",
        endTag: "forbidden",
        categories: ["flow-content", "phrasing-content"],
        content: {
            ordered: [
                ["element:p", "element:h1|element:h2|element:h3|element:h4|element:h5|element:h6"],
                ["element:h1|element:h2|element:h3|element:h4|element:h5|element:h6", "element:p"],
            ],
            unordered: ["element:script", "element:template"],
            forbidden: ["hgroup"]
        },
        attributes: {
            global: true,
            standard: ["accept?requires=type"],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "hgroup",
        status: "standard",
        startTag: "required",
        endTag: "required",
        categories: ["flow-content", "phrasing-content"],
        content: {
            ordered: [
                ["element:p", "element:h1|element:h2|element:h3|element:h4|element:h5|element:h6"],
                ["element:h1|element:h2|element:h3|element:h4|element:h5|element:h6", "element:p"],
            ],
            unordered: ["element:script", "element:template"],
            forbidden: ["hgroup"]
        },
        attributes: {
            global: true,
            standard: ["accept"],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "p",
        status: "standard",
        startTag: "required",
        endTag: "optional?next-sibling=(element:address||element:article||element:aside||element:blockquote||element:details||element:div||element:dl||element:fieldset||element:figcaption||element:figure||element:footer||element:form||element:h1||element:h2||element:h3||element:h4||element:h5||element:h6||element:header||element:hgroup||element:hr||element:main||element:menu||element:nav||element:ol||element:p||element:pre||element:search||element:section||element:table||element:ul)||child-nodelist=empty&&parent-sibling!=(element:a||element:audio||element:del||element:ins||element:map||element:noscript||element:video)",
        categories: ["flow-content", "palpable-content"],
        content: {
            ordered: [],
            unordered: ["category:phrasing"],
            forbidden: []
        },
        attributes: {
            global: true,
            standard: [],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "html",
        status: "standard",
        startTag: "optional?first-child!=comment",
        endTag: "optional?first-child!=comment",
        categories: [],
        content: {
            ordered: ["element:head", "element:body"],
            unordered: [],
            forbidden: []
        },
        attributes: {
            global: true,
            standard: [],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "body",
        status: "standard",
        startTag: "optional?child-nodelist=empty||first-child!=(whitespace||comment)",
        endTag: "optional?next-sibling!=comment",
        categories: [],
        content: {
            ordered: [],
            unordered: ["category:flow-content"],
            forbidden: []
        },
        attributes: {
            global: true,
            standard: ["onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpageswap", "onpagehide", "onpagereveal", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload"],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "head",
        status: "standard",
        startTag: "optional?child-nodelist=empty||first-child=element",
        endTag: "optional?next-sibling!=(comment|whitespace)",
        categories: [],
        content: {
            ordered: [],
            unordered: ["element:title?max=1", "element:base?max=1", "category:metadata-content"],
            forbidden: []
        },
        attributes: {
            global: true,
            standard: ["onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpageswap", "onpagehide", "onpagereveal", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload"],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "h1",
        status: "standard",
        startTag: "required",
        endTag: "required",
        categories: ["flow-content", "palpable-content", "heading-content"],
        content: {
            ordered: [],
            unordered: ["category:phrasing"],
            forbidden: []
        },
        attributes: {
            global: true,
            standard: [],
            nonStandard: [],
            experimental: [],
            deprecated: [],
        }
    },{
        name: "h2",
        ref: "element:h1"
    },{
        name: "h3",
        ref: "element:h1"
    },{
        name: "h4",
        ref: "element:h1"
    },{
        name: "h5",
        ref: "element:h1"
    },{
        name: "h6",
        ref: "element:h1"
    }
]