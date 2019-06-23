/*
toggled.js
by Craig Buckler, @craigbuckler

Add a data-toggled="NAME" attribute to any HTML element.
When that element is clicked, the NAME class is added to or removed from the HTML body.

Nothing is set true by default and state is retained between page loads.
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
      b = document.body, store, storeEnabled = true;

    // no support
    if (!b || !b.classList || !b.dataset) return;

    // get local storage
    try {
      store = localStorage.getItem(name);
    }
    catch(e) {
      storeEnabled = false;
    }

    if (!store) store = {};
    else {

      // parse JSON in store
      store = JSON.parse(store);

      // add as body class
      for (var c in store) b.classList.add(c);

    }

    // store state on unload
    if (storeEnabled) {

      window.addEventListener('unload', function() {
        localStorage.setItem(name, JSON.stringify(store));
      }, false);

    }

    // handle toggle click
    b.addEventListener('click', function(e) {

      var t = e.target, tog = t && t.dataset && t.dataset[name];
      if (!tog) return;

      tog.trim().split(/\s+/).forEach(function(t) {

        // update store
        if (store[t]) delete store[t];
        else store[t] = 1;

        b.classList[store[t] ? 'add' : 'remove'](t);

      });

    }, false);

  }

})();
