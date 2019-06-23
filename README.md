# toggled.js

[**demonstration**](https://codepen.io/craigbuckler/pen/mZmmMa) | [**GitHub**](https://github.com/craigbuckler/toggled.js) | [**npm**](https://www.npmjs.com/package/toggled.js) | [**donate**](https://gum.co/toggledjs) | [@craigbuckler](https://twitter.com/craigbuckler) | [craigbuckler.com](https://craigbuckler.com/)

Toggles a class to the HTML `body` when an element is clicked.

Please use the code as you wish. [Tweet me @craigbuckler](https://twitter.com/craigbuckler) if you find it useful and [donate toward development](https://gum.co/toggledjs) if you use it commercially.

* easily add a toggle switch to any HTML element
* state is remembered between page loads
* works in all modern browsers
* no external dependencies - works with any framework
* fast and lightweight: 630 bytes of JavaScript


## Usage

The page must load the JavaScript. It can be placed anywhere but, typically, it is loaded just before the closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/toggled.js/dist/toggled.js"></script>
```

The CDN URL is shown above but you can also `npm i toggled.js` to install via npm and use a bundler.

Add a `data-toggled="NAME"` attribute to any HTML element. When that element is clicked, the NAME class is added to or removed from the HTML body.

```html
<button data-toggled="buttonsize">CLICK ME</button>
```

When the button is clicked for the first time, a `buttonsize` class is added to the HTML body. CSS or JavaScript can respond to the change, e.g. change the font size:

```css
.buttonsize button {
  font-size: 2em;
}
```

The class is removed when the button is clicked for a second time and the state is retained between page loads.

Any element can be used as a toggle and any number of space-separated classes can be defined, e.g. `data-toggled="NAME1 NAME2 NAME3"`.


## Version history

### v1.0.0, 23 June 2019

* initial release
