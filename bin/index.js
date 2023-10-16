#!/usr/bin/env node

let myfib = require('../');
let seqNo = Number(process.argv[2]);

if(isNaN(seqNo)) {
	return console.error('\nInvalid sequence number provided, try:\nmyfib 30\n');
}

console.log('The result is', myfib(seqNo));