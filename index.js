var Immutable = require('immutable')
var Listeners = require('ear')

module.exports = State

function State () {
  this.currentState = {}
  this._map = Immutable.Map({})
  this.listeners = Listeners()
}

State.prototype.addListener = function (listener) {
  if (!typeof listener === 'function') {
    throw new TypeError('Listener is not a function')
  }
  return this.listeners.add(listener)
}

State.prototype.set = function (key, value) {
  var oldImmutable = this._map
  var newImmutable = oldImmutable.set(key, value)
  if (newImmutable === oldImmutable) return

  this._map = newImmutable
  this.currentState = newImmutable.toJS()

  this.listeners(this.currentState)
}
