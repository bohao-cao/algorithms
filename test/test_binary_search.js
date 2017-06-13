'use strict';

var should = require('should');
var f = require('./binary_search');

var nums = [1,3,5];
var target = 0;
f(nums,target).should.be.exactly(-1);
nums = [1,3,5];
target = 1;
f(nums,target).should.be.exactly(0);
nums = [1,3];
target = 3;
f(nums,target).should.be.exactly(1);
nums = [1,2,3,4,5];
target = 5;
f(nums,target).should.be.exactly(4);

console.log('done');