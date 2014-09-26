#!/usr/bin/env node

var myfib = require('../');
var seqNo = Number(process.argv[2]);

if(isNaN(seqNo)) {
	return console.error('\nInvalid sequence number provided, try:\nmyfib 30\n');
}

console.log('The result is', myfib(seqNo));