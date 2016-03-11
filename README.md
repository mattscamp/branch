# branch
A tiny VDOM implementation
[![npm](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
```js
var node = require('branch');
var template = branch(
  'div', { id: 'list-holder', events: { click: clickHandler } }, 
    [ 
    branch(
    'ul', { id: 'list', class: [ 'none' ] }, 
    [ 
      branch(
      'li', { id: 'list-item', class: [ 'none', 'active' ] }, 
      [ ]) 
    ]) 
  ]);
```
