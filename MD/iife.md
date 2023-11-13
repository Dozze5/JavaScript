# IIFE

<font size = "4">IIFE are Immediately Invoked Function Expession that is called after it is defined <br> It is Used to reduce Scope Pollution </font>

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.

```