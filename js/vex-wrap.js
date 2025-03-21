// Wrap Component
const wrapTemplate = document.createElement('template');
wrapTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .wrap-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
<div class="wrap-container">
  <slot></slot>
</div>
`;

class Wrap extends HTMLElement {
  static get observedAttributes() {
    return [
      'direction', 'align-items', 'justify-content', 
      'spacing', 'run-spacing', 'width', 'height'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(wrapTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.wrap-container');
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
    const direction = this.getAttribute('direction') || 'horizontal';
    const alignItems = this.getAttribute('align-items') || 'flex-start';
    const justifyContent = this.getAttribute('justify-content') || 'flex-start';
    const spacing = this.getAttribute('spacing') || '0';
    const runSpacing = this.getAttribute('run-spacing') || '0';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || 'auto';

    this.container.style.flexDirection = direction === 'horizontal' ? 'row' : 'column';
    this.container.style.alignItems = alignItems;
    this.container.style.justifyContent = justifyContent;
    this.container.style.gap = spacing;
    this.container.style.rowGap = runSpacing;
    this.container.style.width = width;
    this.container.style.height = height;
  }
}

customElements.define('vex-wrap', Wrap);
