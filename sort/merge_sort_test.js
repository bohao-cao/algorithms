var should = require('should');

var tb = require('./tests_base');
var merge = require('./merge_sort');

tb.testCases.forEach(test=>{
      var input = test.slice(0,test.length);
      try{
         merge(input, 0 , test.length); 
      }
      catch(e){
            console.error(input);   
      }
      
      input.should.be.eql(test.sort(tb.sortNumbers));   
});

process.exit(0);