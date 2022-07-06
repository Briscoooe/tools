// https://codepen.io/pookagehayes/pen/JjpMwGq
// https://github.com/thepassle/generic-components/blob/master/generic-tabs/GenericTabs.js
// https://kinsta.com/blog/web-components/
const template = document.createElement("template");

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <ul class="nav-list">
            <li><a href="../pages/character-count.html">Character count</a></li>
            <li><a href="../pages/sort.html">Sort</a></li>
            <li><a href="../pages/casing.html">Casing</a></li>
            <li><a href="../pages/parse-params.html">Parse params</a></li>
            <li><a href="../pages/unix-time.html">Unix time</a></li>
            <li><a href="../pages/url-encode-decode.html">URL encode/decode</a></li>
            <li><a href="../pages/word-count.html">Word count</a></li>
            <li><a href="../pages/base64.html">Base 64 encode/decode</a></li>
            <li><a href="../pages/jwt.html">JWT</a></li>
            <li><a href="../pages/json-to-csv.html">JSON to CSV</a></li>
            <li><a href="../pages/json.html">JSON</a></li>
            <li><a href="../pages/sed.html">Search and replace</a></li>
            <li><a href="../pages/uuid.html">UUID</a></li>
        <ul>
    `;
  }
}

customElements.define('custom-header', MyComponent);
