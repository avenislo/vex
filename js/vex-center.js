// Center Component
const centerTemplate = document.createElement('template');
centerTemplate.innerHTML = `
<style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
<div class="center-container">
  <slot></slot>
</div>
`;

class Center extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'height', 'background'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(centerTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.center-container');
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
    const background = this.getAttribute('background') || 'transparent';

    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.background = background;
  }
}

customElements.define('vex-center', Center);
