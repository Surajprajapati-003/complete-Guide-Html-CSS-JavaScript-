import { topics } from './data.js';

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

function loadSidebar() {
    sidebar.innerHTML = "";
    topics.forEach(category => {
        const title = document.createElement("h3");
        title.className = "side-title";
        title.textContent = category.category;
        sidebar.appendChild(title);

        category.items.forEach(item => {
            const link = document.createElement("a");
            link.href = `#/docs/${item.id}`;
            link.textContent = item.name;
            link.className = "side-link";
            sidebar.appendChild(link);
        });
    });
}

function router() {
    const hash = location.hash.replace("#/docs/", "");
    const all = topics.flatMap(c => c.items);
    const page = all.find(x => x.id === hash);

    if (!page) {
        content.innerHTML = "<h2>Welcome</h2><p>Select a topic from sidebar.</p>";
        return;
    }

    renderPage(page);
}

function renderPage(page) {
    content.innerHTML = `
        <h2>${page.name}</h2>
        <p>${page.description}</p>
        <h3>Example</h3>
        <div id="editor">${page.code}</div>
        <button id="runBtn">Run</button>
        <iframe id="output"></iframe>
    `;
    loadEditor(page.code);
}

function loadEditor(defaultCode) {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");
    editor.setValue(defaultCode);

    document.getElementById("runBtn").onclick = () => {
        document.getElementById("output").srcdoc = editor.getValue();
    };
}

loadSidebar();
window.addEventListener("hashchange", router);
router();


// Ace Editor Initialize
let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// Run Button Click
document.getElementById("runBtn").onclick = function () {

    let code = editor.getValue();   // Get Code

    let output = document.getElementById("output");
    output.innerHTML = "";          // Clear previous output

    // Capture console.log
    let oldLog = console.log;
    console.log = function (msg) {
        output.innerHTML += msg + "<br>";
    };

    try {
        eval(code);                 // Execute code
    } catch (err) {
        output.innerHTML = "<span style='color:red'>" + err + "</span>";
    }

    console.log = oldLog;
};
