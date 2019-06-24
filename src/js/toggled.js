/*
toggled.js
by Craig Buckler, @craigbuckler

Provides UI toggle state retention.

Add a data-toggled="NAME1 NAME2 etc" attribute to any HTML element.
When that element is clicked, those classes are added to or removed from the HTML body.

Use data-toggled="" to toggle the element's classes on the body.
*/
(function() {

  'use strict';

  if (!window.addEventListener) return;

  // start
  if (document.readyState === 'complete') main();
  else window.addEventListener('DOMContentLoaded', main, false);

  function main() {

    var
      name = 'toggled',
      b = document.body, store = '';

    // no support
    if (!b || !b.classList || !b.dataset) return;

    try {

      // get local storage
      store = localStorage.getItem(name);

      // add stored items
      b.className += store;

      // store state on unload
      window.addEventListener('unload', function() {
        localStorage.setItem(name, store);
      }, false);

    }
    catch(e) {}

    // handle toggle click
    b.addEventListener('click', function(e) {

      var t = e.target, tog = t && t.dataset && t.dataset[name];
      if (tog === '') tog = t.className;
      if (!tog) return;

      tog.trim().split(/\s+/).forEach(function(t) {

        // toggle class
        b.classList.toggle(t);

        // remove from store
        store = store.replace(new RegExp('\\s' + t + '\\s', 'g'), '');

        // add to store
        if (b.classList.contains(t)) store += ' ' + t + ' ';

      });

    }, false);

  }

})();
