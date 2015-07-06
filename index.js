var Immutable = require('immutable')
var Listeners = require('ear')

module.exports = State

function State () {
  this.currentState = {}
  this._map = Immutable.Map({})
  this.listeners = Listeners()
}

State.prototype.addListener = function (listener) {
  return this.listeners.add(listener) // Returns function to removeListener()
}

State.prototype.set = function (key, value) {
  var oldImmutable = this._map
  var newImmutable = oldImmutable.set(key, value)

  this._map = newImmutable
  this.currentState = newImmutable.toJS()

  this.listeners(this.currentState)
}
