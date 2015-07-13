var Listeners = require('ear')
var dotProp = require('dot-prop')
var traverse = require('traverse')

module.exports = State

function State () {
  this.__ImmutableState__ = {}
  this.listeners = Listeners()
}

State.prototype.addListener = function (listener) {
  return this.listeners.add(listener) // Returns function to removeListener()
}

State.prototype.set = function (key, value) {
  var oldImmutable = this.__ImmutableState__
  var newImmutable = traverse.clone(oldImmutable)

  dotProp.set(newImmutable, key, value)

  this.__ImmutableState__ = newImmutable

  this.listeners(this.get())
}

State.prototype.get = function () {
  return traverse.clone(this.__ImmutableState__)
}
