// Flexible Component
const flexibleTemplate = document.createElement('template');
flexibleTemplate.innerHTML = `
<style>
  :host {
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
  }
  
  .flexible-container {
    width: 100%;
    height: 100%;
  }
</style>
<div class="flexible-container">
  <slot></slot>
</div>
`;

class Flexible extends HTMLElement {
  static get observedAttributes() {
    return ['flex', 'width', 'height', 'align-self'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(flexibleTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.flexible-container');
  }

  connectedCallback() {
    this._applyStyles();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._applyStyles();
    }
  }

  _applyStyles() {
    const flex = this.getAttribute('flex') || '1';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || '100%';
    const alignSelf = this.getAttribute('align-self') || 'auto';

    this.style.flexGrow = flex;
    this.container.style.width = width;
    this.container.style.height = height;
    this.style.alignSelf = alignSelf;
  }
}

customElements.define('vex-flexible', Flexible);
