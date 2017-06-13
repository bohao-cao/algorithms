var should = require('should');

var tb = require('./tests_base');
var hs = require('./heap_sort');

tb.testCases.push([16,4,10,14,7,9,3,2,8,1]);

tb.testCases.forEach(test=>{
      var input = test.slice(0,test.length);
      try{
         input = hs(input);
      }
      catch(e){
            console.error(input);   
      }
      
      input.should.be.eql(test.sort(tb.sortNumbers));   
});

process.exit(0);