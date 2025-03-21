// Container Component
const containerTemplate = document.createElement('template');
containerTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .container-element {
    box-sizing: border-box;
    position: relative;
    display: flex;
  }
</style>
<div class="container-element">
  <slot></slot>
</div>
`;

class Container extends HTMLElement {
  static get observedAttributes() {
    return [
      'width', 'height', 'padding', 'margin',
      'background', 'border-radius', 'border',
      'align-items', 'justify-content', 'flex-direction',
      'box-shadow', 'color'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.container-element');
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
    const border = this.getAttribute('border') || 'none';
    const alignItems = this.getAttribute('align-items') || 'flex-start';
    const justifyContent = this.getAttribute('justify-content') || 'flex-start';
    const flexDirection = this.getAttribute('flex-direction') || 'column';
    const boxShadow = this.getAttribute('box-shadow') || 'none';
    const color = this.getAttribute('color') || 'inherit';

    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.padding = padding;
    this.container.style.margin = margin;
    this.container.style.background = background;
    this.container.style.borderRadius = borderRadius;
    this.container.style.border = border;
    this.container.style.alignItems = alignItems;
    this.container.style.justifyContent = justifyContent;
    this.container.style.flexDirection = flexDirection;
    this.container.style.boxShadow = boxShadow;
    this.container.style.color = color;
  }
}

customElements.define('vex-container', Container);
