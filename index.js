var Listeners = require('ear')
var dotProp = require('dot-prop')
var extend = require('xtend')
var traverse = require('traverse')

module.exports = State

function State (initialState) {
  this.__ImmutableState__ = extend({}, initialState)
  this.listeners = Listeners()
}

State.prototype.addListener = function (listener) {
  return this.listeners.add(listener) // Returns function to removeListener()
}

State.prototype.set = function (key, value) {
  if (value) {
    // If a key and value were provided we use dot-prop
    dotProp.set(this.__ImmutableState__, key, value)
  } else {
    // If only a value was provided we overwrite state
    this.__ImmutableState__ = traverse.clone(key)
  }
  this.listeners(this.get())
}

State.prototype.get = function () {
  return traverse.clone(this.__ImmutableState__)
}

State.prototype.del = function (key) {
  dotProp.delete(this.__ImmutableState__, key)
  this.listeners(this.get())
}
