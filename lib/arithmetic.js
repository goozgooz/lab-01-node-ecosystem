'use strict';

let math = module.export = {};

math.add = function(a,b){
  if(typeof a != 'number' || typeof b != 'number'){
    return null;
  }
  return a+b;
};

math.subtract = function(a,b){
  if(typeof a != 'number' || typeof b != 'number'){
    return null;
  }
  return a-b;
};
