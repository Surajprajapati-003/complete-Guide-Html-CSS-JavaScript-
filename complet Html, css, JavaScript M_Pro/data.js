export const topics = [
 

/* ----------------------------------------------------
   HTML FULL SYLLABUS (80+ Topics)
----------------------------------------------------- */
{
    category: "HTML Basics",
    items: [
        { id: "html_intro", name: "HTML Introduction", description: "What is HTML?", code: "<h1>Hello HTML</h1>" },
        { id: "html_editors", name: "HTML Editors", description: "Notepad, VS Code, etc.", code: "<!-- Editors -->" },
        { id: "html_basic", name: "HTML Basic Structure", description: "HTML basic template.", code: "<!DOCTYPE html><html><head></head><body></body></html>" },
        { id: "html_elements", name: "HTML Elements", description: "Elements explained.", code: "<p>This is a paragraph.</p>" },
        { id: "html_attributes", name: "HTML Attributes", description: "Attributes explained.", code: "<img src='img.png' alt='image'>" },
        { id: "html_headings", name: "HTML Headings", description: "h1 to h6.", code: "<h1>Main Heading</h1>" },
        { id: "html_paragraphs", name: "HTML Paragraphs", description: "Paragraph tags.", code: "<p>This is a paragraph.</p>" },
        { id: "html_styles", name: "HTML Styles", description: "style attribute.", code: "<p style='color:red;'>Red Text</p>" },
        { id: "html_formatting", name: "HTML Formatting", description: "b, i, mark, strong...", code: "<b>Bold</b>" },
        { id: "html_quotation", name: "HTML Quotation", description: "blockquote, q, cite.", code: "<blockquote>Quote</blockquote>" },
        { id: "html_comments", name: "HTML Comments", description: "HTML comment syntax.", code: "<!-- Comment -->" },
    ]
},

{
    category: "HTML Forms",
    items: [
        { id: "html_forms_intro", name: "Forms Intro", description: "Form basics", code: "<form><input></form>" },
        { id: "html_input_types", name: "Input Types", description: "text, email, password", code: "<input type='email'>" },
        { id: "html_select", name: "HTML Select", description: "Dropdown menu", code: "<select><option>A</option></select>" },
        { id: "html_textarea", name: "HTML Textarea", description: "Multi-line input", code: "<textarea></textarea>" },
        { id: "html_buttons", name: "HTML Buttons", description: "button types", code: "<button>Click</button>" },
        { id: "html_form_attributes", name: "Form Attributes", description: "action, method, enctype", code: "<form action='/' method='POST'></form>" },
    ]
},

{
    category: "HTML Media",
    items: [
        { id: "html_images", name: "HTML Images", description: "Images", code: "<img src='pic.jpg'>" },
        { id: "html_video", name: "HTML Video", description: "Video tag", code: "<video controls></video>" },
        { id: "html_audio", name: "HTML Audio", description: "Audio tag", code: "<audio controls></audio>" },
        { id: "html_youtube", name: "Embed YouTube", description: "iframe youtube", code: "<iframe src='https://youtube.com'></iframe>" }
    ]
},

{
    category: "HTML Advanced",
    items: [
        { id: "html_semantic", name: "HTML Semantic Elements", description: "header, footer, article", code: "<header>Title</header>" },
        { id: "html_canvas", name: "HTML Canvas", description: "Canvas drawing", code: "<canvas id='c'></canvas>" },
        { id: "html_svg", name: "HTML SVG", description: "Vector graphics", code: "<svg><circle cx='50' cy='50' r='40'/></svg>" },
        { id: "html_geolocation", name: "HTML Geolocation", description: "Get location", code: "navigator.geolocation.getCurrentPosition()" },
        { id: "html_dragdrop", name: "HTML Drag & Drop", description: "drag event", code: "// drag event" },
        { id: "html_webstorage", name: "HTML Web Storage", description: "localStorage", code: "localStorage.setItem('name','suraj')" },
        { id: "html_webworkers", name: "HTML Web Workers", description: "Background threads", code: "new Worker('worker.js')" }
    ]
},

/* ----------------------------------------------------
   CSS FULL SYLLABUS (80+ Topics)
----------------------------------------------------- */

{
    category: "CSS Basics",
    items: [
        { id: "css_intro", name: "CSS Introduction", description: "What is CSS?", code: "h1{color:red;}" },
        { id: "css_syntax", name: "CSS Syntax", description: "selector, property, value", code: "p{font-size:20px}" },
        { id: "css_selectors", name: "CSS Selectors", description: "class, id, universal", code: ".box{padding:10px}" },
        { id: "css_colors", name: "CSS Colors", description: "RGB, HEX, HSL", code: "h1{color:#ff0000}" },
        { id: "css_backgrounds", name: "Backgrounds", description: "background-image", code: "body{background:#000}" },
    ]
},

{
    category: "CSS Layout",
    items: [
        { id: "css_boxmodel", name: "CSS Box Model", description: "margin, padding, border", code: "div{margin:10px}" },
        { id: "css_display", name: "Display", description: "block, inline-block, flex", code: "div{display:flex}" },
        { id: "css_position", name: "CSS Position", description: "relative, absolute", code: "div{position:absolute}" },
        { id: "css_flexbox", name: "Flexbox", description: "flex container", code: "container{display:flex}" },
        { id: "css_grid", name: "CSS Grid", description: "grid layout", code: ".grid{display:grid}" },
    ]
},

{
    category: "CSS Advanced",
    items: [
        { id: "css_transitions", name: "Transitions", description: "hover animations", code: "div:hover{transition:1s}" },
        { id: "css_animations", name: "CSS Animations", description: "keyframes", code: "@keyframes move{0%{}} " },
        { id: "css_variables", name: "CSS Variables", description: "var(--color)", code: ":root{--main:red}" },
        { id: "css_filters", name: "CSS Filters", description: "blur, grayscale", code: "img{filter:blur(5px)}" },
        { id: "css_media_queries", name: "Media Queries", description: "responsive design", code: "@media (max-width:600px){ }" }
    ]
},

/* ----------------------------------------------------
   JAVASCRIPT FULL SYLLABUS (100+ Topics)
----------------------------------------------------- */

{
    category: "JavaScript Basics",
    items: [
        { id: "js_intro", name: "JS Introduction", description: "What is JavaScript?", code: "console.log('Hello JS')" },
        { id: "js_syntax", name: "JS Syntax", description: "Variables, operators", code: "let x=5;" },
        { id: "js_variables", name: "Variables", description: "let, var, const", code: "const pi=3.14;" },
        { id: "js_datatypes", name: "Data Types", description: "string, number, boolean", code: "typeof 'suraj'" },
        { id: "js_operators", name: "Operators", description: "+, -, *, /", code: "5 + 6" }
    ]
},

{
    category: "JavaScript Functions",
    items: [
        { id: "js_functions", name: "Functions", description: "Function basics", code: "function test(){return 1}" },
        { id: "js_arrow", name: "Arrow Functions", description: "ES6 arrow syntax", code: "const f = ()=>5" },
        { id: "js_callbacks", name: "Callbacks", description: "Callback example", code: "setTimeout(()=>{},1000)" },
        { id: "js_closures", name: "Closures", description: "Closure demo", code: "function a(){ let x=5; return()=>x }" }
    ]
},

{
    category: "JavaScript DOM",
    items: [
        { id: "js_dom_intro", name: "DOM Intro", description: "Document object model", code: "document.getElementById('id')" },
        { id: "js_events", name: "Events", description: "onclick, addEventListener", code: "btn.onclick=()=>alert(1)" },
        { id: "js_dom_elements", name: "DOM Elements", description: "create, remove", code: "document.createElement('p')" }
    ]
},

{
    category: "JavaScript Advanced",
    items: [
        { id: "js_promises", name: "Promises", description: "async operations", code: "new Promise((res)=>res())" },
        { id: "js_async_await", name: "Async/Await", description: "modern async pattern", code: "await fetch('/')" },
        { id: "js_fetch", name: "Fetch API", description: "HTTP requests", code: "fetch('/api')" },
        { id: "js_classes", name: "Classes", description: "OOP in JS", code: "class Car{}" },
        { id: "js_modules", name: "Modules", description: "import/export", code: "export default x" },
        { id: "js_proxy", name: "JS Proxy", description: "Intercept object ops", code: "new Proxy({},{});" }
    ]
}

];

