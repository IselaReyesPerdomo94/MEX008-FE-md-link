#!/usr/bin/env node

const [A, B, ...args] = process.argv;

console.log(args)
require('./index.js')()