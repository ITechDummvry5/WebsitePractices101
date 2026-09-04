This File - **terminologies-html.md** — Glossary of HTML terms, short one-line definitions (Beginner → Advanced)

# HTML

## 1. Basics

### HTML
`HTML` (HyperText Markup Language) → the standard markup language used to structure content on a webpage.

### HTML Document
An `HTML Document` → a text file containing HTML code that a browser reads and renders as a webpage.

### Doctype
`<!DOCTYPE html>` → a declaration placed at the top of an HTML file that tells the browser to render the page using modern HTML standards.

### HTML Element
`HTML Element` → an individual part of an HTML document, usually created using an opening tag and a closing tag.

### Tag
A `tag` → the HTML name that identifies an element, such as `div`, `p`, or `button`.

### Opening Tag
An `opening tag` → marks the start of an element, such as `<p>`.

### Closing Tag
A `closing tag` → marks the end of an element, such as `</p>`.

### Self-Closing Tag / Void Element
A `self-closing tag` → a tag that has no closing tag and no content, such as `<br>` or `<img>`. See the [Void Elements](#void-elements) table below.

### Nesting
`Nesting` → placing one HTML element inside another to build structure, such as an `<li>` inside a `<ul>`.

### Comment
An HTML `comment` → text ignored by the browser, written as `<!-- comment here -->`, used to leave notes in the code.

### Attribute
An `attribute` → additional information about an HTML element, such as `id`, `class`, `href`, or `type`.

### Global Attribute
A `global attribute` → an attribute that can be used on any HTML element, such as `id`, `class`, `style`, or `title`.

### Boolean Attribute
A `boolean attribute` → an attribute that is either present or absent, with no value needed, such as `disabled` or `checked`.

### data-* Attribute
A `data-*` attribute → a custom attribute used to store extra information on an element, accessible via JavaScript, such as `data-user-id="42"`.

### Class Attribute
A `class` attribute → adds a class name to an HTML element, allowing it to be grouped, styled, or selected, such as `class="button"` or `class="primary"`.

### ID Attribute
An `id` attribute → gives a unique name to an HTML element, allowing it to be specifically identified or selected, such as `id="header"`.

## 2. Document Structure & Metadata

| Element    | Category | Description                                |
| ---------- | -------- | ------------------------------------------- |
| `<html>`   | Block    | Root element of an HTML document            |
| `<head>`   | Block    | Contains document metadata and resources    |
| `<title>`  | —        | Sets the browser tab title                  |
| `<meta>`   | —        | Provides metadata about the document        |
| `<link>`   | —        | Links external resources such as CSS        |
| `<style>`  | —        | Contains CSS styles                         |
| `<script>` | —        | Contains or links JavaScript                |
| `<body>`   | Block    | Contains the visible webpage content        |

## 3. Sectioning & Layout

| Element     | Category | Description                          |
| ----------- | -------- | ------------------------------------- |
| `<header>`  | Block    | Introductory or header content        |
| `<nav>`     | Block    | Navigation links                      |
| `<main>`    | Block    | Main content of the document          |
| `<section>` | Block    | Thematic section of content           |
| `<article>` | Block    | Independent, self-contained content   |
| `<aside>`   | Block    | Related or secondary content          |
| `<footer>`  | Block    | Footer content                        |
| `<div>`     | Block    | Generic block container               |

## 4. Headings & Text Content

| Element        | Category | Description                       |
| -------------- | -------- | ---------------------------------- |
| `<h1>`         | Block    | Main heading                       |
| `<h2>`         | Block    | Level 2 heading                    |
| `<h3>`         | Block    | Level 3 heading                    |
| `<h4>`         | Block    | Level 4 heading                    |
| `<h5>`         | Block    | Level 5 heading                    |
| `<h6>`         | Block    | Level 6 heading                    |
| `<p>`          | Block    | Paragraph                          |
| `<hr>`         | Block    | Thematic break between sections    |
| `<pre>`        | Block    | Preformatted text                  |
| `<blockquote>` | Block    | Long quotation                     |

## 5. Lists

| Element | Category  | Description                               |
| ------- | --------- | ------------------------------------------ |
| `<ol>`  | Block     | Ordered list                               |
| `<ul>`  | Block     | Unordered list                             |
| `<li>`  | List item | Item inside an ordered or unordered list   |
| `<dl>`  | Block     | Description list                           |
| `<dt>`  | Block     | Term in a description list                 |
| `<dd>`  | Block     | Description of a term                      |

## 6. Figures

| Element        | Category | Description                                          |
| -------------- | -------- | ----------------------------------------------------- |
| `<figure>`     | Block    | Self-contained content such as an image or diagram    |
| `<figcaption>` | Block    | Caption for a `<figure>`                               |

## 7. Tables

| Element     | Category | Description             |
| ----------- | -------- | ------------------------ |
| `<table>`   | Block    | Table                    |
| `<thead>`   | Table    | Table header section     |
| `<tbody>`   | Table    | Table body section       |
| `<tfoot>`   | Table    | Table footer section     |
| `<tr>`      | Table    | Table row                |
| `<th>`      | Table    | Table header cell        |
| `<td>`      | Table    | Table data cell          |
| `<caption>` | Table    | Table caption            |

## 8. Forms & Input Controls

| Element       | Category     | Description                            |
| ------------- | ------------ | ---------------------------------------- |
| `<form>`      | Block        | Form container                          |
| `<fieldset>`  | Block        | Groups related form controls            |
| `<legend>`    | Block        | Caption for a `<fieldset>`               |
| `<label>`     | Inline       | Label for a form control                |
| `<input>`     | Inline-block | Form input control                      |
| `<button>`    | Inline-block | Interactive button                      |
| `<select>`    | Inline-block | Dropdown selection control              |
| `<option>`    | —            | Option inside a `<select>`               |
| `<textarea>`  | Inline-block | Multi-line text input                   |
| `<output>`    | Inline       | Displays a calculation or result        |
| `<progress>`  | Inline-block | Displays progress                       |
| `<meter>`     | Inline-block | Displays a measurement within a range   |

## 9. Inline Text-Level Elements

| Element        | Category | Description                                             |
| -------------- | -------- | -------------------------------------------------------- |
| `<a>`          | Inline   | Hyperlink                                                |
| `<span>`       | Inline   | Generic inline container                                 |
| `<strong>`     | Inline   | Indicates strong importance                               |
| `<b>`          | Inline   | Draws attention to text without semantic importance       |
| `<em>`         | Inline   | Indicates emphasis                                        |
| `<i>`          | Inline   | Alternate voice or mood                                   |
| `<u>`          | Inline   | Indicates non-textual annotation                          |
| `<s>`          | Inline   | Represents content that is no longer accurate/relevant    |
| `<small>`      | Inline   | Smaller side comments or fine print                       |
| `<mark>`       | Inline   | Highlighted or marked text                                 |
| `<del>`        | Inline   | Deleted content                                            |
| `<ins>`        | Inline   | Inserted content                                           |
| `<sub>`        | Inline   | Subscript text                                             |
| `<sup>`        | Inline   | Superscript text                                           |
| `<br>`         | Inline   | Line break                                                 |
| `<wbr>`        | Inline   | Optional line-break opportunity                            |
| `<code>`       | Inline   | Represents a piece of computer code                        |
| `<kbd>`        | Inline   | Represents user keyboard input                             |
| `<samp>`       | Inline   | Represents sample output from a program                    |
| `<var>`        | Inline   | Represents a variable                                      |
| `<abbr>`       | Inline   | Abbreviation or acronym                                    |
| `<cite>`       | Inline   | Title of a creative work                                   |
| `<q>`          | Inline   | Short quotation                                             |
| `<time>`       | Inline   | Represents a date or time                                   |
| `<data>`       | Inline   | Associates content with machine-readable data               |
| `<ruby>`       | Inline   | Ruby annotation container                                   |
| `<rt>`         | Inline   | Ruby annotation text                                        |
| `<rp>`         | Inline   | Fallback parentheses for ruby annotations                   |
| `<bdi>`        | Inline   | Isolates text direction                                     |
| `<bdo>`        | Inline   | Overrides text direction                                    |

## 10. Media & Embedded Content

| Element     | Category     | Description                                     |
| ----------- | ------------ | ------------------------------------------------- |
| `<img>`     | Inline       | Embeds an image                                    |
| `<picture>` | Inline       | Provides responsive image sources                  |
| `<source>`  | —            | Provides media or image source                     |
| `<audio>`   | Inline-block | Embeds audio                                       |
| `<video>`   | Inline-block | Embeds video                                       |
| `<track>`   | —            | Provides text tracks for media                     |
| `<iframe>`  | Inline       | Embeds another webpage/document                    |
| `<embed>`   | Inline-block | Embeds external content                            |
| `<object>`  | Inline-block | Embeds an external resource                        |
| `<canvas>`  | Inline       | Drawing/graphics area controlled by JavaScript      |
| `<svg>`     | Inline       | Scalable vector graphics container                  |

## 11. Interactive Elements

| Element      | Category | Description                                    |
| ------------ | -------- | ------------------------------------------------ |
| `<details>`  | Block    | Expandable/collapsible content                    |
| `<summary>`  | Block    | Visible heading for `<details>`                    |
| `<dialog>`   | Block    | Dialog or modal window                             |
| `<template>` | —        | Holds HTML that is not rendered immediately        |

## 12. Void Elements

A void element cannot have a closing tag or contain any content — it stands alone and self-closes by nature.

| Void Element | Description                              |
| ------------ | ---------------------------------------- |
| `<meta>`     | Provides metadata about the document     |
| `<link>`     | Links external resources such as CSS     |
| `<hr>`       | Thematic break between sections          |
| `<input>`    | Form input control                       |
| `<br>`       | Line break                               |
| `<wbr>`      | Optional line-break opportunity          |
| `<img>`      | Embeds an image                          |
| `<source>`   | Provides media or image source           |
| `<track>`    | Provides text tracks for media           |
| `<embed>`    | Embeds external content                  |

## 13. Core Concepts

### DOM
`DOM` (Document Object Model) → a tree-like model of the webpage that lets JavaScript access, change, add, or remove HTML elements and content.

### CSS Selector
A `CSS selector` → a pattern used to select HTML elements based on their tag, ID, class, attributes, descendant selector or other characteristics.

### ID
An `ID` → a unique name used to identify a specific HTML element.

### Class (HTML/CSS)
A `class` → a name used to group HTML elements that share the same styling or purpose, such as `"button"` or `"primary"`.

### Collection
A `collection` → a list-like group of HTML elements returned by methods like `getElementsByClassName`, `getElementsByTagName`, or `querySelectorAll`, such as `HTMLCollection` or `NodeList`.

## 14. Advanced Concepts

### Semantic HTML
`Semantic HTML` → using elements that describe their meaning and purpose (like `<header>`, `<nav>`, `<article>`) instead of generic elements like `<div>`, making the page easier to understand for browsers, developers, and assistive technology.

### Accessibility (a11y)
`Accessibility` → designing and building a webpage so it can be used by people with disabilities, including those using screen readers, keyboard-only navigation, or other assistive technology.

### ARIA
`ARIA` (Accessible Rich Internet Applications) → a set of attributes (like `role`, `aria-label`, `aria-hidden`) that add extra accessibility information to HTML elements, especially custom or dynamic components.

### Viewport Meta Tag
The `viewport` meta tag → `<meta name="viewport" content="width=device-width, initial-scale=1">`, tells the browser how to control the page's dimensions and scaling on different screen sizes.

### Block vs Inline vs Inline-block
`Block` elements start on a new line and take up the full available width. `Inline` elements flow within the surrounding text and only take up as much width as needed. `Inline-block` elements flow like inline elements but accept width/height like block elements.

### Replaced Element
A `replaced element` → an element whose appearance and content come from an external source outside CSS, such as `<img>`, `<video>`, or `<iframe>`.

### Form Validation Attributes
`Form validation attributes` → attributes like `required`, `pattern`, `min`, `max`, and `maxlength` that let the browser validate form input without JavaScript.

### Progressive Enhancement
`Progressive Enhancement` → building a webpage so that basic content and functionality work everywhere, then layering on CSS and JavaScript enhancements for browsers that support them.