class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
              <li><a href="base64.html">Base 64 encode/decode</a></li>
              <li><a href="casing.html">Casing</a></li>
              <li class="active"><a href="character-count.html">Character count</a></li>
              <li><a href="json-to-csv.html">JSON to CSV</a></li>
              <li><a href="json.html">JSON Parse</a></li>
              <li><a href="jwt.html">JWT</a></li>
              <li><a href="parse-params.html">Parse params</a></li>
              <li><a href="sed.html">Search and replace</a></li>
              <li><a href="sort.html">Sort</a></li>
              <li><a href="url-encode-decode.html">URL encode/decode</a></li>
              <li><a href="uuid.html">UUID</a></li>
              <li><a href="unix-time.html">Unix time</a></li>
              <li><a href="word-count.html">Word count</a></li>
          <ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
