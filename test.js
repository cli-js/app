var test = require('tessed').namespace('app')
var app = require('.')

test('returns tree', function (t) {

  var tree = {key: 'value'}

  t.deepEqual(app(tree)(), [tree], 'tree as array')
  t.deepEqual(app([tree])(), [tree], 'flattened tree')
})
