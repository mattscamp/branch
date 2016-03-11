var Node = require('./lib/Node');

/**
 * Create vDOM
 *
 * Creates a tree of nodes to make a "virtual DOM"
 *
 * @param {String} tagName
 * @param {Object} attributes
 * @param {Array} children
 * @return {Node}
 */

function branch(tag, properties, children) {
  // Create our node
  var node, filtered = [];

  // Make sure our parameters are assigned
  properties = properties || {};
  children = children || [];

  // Clean our children and create our tree
  children = clean(children);
 
  return new Node(tag, properties, children);
}

/**
 * Cleans child nodes
 *
 * @param {Array} children
 * @return {Array}
 */

function clean(children) {
  filtered = [];
  for (var i = 0; i < children.length ; i++) {
    if (children[i] !== null || children[i] !== undefined) {
      children[i].index = i;
      filtered.push(children[i]);
    }
  }
  return filtered;
}
