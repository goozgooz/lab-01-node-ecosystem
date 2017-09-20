'use strict';

const math = require('../lib/arithmetic.js');
const expect = require('expect');

describe('math.add', function(){
  it('should return the sum of two numbers', function(){
    expect(math.add(1,2)).toEqual(3);
  });
});

describe('math.add', function(){
  it('should return null if one of the arguments isnt a number', function(){
    expect(math.add(1,'poop')).toBe(null);
  });
});

describe('math.subtract', function(){
  it('should return the difference of two numbers', function(){
    expect(math.subtract(5,2)).toEqual(3);
  });
});

describe('math.subtract', function(){
  it('should return null if one of the arguments isnt a number', function(){
    expect(math.subtract(1,'poop')).toBe(null);
  });
});
