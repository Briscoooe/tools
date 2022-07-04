// Template:
const dateNameTemplate = document.querySelector("template");

// Custom Element
class DateName extends HTMLElement {
  connectedCallback() {
    // Copy the nodes in the template:
    const clone = dateNameTemplate.content.cloneNode(true);

    // Replace Placeholders:
    const name = clone.querySelector("#name").parentNo = this.dataset.name;
    clone.querySelector("#date").innerText = this.dataset.date;

    // Append Node:
    this.appendChild(clone);
  }
}

customElements.define("date-name", DateName);
