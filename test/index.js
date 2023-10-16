let assert = require('assert');
let myfib = require('../');

assert.equal(myfib(0), 0);
assert.equal(myfib(1), 1);
assert.equal(myfib(2), 1);
assert.equal(myfib(3), 2);
assert.equal(myfib(4), 3);
assert.equal(myfib(5), 5);
assert.equal(myfib(6), 8);
assert.equal(myfib(7), 13);
assert.equal(myfib(8), 21);
assert.equal(myfib(9), 34);
assert.equal(myfib(10), 55);
assert.equal(myfib(11), 89);
assert.equal(myfib(12), 144);

