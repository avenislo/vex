// AspectRatio Component
const aspectRatioTemplate = document.createElement('template');
aspectRatioTemplate.innerHTML = `
<style>
  :host {
    display: block;
    width: 100%;
  }
  
  .aspect-ratio-container {
    position: relative;
    width: 100%;
  }
  
  .aspect-ratio-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<div class="aspect-ratio-container">
  <div class="aspect-ratio-content">
    <slot></slot>
  </div>
</div>
`;

class AspectRatio extends HTMLElement {
  static get observedAttributes() {
    return ['ratio', 'width'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(aspectRatioTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.aspect-ratio-container');
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
    const ratio = this.getAttribute('ratio') || '1/1';
    const width = this.getAttribute('width') || '100%';
    
    this.style.width = width;
    
    // Parse the ratio
    let ratioValue;
    if (ratio.includes('/')) {
      const [width, height] = ratio.split('/').map(Number);
      ratioValue = (height / width) * 100;
    } else {
      ratioValue = parseFloat(ratio) * 100;
    }
    
    this.container.style.paddingTop = `${ratioValue}%`;
  }
}

customElements.define('vex-aspect-ratio', AspectRatio);
