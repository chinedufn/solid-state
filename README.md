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

// Called with the current state and the previous state
AppState.addListener(function (currentState, prevState) {
  someRenderFunction(currentState)
})

// someRenderFunction gets called with {level: 9001}
AppState.set('level', 9001)

// someRenderFunction gets called with {level: 9001, foo: 'bar'}
AppState.set('foo', 'bar') 

// {level: 9001, foo: 'bar'}
console.log(AppState.currentState) 
```

## License

(c) 2015 Chinedu Francis Nwafili. MIT License
