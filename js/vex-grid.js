// Grid Component
const gridTemplate = document.createElement('template');
gridTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .grid-container {
    display: grid;
    width: 100%;
    height: 100%;
  }
</style>
<div class="grid-container">
  <slot></slot>
</div>
`;

class Grid extends HTMLElement {
  static get observedAttributes() {
    return [
      'columns', 'rows', 'column-gap', 'row-gap', 
      'width', 'height', 'template-columns', 'template-rows'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(gridTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.grid-container');
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
    const columns = this.getAttribute('columns');
    const rows = this.getAttribute('rows');
    const columnGap = this.getAttribute('column-gap') || '0';
    const rowGap = this.getAttribute('row-gap') || '0';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || '100%';
    const templateColumns = this.getAttribute('template-columns');
    const templateRows = this.getAttribute('template-rows');

    this.container.style.width = width;
    this.container.style.height = height;
    this.container.style.columnGap = columnGap;
    this.container.style.rowGap = rowGap;
    
    // Set grid template columns
    if (templateColumns) {
      this.container.style.gridTemplateColumns = templateColumns;
    } else if (columns) {
      this.container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }
    
    // Set grid template rows
    if (templateRows) {
      this.container.style.gridTemplateRows = templateRows;
    } else if (rows) {
      this.container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }
  }
}

customElements.define('vex-grid', Grid);
