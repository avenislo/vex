// Padding Component
const paddingTemplate = document.createElement('template');
paddingTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .padding-container {
    box-sizing: border-box;
  }
</style>
<div class="padding-container">
  <slot></slot>
</div>
`;

class Padding extends HTMLElement {
  static get observedAttributes() {
    return ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(paddingTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.padding-container');
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
    const padding = this.getAttribute('padding');
    const paddingTop = this.getAttribute('padding-top');
    const paddingRight = this.getAttribute('padding-right');
    const paddingBottom = this.getAttribute('padding-bottom');
    const paddingLeft = this.getAttribute('padding-left');

    // Apply all padding if specified
    if (padding) {
      this.container.style.padding = padding;
    } else {
      // Apply individual padding directions if specified
      if (paddingTop) this.container.style.paddingTop = paddingTop;
      if (paddingRight) this.container.style.paddingRight = paddingRight;
      if (paddingBottom) this.container.style.paddingBottom = paddingBottom;
      if (paddingLeft) this.container.style.paddingLeft = paddingLeft;
    }
  }
}

customElements.define('vex-padding', Padding);
