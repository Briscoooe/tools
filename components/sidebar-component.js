const linkGroups = [{
  name: 'Text',
  links: [
    {
      name: 'Base 64 encode/decode',
      url: 'base64.html'
    }, {
      name: 'Casing',
      url: 'casing.html'
    }, {
      name: 'Character count',
      url: 'character-count.html'
    }, {
      name: 'Search and replace',
      url: 'sed.html'
    }, {
      name: 'Sort',
      url: 'sort.html'
    }, {
      name: 'Word count',
      url: 'word-count.html'
    }, {
      name: 'Lorem ipsum',
      url: 'lorem-ipsum.html'
    }, {
      name: 'Append/Prepend',
      url: 'append-prepend.html'
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
}, {
  name: 'JSON',
  links: [
    {
      name: 'JSON to CSV',
      url: 'json-to-csv.html'
    }, {
      name: 'JSON Parse',
      url: 'json.html'
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
}, {
  name: 'URLs',
  links: [
    {
      name: 'Parse params',
      url: 'parse-params.html'
    }, {
      name: 'URL encode/decode',
      url: 'url-encode-decode.html'
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
}, {
  name: 'Dates',
  links: [
    {
      name: 'Unix time',
      url: 'unix-time.html'
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
}, {
  name: 'Misc',
  links: [
    {
      name: 'UUID',
      url: 'uuid.html'
    }, {
      name: 'JWT',
      url: 'jwt.html'
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
}];

class SidebarComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav id="sidebar">
      ${linkGroups.map(group => `
        <div class="sidebar-link-group">
          <h4>${group.name}</h4>
          <ul>
            ${group.links.map(link => `
              <li class="sidebar-link ${location.href.includes(link.url) ? 'active' : ''}">
                <a href="${link.url}">${link.name}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
      </nav>
    `;
  }
}

customElements.define('sidebar-component', SidebarComponent);
