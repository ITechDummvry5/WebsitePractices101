This File - **terminologies-css.md** — Glossary of CSS terms, short one-line definitions (Beginner → Advanced)

# CSS

## 1. Basics

### CSS
`CSS` (Cascading Style Sheets) → a language used to style and lay out HTML elements, such as colors, fonts, spacing, and positioning.

### CSS Rule
A `CSS rule` → a selector paired with a declaration block, such as `p { color: red; }`.

### Selector
A `selector` → the part of a CSS rule that targets which HTML element(s) the styles apply to, such as `p`, `.button`, or `#header`.

### Property
A `property` → the name of the style being set, such as `color`, `font-size`, or `margin`.

### Value
A `value` → the setting assigned to a property, such as `red`, `16px`, or `center`.

### Declaration
A `declaration` → a single property-value pair, such as `color: red;`.

### Declaration Block
A `declaration block` → a group of declarations wrapped in curly braces `{ }`.

### Comment
A CSS `comment` → text ignored by the browser, written as `/* comment here */`, used to leave notes in the code.

### Inline CSS
`Inline CSS` → styles written directly on an HTML element using the `style` attribute, such as `<p style="color: red;">`.

### Internal CSS
`Internal CSS` → styles written inside a `<style>` tag in the `<head>` of an HTML document.

### External CSS
`External CSS` → styles written in a separate `.css` file and linked to the HTML document using `<link rel="stylesheet" href="styles.css">`.

## 2. Selectors

### Type Selector (Element Selector)
A `type selector` → targets all elements of a given tag, such as `p { }` targeting every `<p>`.

### Class Selector
A `class selector` → targets elements with a specific class, written with a dot, such as `.button { }`.

### ID Selector
An `ID selector` → targets a single element with a specific ID, written with a hash, such as `#header { }`.

### Universal Selector
The `universal selector` → targets every element on the page, written as `* { }`.

### Attribute Selector
An `attribute selector` → targets elements that have a specific attribute or attribute value, such as `[type="text"] { }`.

### Descendant Selector
A `descendant selector` → targets elements nested anywhere inside another element, written with a space, such as `nav a { }`.

### Child Selector
A `child selector` → targets only the direct children of an element, written with `>`, such as `ul > li { }`.

### Adjacent Sibling Selector
An `adjacent sibling selector` → targets an element immediately following another, written with `+`, such as `h1 + p { }`.

### General Sibling Selector
A `general sibling selector` → targets all siblings after an element, written with `~`, such as `h1 ~ p { }`.

### Group Selector
A `group selector` → applies the same styles to multiple selectors at once, separated by commas, such as `h1, h2, h3 { }`.

### Pseudo-class
A `pseudo-class` → targets an element in a specific state, such as `:hover`, `:focus`, `:first-child`, or `:nth-child()`.

### Pseudo-element
A `pseudo-element` → targets a specific part of an element, such as `::before`, `::after`, or `::first-line`.

## 3. Cascade, Specificity & Inheritance

### Cascade
The `cascade` → the process CSS uses to decide which styles apply when multiple rules target the same element, based on source order, specificity, and importance.

### Specificity
`Specificity` → the set of rules CSS uses to decide which selector "wins" when multiple selectors target the same element (ID beats class, class beats type, etc.).

### Inheritance
`Inheritance` → when a child element automatically takes on certain style properties (like `color` or `font-family`) from its parent.

### !important
`!important` → a modifier added to a declaration that overrides normal specificity rules, such as `color: red !important;`.

### Source Order
`Source Order` → when two rules have equal specificity, the one that appears later in the stylesheet wins.

## 4. The Box Model

### Box Model
The `box model` → describes how every HTML element is structured as a box made of content, padding, border, and margin.

### Content
`Content` → the innermost part of the box model, containing text or other elements.

### Padding
`Padding` → the space between an element's content and its border.

### Border
A `border` → the line that wraps around an element's padding and content.

### Margin
`Margin` → the space outside an element's border, separating it from other elements.

### Box-sizing
`box-sizing` → a property that controls whether `width`/`height` include padding and border (`border-box`) or not (`content-box`).

### Width & Height
`width` and `height` → properties that set the size of the content box (or the full box, depending on `box-sizing`).

### Margin Collapse
`Margin Collapse` → when the top and bottom margins of adjacent block elements combine into a single margin instead of adding together.

## 5. Display & Positioning

### Display
The `display` property → controls how an element is rendered in the layout, such as `block`, `inline`, `inline-block`, `flex`, `grid`, or `none`.

### Block
A `block` element → starts on a new line and takes up the full available width, such as `<div>` or `<p>`.

### Inline
An `inline` element → flows within surrounding text and only takes up as much width as needed, such as `<span>` or `<a>`.

### Inline-block
An `inline-block` element → flows like an inline element but accepts `width`/`height` like a block element.

### Position
The `position` property → controls how an element is placed in the document, such as `static`, `relative`, `absolute`, `fixed`, or `sticky`.

### Static Position
`static` → the default positioning; the element follows normal document flow.

### Relative Position
`relative` → positions an element relative to its own normal position, using `top`/`right`/`bottom`/`left`.

### Absolute Position
`absolute` → positions an element relative to its nearest positioned ancestor, removing it from normal document flow.

### Fixed Position
`fixed` → positions an element relative to the browser window, staying in place when the page scrolls.

### Sticky Position
`sticky` → positions an element as relative until it crosses a defined scroll point, then treats it as fixed.

### z-index
`z-index` → a property that controls the stacking order of positioned elements; higher values appear on top.

### Float
`float` → a property that pushes an element to the left or right, allowing content to wrap around it.

### Clear
`clear` → a property that prevents an element from wrapping next to a floated element.

