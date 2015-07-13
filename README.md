solid-state [![npm version](https://badge.fury.io/js/solid-state.svg)](http://badge.fury.io/js/solid-state) [![Build Status](https://travis-ci.org/chinedufn/solid-state.svg?branch=master)](https://travis-ci.org/chinedufn/solid-state)
===========

> Triggers listener functions when your state changes

## Install

```
$ npm install --save solid-state
```

## Usage

```js
var SS = require('solid-state')

var AppState = new SS()

// Receives a clone of the current state
AppState.addListener(function (currentState) {
  someRenderFunction(currentState)
})

// someRenderFunction gets called with {level: 9001}
AppState.set('level', 9001)

// someRenderFunction gets called with {level: 9001, {nested: {property: 'foo'}}
AppState.set('nested.property', 'foo')

// {level: 9001, {nested: {property: 'foo'}}
console.log(AppState.get())
```

## License

(c) 2015 Chinedu Francis Nwafili. MIT License
