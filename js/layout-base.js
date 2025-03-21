// Base Layout Component
const layoutBaseTemplate = document.createElement('template');
layoutBaseTemplate.innerHTML = `
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }
  
  .layout-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
<div class="layout-container">
  <slot></slot>
</div>
`;

class LayoutBase extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height', 'padding', 'margin', 'background', 'border-radius'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(layoutBaseTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.layout-container');
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
    const width = this.getAttribute('width') || 'auto';
    const height = this.getAttribute('height') || 'auto';
    const padding = this.getAttribute('padding') || '0';
    const margin = this.getAttribute('margin') || '0';
    const background = this.getAttribute('background') || 'transparent';
    const borderRadius = this.getAttribute('border-radius') || '0';

    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.padding = padding;
    this.container.style.margin = margin;
    this.container.style.background = background;
    this.container.style.borderRadius = borderRadius;
  }
}

customElements.define('layout-base', LayoutBase);