## 6. Flexbox

### Flex Container
A `flex container` → an element with `display: flex`, which controls the layout of its direct children (flex items).

### Flex Item
A `flex item` → a direct child of a flex container.

### flex-direction
`flex-direction` → sets the direction flex items are laid out, such as `row` or `column`.

### justify-content
`justify-content` → aligns flex items along the main axis, such as `center`, `space-between`, or `flex-start`.

### align-items
`align-items` → aligns flex items along the cross axis, such as `center`, `stretch`, or `flex-start`.

### flex-wrap
`flex-wrap` → controls whether flex items wrap onto multiple lines when they don't fit.

### flex-grow / flex-shrink / flex-basis
`flex-grow` controls how much an item grows to fill space; `flex-shrink` controls how much it shrinks; `flex-basis` sets its starting size.

### gap
`gap` → a property that sets spacing between flex or grid items.

## 7. Grid

### Grid Container
A `grid container` → an element with `display: grid`, which arranges its direct children into rows and columns.

### Grid Item
A `grid item` → a direct child of a grid container.

### grid-template-columns / grid-template-rows
`grid-template-columns` and `grid-template-rows` → define the number and size of columns and rows in a grid.

### fr Unit
The `fr` unit → a flexible length used in grid layouts that represents a fraction of the available space.

### grid-gap
`grid-gap` (or `gap`) → sets the spacing between grid rows and columns.

### grid-area
`grid-area` → assigns a grid item to a named area or specific row/column position.

## 8. Typography & Text

### font-family
`font-family` → sets the typeface used for text, such as `Arial, sans-serif`.

### font-size
`font-size` → sets the size of text.

### font-weight
`font-weight` → sets how bold text appears, such as `normal`, `bold`, or a number like `600`.

### line-height
`line-height` → sets the vertical spacing between lines of text.

### text-align
`text-align` → sets the horizontal alignment of text, such as `left`, `center`, or `right`.

### text-decoration
`text-decoration` → adds or removes decoration on text, such as `underline`, `line-through`, or `none`.

### letter-spacing
`letter-spacing` → adjusts the space between characters in text.

### color
`color` → sets the color of an element's text.

## 9. Colors & Units

### Hex Color
A `hex color` → a color written as a hexadecimal code, such as `#ff0000` for red.

### RGB / RGBA
`rgb()` / `rgba()` → color functions using red, green, blue (and optional alpha/transparency) values, such as `rgba(255, 0, 0, 0.5)`.

### HSL / HSLA
`hsl()` / `hsla()` → color functions using hue, saturation, lightness (and optional alpha) values.

### Absolute Units
`Absolute units` → fixed-size units that don't scale, such as `px`.

### Relative Units
`Relative units` → units that scale based on another value, such as `em` (relative to parent font size), `rem` (relative to root font size), `%` (relative to parent), `vw`/`vh` (relative to viewport width/height).

### CSS Custom Property (CSS Variable)
A `CSS custom property` → a reusable value defined with `--name: value;` and accessed with `var(--name)`.

## 10. Backgrounds & Borders

### background-color
`background-color` → sets the background color of an element.

### background-image
`background-image` → sets an image as an element's background.

### background-size
`background-size` → controls how a background image is scaled, such as `cover` or `contain`.

### border-radius
`border-radius` → rounds the corners of an element's border.

### box-shadow
`box-shadow` → adds a shadow effect around an element's box.

## 11. Responsive Design

### Media Query
A `media query` → a CSS rule that applies styles only when certain conditions are met, such as `@media (max-width: 600px) { }`.

### Breakpoint
A `breakpoint` → a defined screen width at which a layout changes to adapt to different devices.

### Responsive Design
`Responsive Design` → an approach to building webpages so they adapt and look good across different screen sizes and devices.

### Mobile-First
`Mobile-First` → a responsive design approach that styles for small screens first, then adds styles for larger screens using media queries.

### Viewport Units
`Viewport units` (`vw`, `vh`, `vmin`, `vmax`) → units based on a percentage of the browser's viewport width or height.

## 12. Transitions & Animations

### Transition
A `transition` → smoothly animates a property change over time, such as `transition: background-color 0.3s ease;`.

### Transform
`transform` → applies visual changes to an element like `translate()`, `rotate()`, `scale()`, or `skew()`, without affecting the document layout.

### Animation
`animation` → applies a defined `@keyframes` sequence to an element over a duration.

### Keyframes
`@keyframes` → defines the stages of an animation, specifying styles at different points (`0%`, `50%`, `100%`, etc.).

## 13. Advanced Concepts

### CSS Reset / Normalize
A `CSS Reset` or `Normalize` stylesheet → removes or standardizes default browser styling so a page looks consistent across browsers.

### BEM (Block Element Modifier)
`BEM` → a naming convention for CSS classes (`block__element--modifier`) that makes class names predictable and easier to maintain.

### Stacking Context
A `stacking context` → a conceptual layer formed by certain properties (like `position` + `z-index`, or `opacity < 1`) that determines how elements stack in 3D relative to each other.

### Specificity War
A `specificity war` → a situation where developers keep adding more specific selectors or `!important` to override each other's styles, making CSS hard to maintain.

### CSS Grid vs Flexbox
`Flexbox` is best for laying out items in a single direction (row or column); `Grid` is best for laying out items in two dimensions (rows and columns) at once.

### Container Query
A `container query` → a CSS rule that applies styles based on the size of a containing element rather than the viewport, such as `@container (min-width: 400px) { }`.

### CSS Preprocessor
A `CSS preprocessor` (like Sass or Less) → a tool that extends CSS with features like variables, nesting, and mixins, then compiles down to regular CSS.
