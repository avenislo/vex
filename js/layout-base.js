// Base Layout Component with Tailwind-like options
const layoutBaseTemplate = document.createElement('template');
layoutBaseTemplate.innerHTML = `
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }

  .layout-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
<div class="layout-container">
  <slot></slot>
</div>
`;

class LayoutBase extends HTMLElement {
  static get observedAttributes() {
    return [
      // Sizing
      'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',

      // Spacing
      'padding', 'padding-x', 'padding-y', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'margin', 'margin-x', 'margin-y', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
      'gap', 'gap-x', 'gap-y',

      // Typography
      'font-size', 'font-weight', 'text-align', 'text-color', 'line-height', 'letter-spacing',
      'text-decoration', 'text-transform', 'font-style',

      // Backgrounds
      'background', 'bg-color', 'bg-opacity', 'bg-image', 'bg-position', 'bg-repeat', 'bg-size',

      // Borders
      'border', 'border-color', 'border-width', 'border-style',
      'border-top', 'border-right', 'border-bottom', 'border-left',
      'border-radius', 'rounded-top-left', 'rounded-top-right', 'rounded-bottom-left', 'rounded-bottom-right',

      // Effects
      'shadow', 'opacity', 'blend-mode', 'filter', 'backdrop-filter',

      // Layout
      'display', 'position', 'top', 'right', 'bottom', 'left', 'z-index',
      'float', 'clear', 'overflow', 'overflow-x', 'overflow-y',

      // Flexbox
      'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex',
      'justify-content', 'align-items', 'align-content', 'align-self', 'order',

      // Grid
      'grid-template-columns', 'grid-template-rows', 'grid-column', 'grid-row',
      'grid-auto-flow', 'grid-auto-columns', 'grid-auto-rows', 'grid-gap',

      // Transitions & Animations
      'transition', 'transition-property', 'transition-duration', 'transition-timing', 'transition-delay',
      'transform', 'transform-origin', 'scale', 'rotate', 'translate',
      'animation', 'animation-name', 'animation-duration', 'animation-timing', 'animation-delay',
      
      // Interactivity
      'cursor', 'pointer-events', 'user-select', 'resize', 'appearance',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(layoutBaseTemplate.content.cloneNode(true));
    this.container = this.shadowRoot.querySelector('.layout-container');
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
    // Direct CSS property mappings
    const directMappings = [
      'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
      'padding', 'margin', 'gap', 'font-size', 'font-weight', 'line-height', 'letter-spacing',
      'text-decoration', 'text-transform', 'font-style', 'background', 'border-radius',
      'border', 'border-color', 'border-width', 'border-style', 'opacity',
      'display', 'position', 'top', 'right', 'bottom', 'left', 'z-index',
      'float', 'clear', 'overflow', 'overflow-x', 'overflow-y',
      'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex',
      'justify-content', 'align-items', 'align-content', 'align-self', 'order',
      'grid-template-columns', 'grid-template-rows', 'grid-column', 'grid-row',
      'grid-auto-flow', 'grid-auto-columns', 'grid-auto-rows', 'grid-gap',
      'transition', 'transition-property', 'transition-duration', 'transition-timing', 'transition-delay',
      'transform', 'transform-origin', 'cursor', 'pointer-events', 'user-select', 'resize'
    ];

    // Apply direct mappings
    directMappings.forEach(prop => {
      const value = this.getAttribute(prop);
      if (value !== null) {
        this.container.style[prop] = value;
      }
    });

    // Special mappings that need conversion
    this._applyPadding();
    this._applyMargin();
    this._applyGap();
    this._applyTypography();
    this._applyBackground();
    this._applyBorders();
    this._applyShadow();
    this._applyTransforms();
  }

  _applyPadding() {
    const paddingX = this.getAttribute('padding-x');
    const paddingY = this.getAttribute('padding-y');
    const paddingTop = this.getAttribute('padding-top');
    const paddingRight = this.getAttribute('padding-right');
    const paddingBottom = this.getAttribute('padding-bottom');
    const paddingLeft = this.getAttribute('padding-left');

    if (paddingX !== null) {
      this.container.style.paddingLeft = paddingX;
      this.container.style.paddingRight = paddingX;
    }

    if (paddingY !== null) {
      this.container.style.paddingTop = paddingY;
      this.container.style.paddingBottom = paddingY;
    }

    if (paddingTop !== null) this.container.style.paddingTop = paddingTop;
    if (paddingRight !== null) this.container.style.paddingRight = paddingRight;
    if (paddingBottom !== null) this.container.style.paddingBottom = paddingBottom;
    if (paddingLeft !== null) this.container.style.paddingLeft = paddingLeft;
  }

  _applyMargin() {
    const marginX = this.getAttribute('margin-x');
    const marginY = this.getAttribute('margin-y');
    const marginTop = this.getAttribute('margin-top');
    const marginRight = this.getAttribute('margin-right');
    const marginBottom = this.getAttribute('margin-bottom');
    const marginLeft = this.getAttribute('margin-left');

    if (marginX !== null) {
      this.container.style.marginLeft = marginX;
      this.container.style.marginRight = marginX;
    }

    if (marginY !== null) {
      this.container.style.marginTop = marginY;
      this.container.style.marginBottom = marginY;
    }

    if (marginTop !== null) this.container.style.marginTop = marginTop;
    if (marginRight !== null) this.container.style.marginRight = marginRight;
    if (marginBottom !== null) this.container.style.marginBottom = marginBottom;
    if (marginLeft !== null) this.container.style.marginLeft = marginLeft;
  }

  _applyGap() {
    const gapX = this.getAttribute('gap-x');
    const gapY = this.getAttribute('gap-y');

    if (gapX !== null) this.container.style.columnGap = gapX;
    if (gapY !== null) this.container.style.rowGap = gapY;
  }

  _applyTypography() {
    const textAlign = this.getAttribute('text-align');
    const textColor = this.getAttribute('text-color');

    if (textAlign !== null) this.container.style.textAlign = textAlign;
    if (textColor !== null) this.container.style.color = textColor;
  }

  _applyBackground() {
    const bgColor = this.getAttribute('bg-color');
    const bgOpacity = this.getAttribute('bg-opacity');
    const bgImage = this.getAttribute('bg-image');
    const bgPosition = this.getAttribute('bg-position');
    const bgRepeat = this.getAttribute('bg-repeat');
    const bgSize = this.getAttribute('bg-size');

    if (bgColor !== null) this.container.style.backgroundColor = bgColor;

    if (bgOpacity !== null) {
      // Apply opacity to background color if it exists
      const currentBgColor = this.container.style.backgroundColor;
      if (currentBgColor && currentBgColor !== 'transparent') {
        // Convert to rgba if needed
        if (!currentBgColor.startsWith('rgba')) {
          const rgb = this._hexToRgb(currentBgColor) || this._nameToRgb(currentBgColor);
          if (rgb) {
            this.container.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgOpacity})`;
          }
        }
      }
    }

    if (bgImage !== null) this.container.style.backgroundImage = bgImage;
    if (bgPosition !== null) this.container.style.backgroundPosition = bgPosition;
    if (bgRepeat !== null) this.container.style.backgroundRepeat = bgRepeat;
    if (bgSize !== null) this.container.style.backgroundSize = bgSize;
  }

  _applyBorders() {
    const borderTop = this.getAttribute('border-top');
    const borderRight = this.getAttribute('border-right');
    const borderBottom = this.getAttribute('border-bottom');
    const borderLeft = this.getAttribute('border-left');

    const roundedTopLeft = this.getAttribute('rounded-top-left');
    const roundedTopRight = this.getAttribute('rounded-top-right');
    const roundedBottomLeft = this.getAttribute('rounded-bottom-left');
    const roundedBottomRight = this.getAttribute('rounded-bottom-right');

    if (borderTop !== null) this.container.style.borderTop = borderTop;
    if (borderRight !== null) this.container.style.borderRight = borderRight;
    if (borderBottom !== null) this.container.style.borderBottom = borderBottom;
    if (borderLeft !== null) this.container.style.borderLeft = borderLeft;

    if (roundedTopLeft !== null) this.container.style.borderTopLeftRadius = roundedTopLeft;
    if (roundedTopRight !== null) this.container.style.borderTopRightRadius = roundedTopRight;
    if (roundedBottomLeft !== null) this.container.style.borderBottomLeftRadius = roundedBottomLeft;
    if (roundedBottomRight !== null) this.container.style.borderBottomRightRadius = roundedBottomRight;
  }

  _applyShadow() {
    const shadow = this.getAttribute('shadow');

    const shadowMap = {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'none': 'none'
    };

    if (shadow !== null) {
      if (shadowMap[shadow]) {
        this.container.style.boxShadow = shadowMap[shadow];
      } else {
        this.container.style.boxShadow = shadow;
      }
    }
  }

  _applyTransforms() {
    const scale = this.getAttribute('scale');
    const rotate = this.getAttribute('rotate');
    const translate = this.getAttribute('translate');

    // Collect transforms
    const transforms = [];

    if (scale !== null) transforms.push(`scale(${scale})`);
    if (rotate !== null) transforms.push(`rotate(${rotate})`);
    if (translate !== null) {
      const [x, y] = translate.split(' ');
      transforms.push(`translate(${x || '0'}, ${y || '0'})`);
    }

    // Apply all transforms
    if (transforms.length > 0) {
      this.container.style.transform = transforms.join(' ');
    }
  }

  // Helper methods for color conversion
  _hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, '');

    // Parse hex values
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      return null;
    }

    return { r, g, b };
  }

  _nameToRgb(name) {
    // Create a temporary element to compute the color
    const tempEl = document.createElement('div');
    tempEl.style.color = name;
    document.body.appendChild(tempEl);

    // Get computed color
    const computedColor = getComputedStyle(tempEl).color;
    document.body.removeChild(tempEl);

    // Parse rgb/rgba string
    const match = computedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/);

    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3])
      };
    }

    return null;
  }
}

customElements.define('layout-base', LayoutBase);
