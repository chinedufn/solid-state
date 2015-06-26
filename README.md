solid-state [![Build Status](https://travis-ci.org/chinedufn/solid-state.svg?branch=master)](https://travis-ci.org/chinedufn/solid-state)
===========

> Confidently maintain state and react to changes

## Install

```
$ npm install --save solid-state
```

## Usage

```js
var SS = require('solid-state')

var AppState = new SS()

// Triggered whenever state changes
AppState.consumeOldState = function (oldState) {
  someStateHistoryQueue.push(oldState)
}

AppState.addListener(function (currentState) {
  someRenderFunction(currentState)
})

AppState.set('level', 9001) // someRenderFunction gets called with {level: 9001}
AppState.set('foo', 'bar') // someRenderFunction gets called with {level: 9001, foo: 'bar'}

console.log(AppState.currentState) // {level: 9001, foo: 'bar'}
```

## License

(c) 2015 Chinedu Francis Nwafili. MIT License
