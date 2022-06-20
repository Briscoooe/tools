// https://codepen.io/pookagehayes/pen/JjpMwGq
const template = document.createElement("template");
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <ul>
            <li><a href="character-count.html">Character count</a></li>
            <li><a href="base64.html">Base 64 encode/decode</a></li>
            <li><a href="jwt.html">JWT</a></li>
            <li><a href="json.html">JSON</a></li>
        <ul>
    `;
  }
}

customElements.define( 'custom-header', MyComponent );
