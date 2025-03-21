// GridItem Component (for positioning in Grid)
const gridItemTemplate = document.createElement('template');
gridItemTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  
  .grid-item-container {
    width: 100%;
    height: 100%;
  }
</style>
<div class="grid-item-container">
  <slot></slot>
</div>
`;

class GridItem extends HTMLElement {
  static get observedAttributes() {
    return [
      'column', 'row', 'column-span', 'row-span', 
      'column-start', 'column-end', 'row-start', 'row-end'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(gridItemTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.grid-item-container');
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
    const column = this.getAttribute('column');
    const row = this.getAttribute('row');
    const columnSpan = this.getAttribute('column-span');
    const rowSpan = this.getAttribute('row-span');
    const columnStart = this.getAttribute('column-start');
    const columnEnd = this.getAttribute('column-end');
    const rowStart = this.getAttribute('row-start');
    const rowEnd = this.getAttribute('row-end');

    // Apply grid positioning
    if (column) this.style.gridColumn = columnSpan ? `${column} / span ${columnSpan}` : column;
    if (row) this.style.gridRow = rowSpan ? `${row} / span ${rowSpan}` : row;
    
    // Apply specific grid positions
    if (columnStart) this.style.gridColumnStart = columnStart;
    if (columnEnd) this.style.gridColumnEnd = columnEnd;
    if (rowStart) this.style.gridRowStart = rowStart;
    if (rowEnd) this.style.gridRowEnd = rowEnd;
  }
}

customElements.define('vex-grid-item', GridItem);
