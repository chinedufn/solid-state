var Immutable = require('immutable')

module.exports = State

function State () {
  this.currentState = {}
  this._map = Immutable.Map({})
  this.listeners = []
}

State.prototype.addListener = function (listener) {
  if (!typeof listener === 'function') {
    throw new TypeError('Listener is not a function')
  }
  this.listeners.push(listener)

  return function removeListener () {
    for (var i = 0; i < this.listeners.length; i++) {
      if (this.listeners[i] === listener) {
        this.listeners.splice(i, 1)
        break
      }
    }
  }
}

State.prototype.set = function (key, value) {
  var oldImmutable = this._map
  var newImmutable = oldImmutable.set(key, value)
  if (newImmutable === oldImmutable) return

  var oldState = oldImmutable.toJS()
  this.consumeOldState(oldState)

  this._map = newImmutable
  this.currentState = newImmutable.toJS()

  for (var i = 0; i < this.listeners.length; i++) {
    this.listeners[i](this.currentState)
  }
}

// Objects should overwrite this method
// [hmm.. not sure if this belongs..
// I encourage you to open an issue!]
State.prototype.consumeOldState = function noop (oldState) {
}
