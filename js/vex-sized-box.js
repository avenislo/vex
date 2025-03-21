// Sized Box Component
const sizedBoxTemplate = document.createElement('template');
sizedBoxTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .sized-box-container {
    box-sizing: border-box;
  }
</style>
<div class="sized-box-container">
  <slot></slot>
</div>
`;

class SizedBox extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(sizedBoxTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.sized-box-container');
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

    this.container.style.width = width;
    this.container.style.height = height;
  }
}

customElements.define('vex-sized-box', SizedBox);
