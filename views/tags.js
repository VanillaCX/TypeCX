[{
    name: "a",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:a"]
    },
    content: {
        permitted: ["category:transparent-content"],
        forbidden: ["category:interactive-content", "tag:a", "attribute:tabindex"]
    },
    DOMInterface: "HTMLAnchorElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["download", "href", "hreflang", "ping", "referrerpolicy", "rel", "target", "type"],
        deprecated: ["charset", "coords", "name", "rev", "shape"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element"
    }],
    references: [{
        name: "<a>: The Anchor element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
    }],
},{
    name: "abbr",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element"
    }],
    references: [{
        name: "<abbr>: The Abbreviation element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
    }],
},{
    name: "acronym",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#acronym"
    }],
    references: [{
        name: "<acronym>: Deprecated",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym"
    }],
},{
    name: "address",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:address"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:address", "tag:hgroup", "tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6", "article", "aside", "section", "nav", "header", "footer"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/sections.html#the-address-element"
    }],
    references: [{
        name: "<address>: The Contact Address element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address"
    }],
},{
    name: "area",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        required: ["ancestor-tag:map"],
        forbidden: []
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLAreaElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["alt", "coords", "download", "href", "ping", "referrerpolicy", "rel", "shape", "target"],
        deprecated: []
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element"
    }],
    references: [{
        name: "<area>: The Image Map Area element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area"
    }],
},{
    name: "article",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["ancestor-tag:address"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/sections.html#the-article-element"
    }],
    references: [{
        name: "<article>: The Article Contents element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
    }],
},{
    name: "aside",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content", "palpable-content"],
    parents: {
        permitted: ["category:flow-content"],
        forbidden: ["ancestor-tag:address"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["download", "href", "hreflang", "ping", "referrerpolicy", "rel", "target", "type"],
        deprecated: ["charset", "coords", "name", "rev", "shape"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/sections.html#the-aside-element"
    }],
    references: [{
        name: "<aside>: The Aside element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
    }],
},{
    name: "audio",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embeded-content", "interactive-content?requires-attribute:controls", "palpable-content?requires-attribute:controls"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
        forbidden: ["tag:a"]
    },
    content: {
        permitted: ["tag:track?requires-attribute:src", "tag:source"],
        forbidden: []
    },
    DOMInterface: "HTMLAudioElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["autoplay", "controls", "controlslist", "crossorigin", "disableremoteplayback", "loop", "muted", "preload", "src"],
        deprecated: []
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/media.html#the-audio-element"
    }],
    references: [{
        name: "<audio>: The Embed Audio element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
    }],
},{
    name: "b",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element"
    }],
    references: [{
        name: "<b>: The Bring Attention To element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b"
    }],
},{
    name: "base",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    isUnique: true,
    categories: ["metadata-content"],
    parents: {
        permitted: ["tag:head"],
        forbidden: []
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLBaseElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["href", "target"],
        deprecated: ["charset", "coords", "name", "rev", "shape"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/semantics.html#the-base-element"
    }],
    references: [{
        name: "<base>: The Document Base URL element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"
    }],
},{
    name: "bdi",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element"
    }],
    references: [{
        name: "<bdi>: The Bidirectional Isolate element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
    }],
},{
    name: "bdo",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element"
    }],
    references: [{
        name: "<bdo>: The Bidirectional Text Override element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo"
    }],
},{
    name: "big",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "palpable-content"],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#big"
    }],
    references: [{
        name: "<big>: The Bigger Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big"
    }],
},{
    name: "blockquote",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["cite"],
        deprecated: []
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element"
    }],
    references: [{
        name: "<blockquote>: The Block Quotation element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
    }],
},{
    name: "body",
    closingTag: "optional",
    openingTag: "optional?first-child!=space|comment|tag:script|tag:style",
    isDeprecated: false,
    isExperimental: false,
    isUnique: true,
    categories: [],
    parents: {
        permitted: ["tag:html"],
        forbidden: []
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLBodyElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["onafterprint", "onbeforeprint", "onbeforeunload", "onblur", "onerror", "onfocus", "onhashchange", "onlanguagechange", "onload", "onmessage", "onoffline", "ononline", "onpopstate", "onredo", "onresize", "onstorage", "onundo", "onunload"],
        deprecated: ["alink", "background", "bgcolor", "bottommargin", "leftmargin", "link", "rightmargin", "text", "topmargin", "vlink"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-body-element"
    }],
    references: [{
        name: "<body>: The Document Body element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
    }],
},{
    name: "br",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLBRElement",
    attributes: {
        acceptGlobal: true,
        permitted: [],
        deprecated: ["clear"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element"
    }],
    references: [{
        name: "<a>: The Anchor element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"
    }],
},{
    name: "button",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "listed", "labelable", "submittable", "form-associated", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["category:ineractive-content"] // DEV: redundant condition ?
    },
    DOMInterface: "HTMLButtonElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formonvalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"],
        deprecated: []
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-button-element"
    }],
    references: [{
        name: "<button>: The Button element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
    }],
},{
    name: "canvas",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: ["tag:a"]
    },
    content: {
        permitted: ["category:transparent-content", "tag:a", "tag:button", "tag:input?attribute:type=checkbox|radio|button"],
        forbidden: ["category:interactive-content"]
    },
    DOMInterface: "HTMLCanvasElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["height", "width"],
        deprecated: ["moz-opaque"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-canvas-element"
    }],
    references: [{
        name: "<canvas>: The Graphics Canvas element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"
    }],
},{
    name: "caption",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:table"],
        forbidden: []
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["align"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-caption-element"
    }],
    references: [{
        name: "<caption>: The Table Caption element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption"
    }],
},{
    name: "center",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["css:text-align", "css:margin", "css:display"],
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#center"
    }],
    references: [{
        name: "<center>: The Centered Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center"
    }],
},{
    name: "cite",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element"
    }],
    references: [{
        name: "<cite>: The Citation element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"
    }],
},{
    name: "code",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element"
    }],
    references: [{
        name: "<code>: The Inline Code element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"
    }],
},{
    name: "col",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:colgroup?forbidden=attribute:span"],
        forbidden: []
    },
    content: {
    },
    DOMInterface: "HTMLTableColElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["span"],
        deprecated: ["align", "bgcolor", "char", "charoff", "valign", "width"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-col-element"
    }],
    references: [{
        name: "<col>: The Table Column element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col"
    }],
},{
    name: "colgroup",
    closingTag: "optional?first-child!=space|comment",
    openingTag: "optional?first-child=tag:col&previous-sibling!=opening-tag:colgroup:",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:table?before=tag:thead+tag:tbody+tag:tfoot+tag:tr&after=tag:caption"],
        forbidden: []
    },
    content: {
        permitted: ["tag:col?forbidden=attribute:span"],
        forbidden: ["category:interactive-content", "tag:a", "attribute:tabindex"]
    },
    DOMInterface: "HTMLTableColElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["span"],
        deprecated: ["align", "bgcolor", "char", "charoff", "valign", "width"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-colgroup-element"
    }],
    references: [{
        name: "<colgroup>: The Table Column Group element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup"
    }],
},{
    name: "data",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: []
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLDataElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["value"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element"
    }],
    references: [{
        name: "<data>: The Data element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
    }],
},{
    name: "datalist",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: ["tag:a"]
    },
    content: {
        permitted: ["category:phrasing-content", "tag:option"],
        forbidden: []
    },
    DOMInterface: "HTMLDataListElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-datalist-element"
    }],
    references: [{
        name: "<datalist>: The HTML Data List element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"
    }],
},{
    name: "dd",
    closingTag: "optional?next-child=empty|tag:dd|tag:dt",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:dl", "tag:div>dl"],
        forbidden: []
    },
    content: {
        permitted: ["category:flow-content"],
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dd-element"
    }],
    references: [{
        name: "<dd>: The Description Details element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd"
    }],
},{
    name: "del",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: ["tag:a"]
    },
    content: {
        permitted: ["category:transparent-content"],
    },
    DOMInterface: "HTMLModElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["cite", "datetime"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-del-element"
    }],
    references: [{
        name: "<del>: The Deleted Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"
    }],
},{
    name: "details",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["tag:summary?position=first-child&count=1"],
    },
    DOMInterface: "HTMLDetailsElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["open", "name"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-details-element"
    }],
    references: [{
        name: "<details>: The Details disclosure element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
    }],
},{
    name: "dfn",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["tag:dfn"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["title"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element"
    }],
    references: [{
        name: "<dfn>: The Definition element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn"
    }],
},{
    name: "dialog",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content"],
    },
    DOMInterface: "HTMLDialogElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["open"],
        forbidden: ["tabindex"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dialog-element"
    }],
    references: [{
        name: "<dialog>: The Dialog element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
    }],
},{
    name: "dir",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["tag:ul"],
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLDirectoryElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["compact"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#dir"
    }],
    references: [{
        name: "<dir>: The Directory element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir"
    }],
},{
    name: "div",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content", "tag:script", "tag:template"],
        forbidden: ["category:interactive-content", "tag:a", "attribute:tabindex"]
    },
    DOMInterface: "HTMLDivElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["align"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-div-element"
    }],
    references: [{
        name: "<div>: The Content Division element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
    }],
},{
    name: "dl",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content?this-has-descendant=tag:dt+tag:dd"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["tag:dt?next-child=tag:dd", "tag:dd?previous-child=tag:dt", "tag:div", "tag:script", "tag:template"],
    },
    DOMInterface: "HTMLDListElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dl-element"
    }],
    references: [{
        name: "<dl>: The Description List element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
    }],
},{
    name: "dt",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:dl", "tag:div>dl"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:header", "tag:footer", "category:sectioning-content", "category:heading-content"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dt-element"
    }],
    references: [{
        name: "<dt>: The Description Term element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt"
    }],
},{
    name: "em",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element"
    }],
    references: [{
        name: "<em>: The Emphasis element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
    }],
},{
    name: "embed",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLEmbedElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["height", "src", "type", "width"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-embed-element"
    }],
    references: [{
        name: "<embed>: The Embed External Content element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed"
    }],
},{
    name: "fencedframe",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: true,
    categories: ["flow-content", "phrasing-content", "embedded-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLFencedFrameElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["allow", "height", "width"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-fencedframe-element"
    }],
    references: [{
        name: "<fencedframe>: The Fenced Frame element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fencedframe"
    }],
},{
    name: "fieldset",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-root", "listed", "form-associated", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content", "tag:legend?position=first-child&count=1"],
        forbidden: []
    },
    DOMInterface: "HTMLFieldSetElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["disabled", "form", "name"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-fieldset-element"
    }],
    references: [{
        name: "<fieldset>: The Field Set element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
    }],
},{
    name: "figcaption",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:figure?position=first-child|last-child&count=1"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-figcaption-element"
    }],
    references: [{
        name: "<figcaption>: The Figure Caption element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"
    }],
},{
    name: "figure",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["tag:figcaption?position=first-child|last-child", "category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-figure-element"
    }],
    references: [{
        name: "<figure>: The Figure with Optional Caption element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
    }],
},{
    name: "font",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["css:font"],
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLFontElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["color", "face", "size"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#font"
    }],
    references: [{
        name: "<font>",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font"
    }],
},{
    name: "footer",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["tag:address", "tag:footer", "tag:header"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:footer", "tag:header"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-footer-element"
    }],
    references: [{
        name: "<footer>: The Footer element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
    }],
},{
    name: "form",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:form"]
    },
    DOMInterface: "HTMLFormElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["accept-charset", "autocapitalize", "autocomplete", "name", "rel", "action", "enctype", "method", "novalidate", "target"],
        deprecated: ["accept"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-form-element"
    }],
    references: [{
        name: "<form>: The Form element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
    }],
},{
    name: "frame",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["tag:iframe"],
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["src", "name", "noresize", "scrolling", "marginheight", "marginwidth", "frameborder"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#frame"
    }],
    references: [{
        name: "<frame>",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame"
    }],
},{
    name: "frameset",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["tag:iframe"],
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["cols", "rows"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#frameset"
    }],
    references: [{
        name: "<frame>",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset"
    }],
},{
    name: "h1",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    isUnique: true,
    categories: ["flow-content", "heading-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6"]
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6"]
    },
    DOMInterface: "HTMLHeadingElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements"
    }],
    references: [{
        name: "<h1>: The HTML Section Heading elements",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
    }],
},{
    name: "h2",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "heading-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6"]
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6"]
    },
    DOMInterface: "HTMLHeadingElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements"
    }],
    references: [{
        name: "<h1>: The HTML Section Heading elements",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
    }],
},{
    name: "h3",
    reference: "tag:h2"
},{
    name: "h4",
    reference: "tag:h2"
},{
    name: "h5",
    reference: "tag:h2"
},{
    name: "h6",
    reference: "tag:h2"
},{
    name: "head",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:html?position=first-child"],
    },
    content: {
        permitted: ["category:metadata-content?ancestor-tag!=iframe[srcdoc]"],
        required: ["tag:title?ancestor-tag!=iframe[srcdoc]"],
        forbidden: []
    },
    DOMInterface: "HTMLHeadElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["profile"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-head-element"
    }],
    references: [{
        name: "<head>: The Document Metadata (Header) element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
    }],
},{
    name: "header",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["tag:address", "tag:header", "tag:footer"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: ["tag:header", "tag:footer"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-header-element"
    }],
    references: [{
        name: "<header>: The Header element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
    }],
},{
    name: "hgroup",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "heading-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["tag:p?position=first-child|last-child", "tag:h1", "tag:h2", "tag:h3", "tag:h4", "tag:h5", "tag:h6"], // DEV can be multiple P at begining OR end.
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-hgroup-element"
    }],
    references: [{
        name: "<hgroup>: The Heading Group element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup"
    }],
},{
    name: "hr",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content"],
    parents: {
        permitted: ["accepts-category:flow-content", "tag:select"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLHRElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["align", "color", "noshade", "size", "width"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-hr-element"
    }],
    references: [{
        name: "<hr>: The Thematic Break (Horizontal Rule) element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"
    }],
},{
    name: "html",
    closingTag: "optional?first-child-of-opening-tag!=comment",
    openingTag: "optional?first-child!=comment",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: [],
    },
    content: {
        permitted: ["tag:head?count=1", "tag:body?count=1"],
        forbidden: []
    },
    DOMInterface: "HTMLHtmlElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["manifest", "version", "xmlns"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-html-element"
    }],
    references: [{
        name: "<html>: The HTML Document / Root element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
    }],
},{
    name: "i",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element"
    }],
    references: [{
        name: "<i>: The Idiomatic Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i"
    }],
},{
    name: "iframe",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content", "interactive-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLIFrameElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["allow", "allowfullscreen", "allowpaymentrequest", "height", "loading", "name", "referrerpolicy", "sandbox", "allow-top-navigation-to-custom-protocols", "src", "srcdoc", "width"],
        experimental: ["browsingtopîcs", "credentialless", "csp"],
        deprecated: ["allowpaymentrequest", "align", "frameborder", "longdesc", "marginheight", "marginwidth", "scrolling"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-iframe-element"
    }],
    references: [{
        name: "<iframe>: The Inline Frame element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"
    }],
},{
    name: "img",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content", "palpable-content", "interactive-content?this-has-attribute:usemap"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLImageElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["alt", "crossorigin", "decoding", "elementtiming", "fetchpriority", "height", "ismap", "loading", "referrerpolicy", "sizes", "src", "srcset", "width", "usemap"],
        deprecated: ["align", "border", "hspace", "longdesc", "name", "vspace"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-img-element"
    }],
    references: [{
        name: "<img>: The Image Embed element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
    }],
},{
    name: "input",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "listed", "submittable", "resettable", "form-associated", "phrasing-content", "labelable[type!=hidden]", "palpable-content[type!=hidden]"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLInputElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["accept[type=file]", "alt[type=image]", "autocapitalize[type!=url|email|password]", "autocomplete[type!=checkbox|radio]", "capture[type=file]", "checked[type=checkbox|radio]", "dirname[type=hidden|text|search|url|tel|email]", "disabled", "form", "formaction[type=image|submit]", "formenctype[type=image|submit]", "formmethod[type=image|submit]", "formnovalidate[type=image|submit]", "formtarget[type=image|submit]", "height[type=image]", "list[type!=hidden|password|checkbox|radio|submit|button]", "max[type=date|month|week|time|datetime-local|number|range]", "maxlength[type=text|search|url|tel|email|password]", "min[type=date|month|week|time|datetime-local|number|range]", "minlength[type=text|search|url|tel|email|password]", "multiple[type=email|file]", "name", "pattern[type=text|search|url|tel|email|password]", "placeholder[type=text|search|url|tel|email|password]", "placeholder[type=text|search|url|tel|email|password|number]", "popovertarget[type=button]", "popovertargetaction[type=button]", "readonly[type!=hidden|range|color|checkbox|radio|submit|button]", "required[type!=hidden|range|color|submit|button]", "size[type=text|search|url|tel|email|password]", "src[type=image]", "step[type=date|month|week|time|datetime-local|number|range]", "type", "value[type!=image]", "width[type=image]"],
        nonStandard: ["autocorrect", "incremental", "mozactionhint", "orient", "results", "webkitdirectory"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-input-element"
    }],
    references: [{
        name: "<input>: The Input (Form Input) element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
    }],
},{
    name: "ins",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["phrasing-content", "flow-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:transparent-content"],
        forbidden: []
    },
    DOMInterface: "HTMLModElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["cite", "datetime"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ins-element"
    }],
    references: [{
        name: "<ins>: The Inserted Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"
    }],
},{
    name: "kbd",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element"
    }],
    references: [{
        name: "<kbd>: The Keyboard Input element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd"
    }],
},{
    name: "label",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "form-associated", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content", "category:labelable?count=1"],
        forbidden: ["tag:label"]
    },
    DOMInterface: "HTMLLabelElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["for"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-label-element"
    }],
    references: [{
        name: "<label>: The Label element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"
    }],
},{
    name: "legend",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:fieldset?position=first-child"],
    },
    content: {
        permitted: ["category:phrasing-content", "category:heading-content"],
        forbidden: []
    },
    DOMInterface: "HTMLLegendElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-legend-element"
    }],
    references: [{
        name: "<legend>: The Field Set Legend element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"
    }],
},{
    name: "li",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:ul", "tag:ol", "tag:menu"],
        deprecated: ["tag:dir"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLLIElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["value"],
        deprecated: [],
        nonStandard: ["type"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-li-element"
    }],
    references: [{
        name: "<li>: The List Item element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"
    }],
},{
    name: "link",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: ["metadata-content", "flow-content?this-has-attribute:itemprop", "phrasing-content?this-has-attribute:itemprop"],
    parents: {
        permitted: ["accepts-category:metadata-content", "accepts-category:phrasing-content?this-has-attribute:itemprop"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLLinkElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["as", "crossorigin", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "sizes", "title", "type"],
        experimental: ["blocking", "disabled"],
        deprecated: ["methods", "target", "charset", "rev"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-link-element"
    }],
    references: [{
        name: "<link>: The External Resource Link element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
    }],
},{
    name: "main",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["tag:html", "tag:body", "tag:div", "tag:form"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-main-element"
    }],
    references: [{
        name: "<main>: The Main element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
    }],
},{
    name: "map",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:transparent-content"],
        forbidden: []
    },
    DOMInterface: "HTMLMapElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["name"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-map-element"
    }],
    references: [{
        name: "<map>: The Image Map element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map"
    }],
},{
    name: "mark",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element"
    }],
    references: [{
        name: "<mark>: The Mark Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark"
    }],
},{
    name: "marquee",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLMarqueeElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["behavious", "bgcolor", "direction", "height", "hspace", "loop", "scrollamount", "scrolldelay", "truespeed", "vspace", "width"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/rendering.html#the-marquee-element-2"
    }],
    references: [{
        name: "<marquee>: The Marquee element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee"
    }],
},{
    name: "menu",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content:has-descendant=tag:li"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["tag:li", "tag:script", "tag:template"],
        forbidden: []
    },
    DOMInterface: "HTMLMenuElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-menu-element"
    }],
    references: [{
        name: "<menu>: The Menu element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu"
    }],
},{
    name: "menuitem",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    isNonStandard: true,
    categories: [],
    parents: {
        permitted: ["tag:menu"],
    },
    content: {
    },
    DOMInterface: "HTMLMenuItemElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["checked", "command", "default", "disabled", "icon", "label", "radiogroup", "type"]
    },
    specifications: [],
    references: [{
        name: "<menuitem>",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem"
    }],
},{
    name: "meta",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: ["metadata-content", "flow-content?this-has-attribute:itemprop", "phrasing-content?this-has-attribute:itemprop"],
    parents: {
        permitted: ["tag:head?this-has-attribute:charset|http-equip", "tag:meta?ancestor-tag:head", "accepts-category:metadata-content?this-has-attribute:name|itemprop", "accepts-category:flow-content?this-has-attribute:itemprop"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLMetaElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["charset", "content", "http-equiv", "name"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-meta-element"
    }],
    references: [{
        name: "<meta>: The metadata element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
    }],
},{
    name: "meter",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "labelable-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: ["tag:meter"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["tag:meter"]
    },
    DOMInterface: "HTMLMeterElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["value", "min", "max", "low", "high", "optimum", "form"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-meter-element"
    }],
    references: [{
        name: "<meter>: The HTML Meter element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter"
    }],
},{
    name: "nav",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "sectioning-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content"],
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-nav-element"
    }],
    references: [{
        name: "<nav>: The Navigation Section element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
    }],
},{
    name: "nobr",
    closingTag: "required",
    isDeprecated: true,
    alternatives: ["css:white-space"],
    isExperimental: false,
    isNonStandard: true,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
    },
    specifications: [],
    references: [{
        name: "<nobr>: The Non-Breaking Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr"
    }],
},{
    name: "noembed",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#noembed"
    }],
    references: [{
        name: "<noembed>: The Embed Fallback element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed"
    }],
},{
    name: "noframes",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
        permitted: ["reference-tag:body"],
        forbidden: ["tag:frameset", "tag:frame"]
    },
    DOMInterface: "HTMLElement",
    attributes: {
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/obsolete.html#noframes"
    }],
    references: [{
        name: "<noframes>: The Frame Fallback element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes"
    }],
},{
    name: "noscript",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["metadata-content", "flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
        forbidden: ["ancestor-tag:noscript", "ancestor-tag:head"]
    },
    content: {
        permitted: ["category:flow-content", "category:phrasing-content"], // DEV: More complicated than this, to be fine tuned. 
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-noscript-element"
    }],
    references: [{
        name: "<noscript>: The Noscript element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"
    }],
},{
    name: "object",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content", "palpable-content", "interactive-content?this-has-attribute:usemap", "listed-content", "submittable", "form-associated"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: ["tag:param?position=first-child", "category:transparent-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["data", "form", "height", "name", "type", "width"],
        deprecated: ["archive", "border", "classid", "codebase", "codetype", "declare", "standby", "usemap"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-object-element"
    }],
    references: [{
        name: "<object>: The External Object element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object"
    }],
},{
    name: "ol",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content:has-descendant=tag:li"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["tag:li", "tag:script", "tag:template"],
        forbidden: []
    },
    DOMInterface: "HTMLOListElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["reversed", "start", "type"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ol-element"
    }],
    references: [{
        name: "<ol>: The Ordered List element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
    }],
},{
    name: "optgroup",
    closingTag: "required", // DEV: Optional, fine tune. 
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:select"],
    },
    content: {
        permitted: ["tag:option"],
        forbidden: []
    },
    DOMInterface: "HTMLOptGroupElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["disabled", "label"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-optgroup-element"
    }],
    references: [{
        name: "<optgroup>: The Option Group element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"
    }],
},{
    name: "option",
    closingTag: "required", // DEV: Optional, fine tune. 
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:select", "tag:optgroup", "tag:datalist"],
    },
    content: {
        permitted: ["mimetype:text/plain"],
        forbidden: []
    },
    DOMInterface: "HTMLOptionElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["disabled", "label", "selected", "value"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-option-element"
    }],
    references: [{
        name: "<option>: The HTML Option element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option"
    }],
},{
    name: "output",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "listed", "labelable", "resettable", "form-associated", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLOutputElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["for", "form", "name"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-output-element"
    }],
    references: [{
        name: "<output>: The Output element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output"
    }],
},{
    name: "p",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLParagraphElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-p-element"
    }],
    references: [{
        name: "<p>: The Paragraph element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
    }],
},{
    name: "param",
    closingTag: "forbidden",
    isDeprecated: true,
    alternatives: ["tag:object[data-attributes]"],
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["accepts-category:tag:object?position=first-child"],
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLParamElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["name", "value", "type", "valuetype"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-param-element"
    }],
    references: [{
        name: "<param>: The Object Parameter element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param"
    }],
},{
    name: "picture",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "embedded-content"],
    parents: {
        permitted: ["accepts-category:embedded-content"],
    },
    content: {
        permitted: ["tag:source", "tag:img?count=1", "tag:script", "tag:template"],
        forbidden: []
    },
    DOMInterface: "HTMLPictureElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-picture-element"
    }],
    references: [{
        name: "<picture>: The Picture element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"
    }],
},{
    name: "plaintext",
    closingTag: "forbidden",
    isDeprecated: true,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
    },
    content: {
        permitted: [],
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-plaintext-element"
    }],
    references: [{
        name: "<plaintext>: The Plain Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext"
    }],
},{
    name: "portal",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: true,
    categories: ["XXX-content"],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLPortalElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["referrerpolicy", "src"],
    },
    specifications: [{
        name: "Portals",
        author: "WICG",
        url: "https://wicg.github.io/portals/#the-portal-element"
    }],
    references: [{
        name: "<portal>: The Portal element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal"
    }],
},{
    name: "pre",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLPreElement",
    attributes: {
        acceptGlobal: true,
        deprecated: ["cols", "width", "wrap"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-pre-element"
    }],
    references: [{
        name: "<pre>: The Preformatted Text element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre"
    }],
},{
    name: "progress",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "labelable", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: ["tag:progress"]
    },
    DOMInterface: "HTMLProgressElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["max", "value""],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-progress-element"
    }],
    references: [{
        name: "<progress>: The Progress Indicator element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"
    }],
},{
    name: "q",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLQuoteElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["cite"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element"
    }],
    references: [{
        name: "<q>: The Inline Quotation element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    }],
},{
    name: "rb",
    closingTag: "optional", // DEV check rules
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["accepts-category:tag:ruby"],
    },
    content: {
        permitted: [], // Check; not clear on MDN
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rb-element"
    }],
    references: [{
        name: "<rb>: The Ruby Base element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb"
    }],
},{
    name: "rp",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:ruby"], // DEV more options. check.
    },
    content: {
        permitted: ["mimetype:text/plain"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rp-element"
    }],
    references: [{
        name: "<rp>: The Ruby Fallback Parenthesis element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp"
    }],
},{
    name: "rt",
    closingTag: "optional", // DEV check conditions
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:ruby"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element"
    }],
    references: [{
        name: "<rt>: The Ruby Fallback Parenthesis element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt"
    }],
},{
    name: "rtc",
    closingTag: "optional", // DEV check conditions
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:ruby"],
    },
    content: {
        permitted: ["category:phrasing-content", "tag:rt"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rtc-element"
    }],
    references: [{
        name: "<rtc>: The Ruby Text Container element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc"
    }],
},{
    name: "ruby",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-phrasing:XXX"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element"
    }],
    references: [{
        name: "<ruby>: The Ruby Annotation element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby"
    }],
},{
    name: "s",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["phrasing-content", "flow-content"],
    parents: {
        permitted: ["accepts-category:phrasing"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element"
    }],
    references: [{
        name: "<s>: The Strikethrough element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s"
    }],
},{
    name: "samp",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["phrasing-content", "flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element"
    }],
    references: [{
        name: "<samp>: The Sample Output element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp"
    }],
},{
    name: "script",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["metadata-content", "flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:metadata-content", "accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["mimetype:text/javascript"], // DEV which other languages are allowed ?
        forbidden: []
    },
    DOMInterface: "HTMLScriptElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["async", "blocking", "crossorigin", "defer", "fetchproperty", "integrity", "nomodule", "nonce", "referrerpolicy", "src", "type"],
        deprecated: ["charset", "language"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-script-element"
    }],
    references: [{
        name: "<script>: The Script element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
    }],
},{
    name: "search",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-search-element"
    }],
    references: [{
        name: "<search>: The generic search element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search"
    }],
},{
    name: "section",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "palpable-content", "sectioning-content"],
    parents: {
        permitted: ["accepts-category:flow-content"],
        forbidden: ["tag:address"]
    },
    content: {
        permitted: ["category:flow-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-section-element"
    }],
    references: [{
        name: "<section>: The Generic Section element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
    }],
},{
    name: "select",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "interactive-content", "listed", "labelable", "resettable", "submittable", "form-associated"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["tag:option", "tag:optgroup", "tag:hr"],
        forbidden: []
    },
    DOMInterface: "HTMLSelectElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-select-element"
    }],
    references: [{
        name: "<select>: The HTML Select element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"
    }],
},{
    name: "slot",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:transparent-content"],
        forbidden: []
    },
    DOMInterface: "HTMLSlotElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["name"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-slot-element"
    }],
    references: [{
        name: "<slot>: The Web Component Slot element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"
    }],
},{
    name: "small",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content", "accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element"
    }],
    references: [{
        name: "<small>: the side comment element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
    }],
},{
    name: "source",
    closingTag: "forbidden",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:audio", "tag:video", "tag:picture"], // DEV check conditions.
    },
    content: {
        permitted: [],
        forbidden: []
    },
    DOMInterface: "HTMLSourceElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["type", "src", "srcset", "sizes", "media", "height", "width"],
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-source-element"
    }],
    references: [{
        name: "<source>: The Media or Image Source element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
    }],
},{
    name: "span",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content", "accepts-category:flow-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLSpanElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element"
    }],
    references: [{
        name: "<span>: The Content Span element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"
    }],
},{
    name: "strike",
    closingTag: "required",
    isDeprecated: true,
    isExperimental: false,
    categories: [],
    parents: {
    },
    content: {
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strike-element"
    }],
    references: [{
        name: "<strike>",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike"
    }],
},{
    name: "strong",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:flow-content", "accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element"
    }],
    references: [{
        name: "<strong>: The Strong Importance elementXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
    }],
},{
    name: "style",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["metadata-content"],
    parents: {
        permitted: ["accepts-category:metadata-content"],
    },
    content: {
        permitted: ["mimetype:text/css"],
        forbidden: []
    },
    DOMInterface: "HTMLStyleElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["media", "nonce", "title"],
        deprecated: ["type"],
        experimental: ["blocking"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-style-element"
    }],
    references: [{
        name: "<style>: The Style Information element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"
    }],
},{
    name: "sub",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["flow-content", "phrasing-content", "palpable-content"],
    parents: {
        permitted: ["accepts-category:phrasing-content"],
    },
    content: {
        permitted: ["category:phrasing-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-element"
    }],
    references: [{
        name: "<sub>: The Subscript element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"
    }],
},{
    name: "summary",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: [],
    parents: {
        permitted: ["tag:details"],
    },
    content: {
        permitted: ["category:phrasing-content", "category:heading-content?count=1"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-summary-element"
    }],
    references: [{
        name: "<summary>: The Disclosure Summary element",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},{
    name: "XXX",
    closingTag: "required",
    isDeprecated: false,
    isExperimental: false,
    categories: ["XXX-content"],
    parents: {
        permitted: ["accepts-category:XXX"],
    },
    content: {
        permitted: ["category:XXX-content"],
        forbidden: []
    },
    DOMInterface: "HTMLElement",
    attributes: {
        acceptGlobal: true,
        permitted: ["XXX"],
        deprecated: ["XXX"]
    },
    specifications: [{
        name: "HTML Standard",
        author: "WHATWG",
        url: "https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-XXX-element"
    }],
    references: [{
        name: "<XXX",
        author: "MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/XXX"
    }],
},]