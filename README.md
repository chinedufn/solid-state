solid-state [![npm version](https://badge.fury.io/js/solid-state.svg)](http://badge.fury.io/js/solid-state) [![Build Status](https://travis-ci.org/chinedufn/solid-state.svg?branch=master)](https://travis-ci.org/chinedufn/solid-state)
===========

> Triggers listener functions when your state changes

## Note

I use `solid-state` for demo's, prototypes and smaller applications that I don't plan to maintain. It's good for quickly
setting up functional reactive programming without needing a reducer library.

For real applications I use [minidux](https://github.com/freeman-lab/minidux)

## Install

```
$ npm install --save solid-state
```

## Usage

```js
var SS = require('solid-state')

var optionalInitialState = {}
var AppState = new SS(optionalInitialState)

// Called a function with a clone of the new state whenever state changes
var removeListener = AppState.addListener(function (currentState) {
  someRenderFunction(currentState)
})

// someRenderFunction gets called with {level: 9001}
AppState.set('level', 9001)

// someRenderFunction gets called with {level: 9001, {nested: {property: 'foo'}}
AppState.set('nested.property', 'foo')

AppState.set('will.get.deleted', true)
AppState.del('will');

// {level: 9001, {nested: {property: 'foo'}}
console.log(AppState.get())

// Overwrite the entire state by only providing a value
AppState.set({overwrite: 'state'})

// {overwrite: 'state'}
console.log(AppState.get())

// Stop listening for changes
removeListener()
```

## License

(c) 2015 Chinedu Francis Nwafili. MIT License
