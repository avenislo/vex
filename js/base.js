// Base - Base class for components with Tailwind-style utilities
class Base extends HTMLElement {
  static get observedAttributes() {
    return [
      // Sizing utilities
      'w', 'h', 'min-w', 'min-h', 'max-w', 'max-h',
      
      // Spacing utilities
      'm', 'mx', 'my', 'mt', 'mr', 'mb', 'ml',
      'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl',
      'gap', 'gap-x', 'gap-y',
      
      // Layout utilities
      'display', 'position', 'top', 'right', 'bottom', 'left', 'z',
      
      // Flexbox utilities
      'flex', 'flex-grow', 'flex-shrink', 'flex-basis',
      'justify', 'items', 'self',
      
      // Color & appearance
      'bg', 'text', 'border', 'border-w', 'rounded',
      'shadow', 'opacity',
      
      // Transforms & transitions
      'transition', 'duration', 'transform', 'rotate', 'scale',
      
      // Misc
      'overflow', 'cursor', 'pointer-events',

      'accent-color', 'animation', 'aspect-ratio', 'backdrop-blur',
      'backdrop-brightness', 'backdrop-contrast', 'backdrop-grayscale',
      'backdrop-hue-rotate', 'backdrop-invert', 'backdrop-opacity',
      'backdrop-saturate', 'backdrop-sepia', 'background-image',
      'background-position', 'background-size', 'blur', 'border-spacing',
      'box-shadow-color', 'caret-color', 'columns', 'container', 'content',
      'divide-color', 'divide-opacity', 'divide-width', 'drop-shadow', 'fill',
      'font-family', 'font-size', 'font-weight', 'gradient-color-stops',
      'gradient-color-stop-positions', 'grid-auto-columns', 'grid-auto-rows',
      'grid-column', 'grid-column-end', 'grid-column-start', 'grid-row', 'grid-row-end',
      'grid-row-start', 'grid-template-columns', 'grid-template-rows', 'hue-rotate',
      'inset', 'keyframes', 'letter-spacing', 'line-height', 'list-style-type', 'list-style-image',
      'line-clamp', 'max-height', 'max-width', 'min-height', 'min-width', 'object-position',
      'order', 'outline-color', 'outline-offset', 'outline-width', 'placeholder-color',
      'placeholder-opacity', 'ring-color', 'ring-offset-color', 'ring-offset-width',
      'ring-opacity', 'ring-width', 'saturate', 'screens', 'scroll-margin', 'scroll-padding',
      'sepia', 'skew', 'space', 'stroke', 'stroke-width', 'text-decoration-color', 'text-decoration-thickness',
      'text-indent', 'text-underline-offset', 'transform-origin', 'transition-delay', 'transition-property',
      'transition-timing-function', 'translate', 'size', 'will-change'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
    // Width and height
    this._applyUtility('w', 'width', this._sizeMap);
    this._applyUtility('h', 'height', this._sizeMap);
    this._applyUtility('min-w', 'minWidth', this._sizeMap);
    this._applyUtility('min-h', 'minHeight', this._sizeMap);
    this._applyUtility('max-w', 'maxWidth', this._sizeMap);
    this._applyUtility('max-h', 'maxHeight', this._sizeMap);
    
    // Margin
    this._applyUtility('m', 'margin', this._spacingMap);
    this._applyUtility('mx', ['marginLeft', 'marginRight'], this._spacingMap);
    this._applyUtility('my', ['marginTop', 'marginBottom'], this._spacingMap);
    this._applyUtility('mt', 'marginTop', this._spacingMap);
    this._applyUtility('mr', 'marginRight', this._spacingMap);
    this._applyUtility('mb', 'marginBottom', this._spacingMap);
    this._applyUtility('ml', 'marginLeft', this._spacingMap);
    
    // Padding
    this._applyUtility('p', 'padding', this._spacingMap);
    this._applyUtility('px', ['paddingLeft', 'paddingRight'], this._spacingMap);
    this._applyUtility('py', ['paddingTop', 'paddingBottom'], this._spacingMap);
    this._applyUtility('pt', 'paddingTop', this._spacingMap);
    this._applyUtility('pr', 'paddingRight', this._spacingMap);
    this._applyUtility('pb', 'paddingBottom', this._spacingMap);
    this._applyUtility('pl', 'paddingLeft', this._spacingMap);
    
    // Gap
    this._applyUtility('gap', 'gap', this._spacingMap);
    this._applyUtility('gap-x', 'columnGap', this._spacingMap);
    this._applyUtility('gap-y', 'rowGap', this._spacingMap);
    
    // Layout
    this._applyUtility('display', 'display', this._displayMap);
    this._applyUtility('position', 'position', this._positionMap);
    this._applyUtility('top', 'top', this._spacingMap);
    this._applyUtility('right', 'right', this._spacingMap);
    this._applyUtility('bottom', 'bottom', this._spacingMap);
    this._applyUtility('left', 'left', this._spacingMap);
    this._applyUtility('z', 'zIndex', this._zIndexMap);
    
    // Flexbox
    this._applyUtility('flex', 'flex', this._flexMap);
    this._applyUtility('flex-grow', 'flexGrow', this._growShrinkMap);
    this._applyUtility('flex-shrink', 'flexShrink', this._growShrinkMap);
    this._applyUtility('flex-basis', 'flexBasis', this._sizeMap);
    this._applyUtility('justify', 'justifyContent', this._justifyMap);
    this._applyUtility('items', 'alignItems', this._alignMap);
    this._applyUtility('self', 'alignSelf', this._alignMap);
    
    // Color & appearance
    this._applyUtility('bg', 'backgroundColor', this._colorMap);
    this._applyUtility('text', 'color', this._colorMap);
    this._applyUtility('border', 'borderColor', this._colorMap);
    this._applyUtility('border-w', 'borderWidth', this._borderWidthMap);
    this._applyUtility('rounded', 'borderRadius', this._roundedMap);
    this._applyUtility('shadow', 'boxShadow', this._shadowMap);
    this._applyUtility('opacity', 'opacity', this._opacityMap);
    
    // Transforms & transitions
    this._applyUtility('transition', 'transition', this._transitionMap);
    this._applyUtility('duration', 'transitionDuration', this._durationMap);
    this._applyUtility('transform', 'transform', null);
    this._applyUtility('rotate', 'rotate', this._rotateMap);
    this._applyUtility('scale', 'scale', this._scaleMap);
    
    // Misc
    this._applyUtility('overflow', 'overflow', this._overflowMap);
    this._applyUtility('cursor', 'cursor', this._cursorMap);
    this._applyUtility('pointer-events', 'pointerEvents', this._pointerEventsMap);

    this._applyUtility('accent-color', 'accentColor', this._colorMap);
    this._applyUtility('animation', 'animation', this._animationMap);
    this._applyUtility('aspect-ratio', 'aspectRatio', this._aspectRatioMap);
    this._applyUtility('backdrop-blur', 'backdropFilter', this._blurMap);
    this._applyUtility('backdrop-brightness', 'backdropFilter', this._brightnessMap);
    this._applyUtility('backdrop-contrast', 'backdropFilter', this._contrastMap);
    this._applyUtility('backdrop-grayscale', 'backdropFilter', this._grayscaleMap);
    this._applyUtility('backdrop-hue-rotate', 'backdropFilter', this._hueRotateMap);
    this._applyUtility('backdrop-invert', 'backdropFilter', this._invertMap);
    this._applyUtility('backdrop-opacity', 'backdropFilter', this._opacityMap);
    this._applyUtility('backdrop-saturate', 'backdropFilter', this._saturateMap);
    this._applyUtility('backdrop-sepia', 'backdropFilter', this._sepiaMap);
    this._applyUtility('background-image', 'backgroundImage', this._backgroundImageMap);
    this._applyUtility('background-position', 'backgroundPosition', this._backgroundPositionMap);
    this._applyUtility('background-size', 'backgroundSize', this._backgroundSizeMap);
    this._applyUtility('blur', 'filter', this._blurMap);
    this._applyUtility('border-spacing', 'borderSpacing', this._spacingMap);
    this._applyUtility('box-shadow-color', 'boxShadowColor', this._colorMap);
    this._applyUtility('caret-color', 'caretColor', this._colorMap);
    this._applyUtility('columns', 'columns', this._columnsMap);
    this._applyUtility('container', 'container', this._containerMap);
    this._applyUtility('content', 'content', this._contentMap);
    this._applyUtility('divide-color', 'divideColor', this._colorMap);
    this._applyUtility('divide-opacity', 'divideOpacity', this._opacityMap);
    this._applyUtility('divide-width', 'divideWidth', this._borderWidthMap);
    this._applyUtility('drop-shadow', 'filter', this._dropShadowMap);
    this._applyUtility('fill', 'fill', this._colorMap);
    this._applyUtility('font-family', 'fontFamily', this._fontFamilyMap);
    this._applyUtility('font-size', 'fontSize', this._fontSizeMap);
    this._applyUtility('font-weight', 'fontWeight', this._fontWeightMap);
    this._applyUtility('gradient-color-stops', 'gradientColorStops', this._colorMap);
    this._applyUtility('gradient-color-stop-positions', 'gradientColorStopPositions', this._gradientColorStopPositionsMap);
    this._applyUtility('grid-auto-columns', 'gridAutoColumns', this._gridAutoColumnsMap);
    this._applyUtility('grid-auto-rows', 'gridAutoRows', this._gridAutoRowsMap);
    this._applyUtility('grid-column', 'gridColumn', this._gridColumnMap);
    this._applyUtility('grid-column-end', 'gridColumnEnd', this._gridColumnEndMap);
    this._applyUtility('grid-column-start', 'gridColumnStart', this._gridColumnStartMap);
    this._applyUtility('grid-row', 'gridRow', this._gridRowMap);
    this._applyUtility('grid-row-end', 'gridRowEnd', this._gridRowEndMap);
    this._applyUtility('grid-row-start', 'gridRowStart', this._gridRowStartMap);
    this._applyUtility('grid-template-columns', 'gridTemplateColumns', this._gridTemplateColumnsMap);
    this._applyUtility('grid-template-rows', 'gridTemplateRows', this._gridTemplateRowsMap);
    this._applyUtility('hue-rotate', 'filter', this._hueRotateMap);
    this._applyUtility('inset', 'inset', this._insetMap);
    this._applyUtility('keyframes', 'animation', this._keyframesMap);
    this._applyUtility('letter-spacing', 'letterSpacing', this._letterSpacingMap);
    this._applyUtility('line-height', 'lineHeight', this._lineHeightMap);
    this._applyUtility('list-style-type', 'listStyleType', this._listStyleTypeMap);
    this._applyUtility('list-style-image', 'listStyleImage', this._listStyleImageMap);
    this._applyUtility('line-clamp', 'lineClamp', this._lineClampMap);
    this._applyUtility('max-height', 'maxHeight', this._sizeMap);
    this._applyUtility('max-width', 'maxWidth', this._sizeMap);
    this._applyUtility('min-height', 'minHeight', this._sizeMap);
    this._applyUtility('min-width', 'minWidth', this._sizeMap);
    this._applyUtility('object-position', 'objectPosition', this._objectPositionMap);
    this._applyUtility('order', 'order', this._orderMap);
    this._applyUtility('outline-color', 'outlineColor', this._colorMap);
    this._applyUtility('outline-offset', 'outlineOffset', this._outlineOffsetMap);
    this._applyUtility('outline-width', 'outlineWidth', this._outlineWidthMap);
    this._applyUtility('placeholder-color', 'placeholderColor', this._colorMap);
    this._applyUtility('placeholder-opacity', 'placeholderOpacity', this._opacityMap);
    this._applyUtility('ring-color', 'ringColor', this._colorMap);
    this._applyUtility('ring-offset-color', 'ringOffsetColor', this._colorMap);
    this._applyUtility('ring-offset-width', 'ringOffsetWidth', this._ringOffsetWidthMap);
    this._applyUtility('ring-opacity', 'ringOpacity', this._opacityMap);
    this._applyUtility('ring-width', 'ringWidth', this._ringWidthMap);
    this._applyUtility('saturate', 'filter', this._saturateMap);
    this._applyUtility('screens', 'screens', this._screensMap);
    this._applyUtility('scroll-margin', 'scrollMargin', this._spacingMap);
    this._applyUtility('scroll-padding', 'scrollPadding', this._spacingMap);
    this._applyUtility('sepia', 'filter', this._sepiaMap);
    this._applyUtility('skew', 'transform', this._skewMap);
    this._applyUtility('space', 'space', this._spacingMap);
    this._applyUtility('stroke', 'stroke', this._colorMap);
    this._applyUtility('stroke-width', 'strokeWidth', this._strokeWidthMap);
    this._applyUtility('text-decoration-color', 'textDecorationColor', this._colorMap);
    this._applyUtility('text-decoration-thickness', 'textDecorationThickness', this._textDecorationThicknessMap);
    this._applyUtility('text-indent', 'textIndent', this._spacingMap);
    this._applyUtility('text-underline-offset', 'textUnderlineOffset', this._textUnderlineOffsetMap);
    this._applyUtility('transform-origin', 'transformOrigin', this._transformOriginMap);
    this._applyUtility('transition-delay', 'transitionDelay', this._transitionDelayMap);
    this._applyUtility('transition-property', 'transitionProperty', this._transitionPropertyMap);
    this._applyUtility('transition-timing-function', 'transitionTimingFunction', this._transitionTimingFunctionMap);
    this._applyUtility('translate', 'transform', this._translateMap);
    this._applyUtility('size', 'size', this._sizeMap);
    this._applyUtility('will-change', 'willChange', this._willChangeMap);
  }

  _applyUtility(attrName, cssProperty, valueMap) {
    const value = this.getAttribute(attrName);
    if (!value) return;
    
    const applyStyle = (property, mappedValue) => {
      if (this.container) {
        this.container.style[property] = mappedValue;
      } else {
        console.warn('Container element not found for', this);
      }
    };

    // Convert to array for consistent processing
    const cssProperties = Array.isArray(cssProperty) ? cssProperty : [cssProperty];
    
    for (const property of cssProperties) {
      // If we have a map, use it to translate values
      if (valueMap && valueMap[value]) {
        applyStyle(property, valueMap[value]);
      } 
      // Check if it's a color with opacity like 'gray-500/50'
      else if (valueMap && value.includes('/') && property.includes('Color')) {
        const [colorName, opacity] = value.split('/');
        if (valueMap[colorName]) {
          // Apply color with opacity
          const color = valueMap[colorName];
          const alphaValue = parseInt(opacity) / 100;
          
          // Check if the color is hex, rgb, or named
          if (color.startsWith('#')) {
            // Convert hex to rgba
            const hex = color.substring(1);
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            applyStyle(property, `rgba(${r}, ${g}, ${b}, ${alphaValue})`);
          } else if (color.startsWith('rgb')) {
            // Convert rgb to rgba
            const rgb = color.match(/\d+/g).map(Number);
            applyStyle(property, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alphaValue})`);
          } else {
            // Named color - can't easily convert to rgba, so we use opacity property
            applyStyle(property, color);
            applyStyle('opacity', alphaValue);
          }
        } else {
          applyStyle(property, value);
        }
      } 
      // Direct value application
      else {
        applyStyle(property, value);
      }
    }
  }

  // Define Tailwind-like value mappings
  get _sizeMap() {
    return {
      'auto': 'auto',
      'full': '100%',
      'screen': '100vw',
      'svw': '100svw',
      'lvw': '100lvw',
      'dvw': '100dvw',
      'min': 'min-content',
      'max': 'max-content',
      'fit': 'fit-content',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem'
    };
  }

  get _spacingMap() {
    return {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem'
    };
  }

  get _displayMap() {
    return {
      'block': 'block',
      'inline-block': 'inline-block',
      'inline': 'inline',
      'flex': 'flex',
      'inline-flex': 'inline-flex',
      'grid': 'grid',
      'inline-grid': 'inline-grid',
      'contents': 'contents',
      'hidden': 'none'
    };
  }

  get _positionMap() {
    return {
      'static': 'static',
      'fixed': 'fixed',
      'absolute': 'absolute',
      'relative': 'relative',
      'sticky': 'sticky'
    };
  }

  get _zIndexMap() {
    return {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      'auto': 'auto'
    };
  }

  get _flexMap() {
    return {
      '1': '1 1 0%',
      'auto': '1 1 auto',
      'initial': '0 1 auto',
      'none': 'none'
    };
  }

  get _growShrinkMap() {
    return {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3'
    };
  }

  get _justifyMap() {
    return {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'between': 'space-between',
      'around': 'space-around',
      'evenly': 'space-evenly'
    };
  }

  get _alignMap() {
    return {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'baseline': 'baseline',
      'stretch': 'stretch'
    };
  }

  get _colorMap() {
    return {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'gray-50': '#f9fafb',
      'gray-100': '#f3f4f6',
      'gray-200': '#e5e7eb',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700': '#374151',
      'gray-800': '#1f2937',
      'gray-900': '#111827',
      'red-50': '#fef2f2',
      'red-100': '#fee2e2',
      'red-200': '#fecaca',
      'red-300': '#fca5a5',
      'red-400': '#f87171',
      'red-500': '#ef4444',
      'red-600': '#dc2626',
      'red-700': '#b91c1c',
      'red-800': '#991b1b',
      'red-900': '#7f1d1d',
      'yellow-50': '#fffbeb',
      'yellow-100': '#fef3c7',
      'yellow-200': '#fde68a',
      'yellow-300': '#fcd34d',
      'yellow-400': '#fbbf24',
      'yellow-500': '#f59e0b',
      'yellow-600': '#d97706',
      'yellow-700': '#b45309',
      'yellow-800': '#92400e',
      'yellow-900': '#78350f',
      'green-50': '#ecfdf5',
      'green-100': '#d1fae5',
      'green-200': '#a7f3d0',
      'green-300': '#6ee7b7',
      'green-400': '#34d399',
      'green-500': '#10b981',
      'green-600': '#059669',
      'green-700': '#047857',
      'green-800': '#065f46',
      'green-900': '#064e3b',
      'blue-50': '#eff6ff',
      'blue-100': '#dbeafe',
      'blue-200': '#bfdbfe',
      'blue-300': '#93c5fd',
      'blue-400': '#60a5fa',
      'blue-500': '#3b82f6',
      'blue-600': '#2563eb',
      'blue-700': '#1d4ed8',
      'blue-800': '#1e40af',
      'blue-900': '#1e3a8a',
      'indigo-50': '#eef2ff',
      'indigo-100': '#e0e7ff',
      'indigo-200': '#c7d2fe',
      'indigo-300': '#a5b4fc',
      'indigo-400': '#818cf8',
      'indigo-500': '#6366f1',
      'indigo-600': '#4f46e5',
      'indigo-700': '#4338ca',
      'indigo-800': '#3730a3',
      'indigo-900': '#312e81',
      'purple-50': '#f5f3ff',
      'purple-100': '#ede9fe',
      'purple-200': '#ddd6fe',
      'purple-300': '#c4b5fd',
      'purple-400': '#a78bfa',
      'purple-500': '#8b5cf6',
      'purple-600': '#7c3aed',
      'purple-700': '#6d28d9',
      'purple-800': '#5b21b6',
      'purple-900': '#4c1d95',
      'pink-50': '#fdf2f8',
      'pink-100': '#fce7f3',
      'pink-200': '#fbcfe8',
      'pink-300': '#f9a8d4',
      'pink-400': '#f472b6',
      'pink-500': '#ec4899',
      'pink-600': '#db2777',
      'pink-700': '#be185d',
      'pink-800': '#9d174d',
      'pink-900': '#831843'
    };
  }

  get _colorMapOklch() {
    return {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      slate: {
          50: "oklch(0.984 0.003 247.858)",
          100: "oklch(0.968 0.007 247.896)",
          200: "oklch(0.929 0.013 255.508)",
          300: "oklch(0.869 0.022 252.894)",
          400: "oklch(0.704 0.04 256.788)",
          500: "oklch(0.554 0.046 257.417)",
          600: "oklch(0.446 0.043 257.281)",
          700: "oklch(0.372 0.044 257.287)",
          800: "oklch(0.279 0.041 260.031)",
          900: "oklch(0.208 0.042 265.755)",
          950: "oklch(0.129 0.042 264.695)",
      },
      gray: {
          50: "oklch(0.985 0.002 247.839)",
          100: "oklch(0.967 0.003 264.542)",
          200: "oklch(0.928 0.006 264.531)",
          300: "oklch(0.872 0.01 258.338)",
          400: "oklch(0.707 0.022 261.325)",
          500: "oklch(0.551 0.027 264.364)",
          600: "oklch(0.446 0.03 256.802)",
          700: "oklch(0.373 0.034 259.733)",
          800: "oklch(0.278 0.033 256.848)",
          900: "oklch(0.21 0.034 264.665)",
          950: "oklch(0.13 0.028 261.692)",
      },
      zinc: {
          50: "oklch(0.985 0 0)",
          100: "oklch(0.967 0.001 286.375)",
          200: "oklch(0.92 0.004 286.32)",
          300: "oklch(0.871 0.006 286.286)",
          400: "oklch(0.705 0.015 286.067)",
          500: "oklch(0.552 0.016 285.938)",
          600: "oklch(0.442 0.017 285.786)",
          700: "oklch(0.37 0.013 285.805)",
          800: "oklch(0.274 0.006 286.033)",
          900: "oklch(0.21 0.006 285.885)",
          950: "oklch(0.141 0.005 285.823)",
      },
      neutral: {
          50: "oklch(0.985 0 0)",
          100: "oklch(0.97 0 0)",
          200: "oklch(0.922 0 0)",
          300: "oklch(0.87 0 0)",
          400: "oklch(0.708 0 0)",
          500: "oklch(0.556 0 0)",
          600: "oklch(0.439 0 0)",
          700: "oklch(0.371 0 0)",
          800: "oklch(0.269 0 0)",
          900: "oklch(0.205 0 0)",
          950: "oklch(0.145 0 0)",
      },
      stone: {
          50: "oklch(0.985 0.001 106.423)",
          100: "oklch(0.97 0.001 106.424)",
          200: "oklch(0.923 0.003 48.717)",
          300: "oklch(0.869 0.005 56.366)",
          400: "oklch(0.709 0.01 56.259)",
          500: "oklch(0.553 0.013 58.071)",
          600: "oklch(0.444 0.011 73.639)",
          700: "oklch(0.374 0.01 67.558)",
          800: "oklch(0.268 0.007 34.298)",
          900: "oklch(0.216 0.006 56.043)",
          950: "oklch(0.147 0.004 49.25)",
      },
      red: {
          50: "oklch(0.971 0.013 17.38)",
          100: "oklch(0.936 0.032 17.717)",
          200: "oklch(0.885 0.062 18.334)",
          300: "oklch(0.808 0.114 19.571)",
          400: "oklch(0.704 0.191 22.216)",
          500: "oklch(0.637 0.237 25.331)",
          600: "oklch(0.577 0.245 27.325)",
          700: "oklch(0.505 0.213 27.518)",
          800: "oklch(0.444 0.177 26.899)",
          900: "oklch(0.396 0.141 25.723)",
          950: "oklch(0.258 0.092 26.042)",
      },
      orange: {
          50: "oklch(0.98 0.016 73.684)",
          100: "oklch(0.954 0.038 75.164)",
          200: "oklch(0.901 0.076 70.697)",
          300: "oklch(0.837 0.128 66.29)",
          400: "oklch(0.75 0.183 55.934)",
          500: "oklch(0.705 0.213 47.604)",
          600: "oklch(0.646 0.222 41.116)",
          700: "oklch(0.553 0.195 38.402)",
          800: "oklch(0.47 0.157 37.304)",
          900: "oklch(0.408 0.123 38.172)",
          950: "oklch(0.266 0.079 36.259)",
      },
      amber: {
          50: "oklch(0.987 0.022 95.277)",
          100: "oklch(0.962 0.059 95.617)",
          200: "oklch(0.924 0.12 95.746)",
          300: "oklch(0.879 0.169 91.605)",
          400: "oklch(0.828 0.189 84.429)",
          500: "oklch(0.769 0.188 70.08)",
          600: "oklch(0.666 0.179 58.318)",
          700: "oklch(0.555 0.163 48.998)",
          800: "oklch(0.473 0.137 46.201)",
          900: "oklch(0.414 0.112 45.904)",
          950: "oklch(0.279 0.077 45.635)",
      },
      yellow: {
          50: "oklch(0.987 0.026 102.212)",
          100: "oklch(0.973 0.071 103.193)",
          200: "oklch(0.945 0.129 101.54)",
          300: "oklch(0.905 0.182 98.111)",
          400: "oklch(0.852 0.199 91.936)",
          500: "oklch(0.795 0.184 86.047)",
          600: "oklch(0.681 0.162 75.834)",
          700: "oklch(0.554 0.135 66.442)",
          800: "oklch(0.476 0.114 61.907)",
          900: "oklch(0.421 0.095 57.708)",
          950: "oklch(0.286 0.066 53.813)",
      },
      lime: {
          50: "oklch(0.986 0.031 120.757)",
          100: "oklch(0.967 0.067 122.328)",
          200: "oklch(0.938 0.127 124.321)",
          300: "oklch(0.897 0.196 126.665)",
          400: "oklch(0.841 0.238 128.85)",
          500: "oklch(0.768 0.233 130.85)",
          600: "oklch(0.648 0.2 131.684)",
          700: "oklch(0.532 0.157 131.589)",
          800: "oklch(0.453 0.124 130.933)",
          900: "oklch(0.405 0.101 131.063)",
          950: "oklch(0.274 0.072 132.109)",
      },
      green: {
          50: "oklch(0.982 0.018 155.826)",
          100: "oklch(0.962 0.044 156.743)",
          200: "oklch(0.925 0.084 155.995)",
          300: "oklch(0.871 0.15 154.449)",
          400: "oklch(0.792 0.209 151.711)",
          500: "oklch(0.723 0.219 149.579)",
          600: "oklch(0.627 0.194 149.214)",
          700: "oklch(0.527 0.154 150.069)",
          800: "oklch(0.448 0.119 151.328)",
          900: "oklch(0.393 0.095 152.535)",
          950: "oklch(0.266 0.065 152.934)",
      },
      emerald: {
          50: "oklch(0.979 0.021 166.113)",
          100: "oklch(0.95 0.052 163.051)",
          200: "oklch(0.905 0.093 164.15)",
          300: "oklch(0.845 0.143 164.978)",
          400: "oklch(0.765 0.177 163.223)",
          500: "oklch(0.696 0.17 162.48)",
          600: "oklch(0.596 0.145 163.225)",
          700: "oklch(0.508 0.118 165.612)",
          800: "oklch(0.432 0.095 166.913)",
          900: "oklch(0.378 0.077 168.94)",
          950: "oklch(0.262 0.051 172.552)",
      },
      teal: {
          50: "oklch(0.984 0.014 180.72)",
          100: "oklch(0.953 0.051 180.801)",
          200: "oklch(0.91 0.096 180.426)",
          300: "oklch(0.855 0.138 181.071)",
          400: "oklch(0.777 0.152 181.912)",
          500: "oklch(0.704 0.14 182.503)",
          600: "oklch(0.6 0.118 184.704)",
          700: "oklch(0.511 0.096 186.391)",
          800: "oklch(0.437 0.078 188.216)",
          900: "oklch(0.386 0.063 188.416)",
          950: "oklch(0.277 0.046 192.524)",
      },
      cyan: {
          50: "oklch(0.984 0.019 200.873)",
          100: "oklch(0.956 0.045 203.388)",
          200: "oklch(0.917 0.08 205.041)",
          300: "oklch(0.865 0.127 207.078)",
          400: "oklch(0.789 0.154 211.53)",
          500: "oklch(0.715 0.143 215.221)",
          600: "oklch(0.609 0.126 221.723)",
          700: "oklch(0.52 0.105 223.128)",
          800: "oklch(0.45 0.085 224.283)",
          900: "oklch(0.398 0.07 227.392)",
          950: "oklch(0.302 0.056 229.695)",
      },
      sky: {
          50: "oklch(0.977 0.013 236.62)",
          100: "oklch(0.951 0.026 236.824)",
          200: "oklch(0.901 0.058 230.902)",
          300: "oklch(0.828 0.111 230.318)",
          400: "oklch(0.746 0.16 232.661)",
          500: "oklch(0.685 0.169 237.323)",
          600: "oklch(0.588 0.158 241.966)",
          700: "oklch(0.5 0.134 242.749)",
          800: "oklch(0.443 0.11 240.79)",
          900: "oklch(0.391 0.09 240.876)",
          950: "oklch(0.293 0.066 243.157)",
      },
      blue: {
          50: "oklch(0.97 0.014 254.604)",
          100: "oklch(0.932 0.032 255.585)",
          200: "oklch(0.882 0.059 254.128)",
          300: "oklch(0.809 0.105 251.813)",
          400: "oklch(0.707 0.165 254.624)",
          500: "oklch(0.623 0.214 259.815)",
          600: "oklch(0.546 0.245 262.881)",
          700: "oklch(0.488 0.243 264.376)",
          800: "oklch(0.424 0.199 265.638)",
          900: "oklch(0.379 0.146 265.522)",
          950: "oklch(0.282 0.091 267.935)",
      },
      indigo: {
          50: "oklch(0.962 0.018 272.314)",
          100: "oklch(0.93 0.034 272.788)",
          200: "oklch(0.87 0.065 274.039)",
          300: "oklch(0.785 0.115 274.713)",
          400: "oklch(0.673 0.182 276.935)",
          500: "oklch(0.585 0.233 277.117)",
          600: "oklch(0.511 0.262 276.966)",
          700: "oklch(0.457 0.24 277.023)",
          800: "oklch(0.398 0.195 277.366)",
          900: "oklch(0.359 0.144 278.697)",
          950: "oklch(0.257 0.09 281.288)",
      },
      violet: {
          50: "oklch(0.969 0.016 293.756)",
          100: "oklch(0.943 0.029 294.588)",
          200: "oklch(0.894 0.057 293.283)",
          300: "oklch(0.811 0.111 293.571)",
          400: "oklch(0.702 0.183 293.541)",
          500: "oklch(0.606 0.25 292.717)",
          600: "oklch(0.541 0.281 293.009)",
          700: "oklch(0.491 0.27 292.581)",
          800: "oklch(0.432 0.232 292.759)",
          900: "oklch(0.38 0.189 293.745)",
          950: "oklch(0.283 0.141 291.089)",
      },
      purple: {
          50: "oklch(0.977 0.014 308.299)",
          100: "oklch(0.946 0.033 307.174)",
          200: "oklch(0.902 0.063 306.703)",
          300: "oklch(0.827 0.119 306.383)",
          400: "oklch(0.714 0.203 305.504)",
          500: "oklch(0.627 0.265 303.9)",
          600: "oklch(0.558 0.288 302.321)",
          700: "oklch(0.496 0.265 301.924)",
          800: "oklch(0.438 0.218 303.724)",
          900: "oklch(0.381 0.176 304.987)",
          950: "oklch(0.291 0.149 302.717)",
      },
      fuchsia: {
          50: "oklch(0.977 0.017 320.058)",
          100: "oklch(0.952 0.037 318.852)",
          200: "oklch(0.903 0.076 319.62)",
          300: "oklch(0.833 0.145 321.434)",
          400: "oklch(0.74 0.238 322.16)",
          500: "oklch(0.667 0.295 322.15)",
          600: "oklch(0.591 0.293 322.896)",
          700: "oklch(0.518 0.253 323.949)",
          800: "oklch(0.452 0.211 324.591)",
          900: "oklch(0.401 0.17 325.612)",
          950: "oklch(0.293 0.136 325.661)",
      },
      pink: {
          50: "oklch(0.971 0.014 343.198)",
          100: "oklch(0.948 0.028 342.258)",
          200: "oklch(0.899 0.061 343.231)",
          300: "oklch(0.823 0.12 346.018)",
          400: "oklch(0.718 0.202 349.761)",
          500: "oklch(0.656 0.241 354.308)",
          600: "oklch(0.592 0.249 0.584)",
          700: "oklch(0.525 0.223 3.958)",
          800: "oklch(0.459 0.187 3.815)",
          900: "oklch(0.408 0.153 2.432)",
          950: "oklch(0.284 0.109 3.907)",
      },
      rose: {
          50: "oklch(0.969 0.015 12.422)",
          100: "oklch(0.941 0.03 12.58)",
          200: "oklch(0.892 0.058 10.001)",
          300: "oklch(0.81 0.117 11.638)",
          400: "oklch(0.712 0.194 13.428)",
          500: "oklch(0.645 0.246 16.439)",
          600: "oklch(0.586 0.253 17.585)",
          700: "oklch(0.514 0.222 16.935)",
          800: "oklch(0.455 0.188 13.697)",
          900: "oklch(0.41 0.159 10.272)",
          950: "oklch(0.271 0.105 12.094)",
      }
    };
  }

  get _borderWidthMap() {
    return {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _roundedMap() {
    return {
      'none': '0px',
      'sm': '0.125rem',
      '': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px'
    };
  }

  get _shadowMap() {
    return {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'none': 'none'
    };
  }

  get _opacityMap() {
    return {
      '0': '0',
      '5': '0.05',
      '10': '0.1',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '90': '0.9',
      '95': '0.95',
      '100': '1'
    };
  }

  get _transitionMap() {
    return {
      'none': 'none',
      'all': 'all',
      '': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      'colors': 'background-color, border-color, color, fill, stroke',
      'opacity': 'opacity',
      'shadow': 'box-shadow',
      'transform': 'transform'
    };
  }

  get _durationMap() {
    return {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    };
  }

  get _rotateMap() {
    return {
      '0': 'rotate(0deg)',
      '45': 'rotate(45deg)',
      '90': 'rotate(90deg)',
      '180': 'rotate(180deg)',
      '-45': 'rotate(-45deg)',
      '-90': 'rotate(-90deg)',
      '-180': 'rotate(-180deg)'
    };
  }

  get _scaleMap() {
    return {
      '0': 'scale(0)',
      '50': 'scale(0.5)',
      '75': 'scale(0.75)',
      '90': 'scale(0.9)',
      '95': 'scale(0.95)',
      '100': 'scale(1)',
      '105': 'scale(1.05)',
      '110': 'scale(1.1)',
      '125': 'scale(1.25)',
      '150': 'scale(1.5)'
    };
  }

  get _overflowMap() {
    return {
      'auto': 'auto',
      'hidden': 'hidden',
      'visible': 'visible',
      'scroll': 'scroll'
    };
  }

  get _cursorMap() {
    return {
      'auto': 'auto',
      'default': 'default',
      'pointer': 'pointer',
      'wait': 'wait',
      'text': 'text',
      'move': 'move',
      'not-allowed': 'not-allowed',
      'help': 'help',
      'grab': 'grab'
    };
  }

  get _pointerEventsMap() {
    return {
      'none': 'none',
      'auto': 'auto'
    };
  }

  get _animationMap() {
    return {
      'none': 'none',
      'spin': 'spin 1s linear infinite',
      'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce': 'bounce 1s infinite'
    };
  }

  get _aspectRatioMap() {
    return {
      'auto': 'auto',
      'square': '1 / 1',
      'video': '16 / 9'
    };
  }

  get _blurMap() {
    return {
      '0': '0',
      'none': '',
      'sm': '4px',
      'DEFAULT': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px'
    };
  }

  get _brightnessMap() {
    return {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
  }

  get _contrastMap() {
    return {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '100': '1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
  }

  get _grayscaleMap() {
    return {
      '0': '0',
      'DEFAULT': '100%'
    };
  }

  get _hueRotateMap() {
    return {
      '0': '0deg',
      '15': '15deg',
      '30': '30deg',
      '60': '60deg',
      '90': '90deg',
      '180': '180deg'
    };
  }

  get _invertMap() {
    return {
      '0': '0',
      'DEFAULT': '100%'
    };
  }

  get _saturateMap() {
    return {
      '0': '0',
      '50': '.5',
      '100': '1',
      '150': '1.5',
      '200': '2'
    };
  }

  get _sepiaMap() {
    return {
      '0': '0',
      'DEFAULT': '100%'
    };
  }

  get _backgroundImageMap() {
    return {
      'none': 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
    };
  }

  get _backgroundPositionMap() {
    return {
      'bottom': 'bottom',
      'center': 'center',
      'left': 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'right': 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'top': 'top'
    };
  }

  get _backgroundSizeMap() {
    return {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain'
    };
  }

  get _columnsMap() {
    return {
      'auto': 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '3xs': '16rem',
      '2xs': '18rem',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    };
  }

  get _containerMap() {
    return {};
  }

  get _contentMap() {
    return {
      'none': 'none'
    };
  }

  get _dropShadowMap() {
    return {
      'sm': '0 1px 1px rgb(0 0 0 / 0.05)',
      'DEFAULT': ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      'md': ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      'lg': ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      'xl': ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      'none': '0 0 #0000'
    };
  }

  get _fontFamilyMap() {
    return {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    };
  }

  get _fontSizeMap() {
    return {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    };
  }

  get _fontWeightMap() {
    return {
      'thin': '100',
      'extralight': '200',
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'black': '900'
    };
  }

  get _gradientColorStopPositionsMap() {
    return {
      '0%': '0%',
      '5%': '5%',
      '10%': '10%',
      '15%': '15%',
      '20%': '20%',
      '25%': '25%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '45%': '45%',
      '50%': '50%',
      '55%': '55%',
      '60%': '60%',
      '65%': '65%',
      '70%': '70%',
      '75%': '75%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '95%': '95%',
      '100%': '100%'
    };
  }

  get _gridAutoColumnsMap() {
    return {
      'auto': 'auto',
      'min': 'min-content',
      'max': 'max-content',
      'fr': 'minmax(0, 1fr)'
    };
  }

  get _gridAutoRowsMap() {
    return {
      'auto': 'auto',
      'min': 'min-content',
      'max': 'max-content',
      'fr': 'minmax(0, 1fr)'
    };
  }

  get _gridColumnMap() {
    return {
      'auto': 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1'
    };
  }

  get _gridColumnEndMap() {
    return {
      'auto': 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    };
  }

  get _gridColumnStartMap() {
    return {
      'auto': 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    };
  }

  get _gridRowMap() {
    return {
      'auto': 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1'
    };
  }

  get _gridRowEndMap() {
    return {
      'auto': 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    };
  }

  get _gridRowStartMap() {
    return {
      'auto': 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    };
  }

  get _gridTemplateColumnsMap() {
    return {
      'none': 'none',
      'subgrid': 'subgrid',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))'
    };
  }

  get _gridTemplateRowsMap() {
    return {
      'none': 'none',
      'subgrid': 'subgrid',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))'
    };
  }

  get _insetMap() {
    return {
      'auto': 'auto',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      'full': '100%'
    };
  }

  get _keyframesMap() {
    return {
      'spin': { to: { transform: 'rotate(360deg)' } },
      'ping': { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
      'pulse': { '50%': { opacity: '.5' } },
      'bounce': { '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' }, '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' } }
    };
  }

  get _letterSpacingMap() {
    return {
      'tighter': '-0.05em',
      'tight': '-0.025em',
      'normal': '0em',
      'wide': '0.025em',
      'wider': '0.05em',
      'widest': '0.1em'
    };
  }

  get _lineHeightMap() {
    return {
      'none': '1',
      'tight': '1.25',
      'snug': '1.375',
      'normal': '1.5',
      'relaxed': '1.625',
      'loose': '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem'
    };
  }

  get _listStyleTypeMap() {
    return {
      'none': 'none',
      'disc': 'disc',
      'decimal': 'decimal'
    };
  }

  get _listStyleImageMap() {
    return {
      'none': 'none'
    };
  }

  get _lineClampMap() {
    return {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6'
    };
  }

  get _objectPositionMap() {
    return {
      'bottom': 'bottom',
      'center': 'center',
      'left': 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'right': 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'top': 'top'
    };
  }

  get _orderMap() {
    return {
      'first': '-9999',
      'last': '9999',
      'none': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    };
  }

  get _outlineOffsetMap() {
    return {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _outlineWidthMap() {
    return {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _ringOffsetWidthMap() {
    return {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _ringWidthMap() {
    return {
      'DEFAULT': '3px',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _skewMap() {
    return {
      '0': '0deg',
      '1': '1deg',
      '2': '2deg',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg'
    };
  }

  get _strokeWidthMap() {
    return {
      '0': '0',
      '1': '1',
      '2': '2'
    };
  }

  get _textDecorationThicknessMap() {
    return {
      'auto': 'auto',
      'from-font': 'from-font',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _textUnderlineOffsetMap() {
    return {
      'auto': 'auto',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    };
  }

  get _transformOriginMap() {
    return {
      'center': 'center',
      'top': 'top',
      'top-right': 'top right',
      'right': 'right',
      'bottom-right': 'bottom right',
      'bottom': 'bottom',
      'bottom-left': 'bottom left',
      'left': 'left',
      'top-left': 'top left'
    };
  }

  get _transitionDelayMap() {
    return {
      '0': '0s',
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    };
  }

  get _transitionPropertyMap() {
    return {
      'none': 'none',
      'all': 'all',
      'DEFAULT': 'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      'colors': 'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
      'opacity': 'opacity',
      'shadow': 'box-shadow',
      'transform': 'transform'
    };
  }

  get _transitionTimingFunctionMap() {
    return {
      'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'linear': 'linear',
      'in': 'cubic-bezier(0.4, 0, 1, 1)',
      'out': 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    };
  }

  get _translateMap() {
    return {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      'full': '100%'
    };
  }

  get _willChangeMap() {
    return {
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'transform': 'transform'
    };
  }
}
