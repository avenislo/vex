// Stack Component
const stackTemplate = document.createElement('template');
stackTemplate.innerHTML = `
<style>
  :host {
    display: block;
    position: relative;
  }
  
  .stack-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  ::slotted(*) {
    position: absolute;
  }
</style>
<div class="stack-container">
  <slot></slot>
</div>
`;

class Stack extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height', 'alignment'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(stackTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.stack-container');
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
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || '100%';
    const alignment = this.getAttribute('alignment') || 'top-left';

    this.container.style.width = width;
    this.container.style.height = height;

    // Set default position for children based on alignment
    const style = document.createElement('style');
    let alignmentCSS = '';

    switch (alignment) {
      case 'top-left':
        alignmentCSS = 'top: 0; left: 0;';
        break;
      case 'top-center':
        alignmentCSS = 'top: 0; left: 50%; transform: translateX(-50%);';
        break;
      case 'top-right':
        alignmentCSS = 'top: 0; right: 0;';
        break;
      case 'center-left':
        alignmentCSS = 'top: 50%; left: 0; transform: translateY(-50%);';
        break;
      case 'center':
        alignmentCSS = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
        break;
      case 'center-right':
        alignmentCSS = 'top: 50%; right: 0; transform: translateY(-50%);';
        break;
      case 'bottom-left':
        alignmentCSS = 'bottom: 0; left: 0;';
        break;
      case 'bottom-center':
        alignmentCSS = 'bottom: 0; left: 50%; transform: translateX(-50%);';
        break;
      case 'bottom-right':
        alignmentCSS = 'bottom: 0; right: 0;';
        break;
      default:
        alignmentCSS = 'top: 0; left: 0;';
    }

    style.textContent = `::slotted(*) { ${alignmentCSS} }`;
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('vex-stack', Stack);
