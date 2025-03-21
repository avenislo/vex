// Column Component (MainAxisAlignment: vertical)
const columnTemplate = document.createElement('template');
columnTemplate.innerHTML = `
<style>
  :host {
    display: block;
    height: 100%;
  }
  
  .column-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
<div class="column-container">
  <slot></slot>
</div>
`;

class Column extends LayoutBase {
  static get observedAttributes() {
    return [
      ...LayoutBase.observedAttributes,
      'main-axis-alignment',
      'cross-axis-alignment',
      'main-axis-size',
      'gap'
    ];
  }

  constructor() {
    super();
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(columnTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.column-container');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._applyStyles();
    }
  }

  _applyStyles() {
    super._applyStyles();
    
    // Map Flutter-like properties to CSS
    const mainAxisAlignment = this.getAttribute('main-axis-alignment') || 'start';
    const crossAxisAlignment = this.getAttribute('cross-axis-alignment') || 'start';
    const mainAxisSize = this.getAttribute('main-axis-size') || 'max';
    const gap = this.getAttribute('gap') || '0';
    
    // Main axis alignment mapping
    const justifyContentMap = {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'space-between': 'space-between',
      'space-around': 'space-around',
      'space-evenly': 'space-evenly'
    };
    
    // Cross axis alignment mapping
    const alignItemsMap = {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'stretch': 'stretch',
      'baseline': 'baseline'
    };
    
    this.container.style.justifyContent = justifyContentMap[mainAxisAlignment] || 'flex-start';
    this.container.style.alignItems = alignItemsMap[crossAxisAlignment] || 'flex-start';
    this.container.style.height = mainAxisSize === 'min' ? 'fit-content' : '100%';
    this.container.style.gap = gap;
  }
}

customElements.define('vex-column', Column);
