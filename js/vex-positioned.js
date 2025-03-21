// Positioned Component (for absolute positioning in Stack)
const positionedTemplate = document.createElement('template');
positionedTemplate.innerHTML = `
<style>
  :host {
    position: absolute;
  }
  
  .positioned-container {
    width: 100%;
    height: 100%;
  }
</style>
<div class="positioned-container">
  <slot></slot>
</div>
`;

class Positioned extends HTMLElement {
  static get observedAttributes() {
    return ['top', 'right', 'bottom', 'left', 'width', 'height'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(positionedTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.positioned-container');
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
    const top = this.getAttribute('top');
    const right = this.getAttribute('right');
    const bottom = this.getAttribute('bottom');
    const left = this.getAttribute('left');
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');

    if (top !== null) this.style.top = top;
    if (right !== null) this.style.right = right;
    if (bottom !== null) this.style.bottom = bottom;
    if (left !== null) this.style.left = left;
    if (width !== null) this.style.width = width;
    if (height !== null) this.style.height = height;
  }
}

customElements.define('vex-positioned', Positioned);
