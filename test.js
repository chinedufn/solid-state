var test = require('tape')

var SS = require('./')

test('solid-state is a function', function (t) {
  t.equal(typeof SS, 'function')
  t.end()
})

test('acceots initial state', function (t) {
  t.plan(1)
  var solid = new SS({a: 1})

  t.deepEqual(solid.get(), {a: 1})
})

test('can be set', function (t) {
  t.plan(2)

  var solid = new SS()

  solid.set('a', 1)
  t.deepEqual(solid.get(), {a: 1})

  solid.set('b', [2, 3, 4])
  t.deepEqual(solid.get(), {a: 1, b: [2, 3, 4]})
})

test('can be deleted', function (t) {
  t.plan(1)

  var solid = new SS({a: 1, b: 2})
  solid.del('a')

  t.deepEqual(solid.get(), {b: 2})
})

test('reacts to changes', function (t) {
  t.plan(2)
  var count = 0

  var solid = new SS()

  solid.addListener(function (currentState) {
    if (count === 0) t.deepEqual(currentState, {a: 1})
    else t.deepEqual(currentState, {})
    count++
  })

  solid.set('a', 1)
  solid.del('a')
})

test('sets nested properties', function (t) {
  t.plan(1)

  var solid = new SS()
  solid.set('a.b', 1)
  t.deepEqual(solid.get(), {a: {b: 1}})
})

test('Overwrite entire state', function (t) {
  t.plan(1)

  var solid = new SS()
  solid.set({overwrite: 'entire state'})
  t.deepEqual(solid.get(), {overwrite: 'entire state'})
})

test('Does not maintain reference to passed in state var', function (t) {
  t.plan(1)

  var solid = new SS()
  var overwrite = {overwrite: true}
  solid.set(overwrite)
  overwrite.overwrite = false

  t.deepEqual(solid.get(), {overwrite: true})
})

test('Pass in `false` as value', function (t) {
  t.plan(1)

  var solid = new SS()
  solid.set('foo', false)
  t.deepEqual(solid.get(), {foo: false})
})

test('Accepts undefined and null as values', function (t) {
  t.plan(1)

  var solid = new SS()
  solid.set('foo', undefined)
  solid.set('bar', null)
  t.deepEqual(solid.get(), {foo: undefined, bar: null})
})
