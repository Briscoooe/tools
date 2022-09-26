class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav> 
        hello world
      </nav>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
