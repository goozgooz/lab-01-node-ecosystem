'use strict';

let math = module.exports = {};

math.add = function(a,b){
  return (typeof a != 'number') || (typeof b != 'number') ? null : a+b;
};

math.subtract = function(a,b){
  return (typeof a != 'number') || (typeof b != 'number') ? null : a-b;
};
