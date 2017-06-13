'use strict'

var should = require('should');
var f = require('./33_search_in_rotated_array');

var nums = [1,3,5];
var target = 0;
f(nums,target).should.be.exactly(-1);
nums = [1,3,5];
target = 1;
f(nums,target).should.be.exactly(0);
nums = [1,3];
target = 3;
f(nums,target).should.be.exactly(1);
nums = [3,1];
target = 1;
f(nums,target).should.be.exactly(1);

console.log('done');