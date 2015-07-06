var test = require('tape')

var SS = require('./')

test('solid-state is a function', function (t) {
  t.equal(typeof SS, 'function')
  t.end()
})

test('can be set', function (t) {
  var solid = new SS()

  solid.set('a', 1)
  t.deepEqual(solid.currentState, {a: 1})

  solid.set('b', [2, 3, 4])
  t.deepEqual(solid.currentState, {a: 1, b: [2, 3, 4]})

  t.end()
})

test('reacts to changes', function (t) {
  t.plan(1)

  var solid = new SS()

  solid.addListener(function (currentState) {
    t.deepEqual(currentState, {a: 1})
  })

  solid.set('a', 1)
})
