'use strict';


module.exports = name => {
  return typeof name != 'string' ? null : `hello ${name}`;
};
