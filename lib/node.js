/**
 * Exports
 */

module.exports = Node;

/**
 * Our 'Node' data structure
 */

function Node(tag, attributes, children) {
  this.tag = tag;
  this.children = children || [];
  this.attributes = parseAttributes(attributes);
  this.events = parseEvents(attributes);
  this.id = uId();
  this.index = 0;
}

/**
 * Our bindable events
 * This is likely missing some events
 */

var events = {
  submit: 'submit',
  blur: 'blur',
  change: 'change',
  click: 'click',
  focus: 'focus',
  scroll: 'scroll',
  doubleClick: 'dblclick',
  input: 'input',
  keyDown: 'keydown',
  keyUp: 'keyup',
  mouseDown: 'mousedown',
  mouseMove: 'mousemove',
  mouseOut: 'mouseout',
  mouseOver: 'mouseover',
  mouseUp: 'mouseup',
  drag: 'drag',
  dragEnd: 'dragend',
  dragEnter: 'dragenter',
  dragExit: 'dragexit',
  dragLeave: 'dragleave',
  dragOver: 'dragover',
  dragStart: 'dragstart',
  drop: 'drop',
};

/**
 * Parses all our attributes
 *
 * @param {Object} attributes
 * @return {Object}
 */
function parseAttributes(attributes) {
  // Parse styles
  if (attributes.style) {
    if (typeof attributes.style === 'object') {
      styleStr = '';
      for (var k in styles) {
        var value = styles[k];
        styleStr += k + ':' + value + ';';
      }
      attributes.style = styleStr;
    }
  }
  // Parse classes
  if (attributes.class) {
    if (typeof attributes.class === 'array') {
      attributes.class = attributes.class.join(' ');
    }
  }
  // Parse attributes
  if (attributes.data) {
    if (typeof attributes.data === 'object') {
      for (var k in attributes.data) {
        attributes['data-' + k] = attributes.data[k];
      }
    }
    delete attributes.data;
  }

  return attributes;
}

/**
 * Parses all our events
 *
 * @param {Object} attributes
 * @return {Object}
 */
function parseEvents(attributes) {
  var result = {};
  if(attributes.hasOwnProperty("events")) {
    for(var k in attributes.events) {
      currentEv = events[k];
      cb = attributes.events[k];
      result[currentEv] = cb;
      delete attributes.events[k];
    }
    delete attributes.events;
  }
  return result;
}

/**
 * Create a unique identifier for a ndoe
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 * @return {Integer}
 */

function uId() {
  var arr = [];
  var rand = Math.random()*0xffffffff|0;
  var rando = Math.random()*0xffffffff|0;

  for (var i = 0; i < 256; i++) {
    arr[i] = (i < 16 ? '0' : '' ) + (i).toString(16);
  }

  return arr[rand>>16&0xff] + arr[rand>>24&0xff] + arr[rando&0xff] + arr[rando>>8&0xff];
}