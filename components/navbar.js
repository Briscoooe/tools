// https://codepen.io/pookagehayes/pen/JjpMwGq
// https://github.com/thepassle/generic-components/blob/master/generic-tabs/GenericTabs.js
// https://kinsta.com/blog/web-components/
const template = document.createElement("template");

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    `;
  }
}

customElements.define('custom-header', MyComponent);
