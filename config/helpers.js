/**
 * @author: @bneiluj
 */
var path = require('path');

// Helpers functions
var _root = path.resolve(_dirname, '..');
console.log('root directory:', root());

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
export.modules = {
  root: root
};
