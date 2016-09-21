// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('TagRule', ['jquery'],
    function($) {
      return TagRule;
   });
}


var TagRule = function TagRule(path) { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.contains = null;
  
  /**
   * datatype: String
   **/
  self.equals = null;
  
  /**
   * datatype: Number
   **/
  self.greaterThan = null;
  
  /**
   * datatype: Array
   **/
  self._in = [];
  
  /**
   * datatype: Number
   **/
  self.lessThan = null;
  
  /**
   * datatype: Number
   **/
  self.max = null;
  
  /**
   * datatype: Number
   **/
  self.min = null;
  
  /**
   * datatype: String
   **/
  self.notContains = null;
  
  /**
   * datatype: Array
   **/
  self.notIn = [];
  
  /**
   * datatype: String
   **/
  self.notRegex = null;
  
  /**
   * datatype: String
   * required
   **/
  self.path = path;
  
  /**
   * datatype: String
   **/
  self.regex = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.contains = data.contains;
    
    self.equals = data.equals;
    
    self.greaterThan = data.greaterThan;
    
    self._in = new Array();
    
    self.lessThan = data.lessThan;
    
    self.max = data.max;
    
    self.min = data.min;
    
    self.notContains = data.notContains;
    
    self.notIn = new Array();
    
    self.notRegex = data.notRegex;
    
    self.path = data.path;
    
    self.regex = data.regex;
    
  }

  
  /**
   * @return {String}
   **/
  self.getContains = function() {
    return self.contains;
  }

  /**
   * @param {String} contains
   **/
  self.setContains = function (contains) {
    self.contains = contains;
  }
  
  /**
   * @return {String}
   **/
  self.getEquals = function() {
    return self.equals;
  }

  /**
   * @param {String} equals
   **/
  self.setEquals = function (equals) {
    self.equals = equals;
  }
  
  /**
   * @return {Number}
   **/
  self.getGreaterThan = function() {
    return self.greaterThan;
  }

  /**
   * @param {Number} greaterThan
   **/
  self.setGreaterThan = function (greaterThan) {
    self.greaterThan = greaterThan;
  }
  
  /**
   * @return {Array}
   **/
  self.getIn = function() {
    return self._in;
  }

  /**
   * @param {Array} _in
   **/
  self.setIn = function (_in) {
    self._in = _in;
  }
  
  /**
   * @return {Number}
   **/
  self.getLessThan = function() {
    return self.lessThan;
  }

  /**
   * @param {Number} lessThan
   **/
  self.setLessThan = function (lessThan) {
    self.lessThan = lessThan;
  }
  
  /**
   * @return {Number}
   **/
  self.getMax = function() {
    return self.max;
  }

  /**
   * @param {Number} max
   **/
  self.setMax = function (max) {
    self.max = max;
  }
  
  /**
   * @return {Number}
   **/
  self.getMin = function() {
    return self.min;
  }

  /**
   * @param {Number} min
   **/
  self.setMin = function (min) {
    self.min = min;
  }
  
  /**
   * @return {String}
   **/
  self.getNotContains = function() {
    return self.notContains;
  }

  /**
   * @param {String} notContains
   **/
  self.setNotContains = function (notContains) {
    self.notContains = notContains;
  }
  
  /**
   * @return {Array}
   **/
  self.getNotIn = function() {
    return self.notIn;
  }

  /**
   * @param {Array} notIn
   **/
  self.setNotIn = function (notIn) {
    self.notIn = notIn;
  }
  
  /**
   * @return {String}
   **/
  self.getNotRegex = function() {
    return self.notRegex;
  }

  /**
   * @param {String} notRegex
   **/
  self.setNotRegex = function (notRegex) {
    self.notRegex = notRegex;
  }
  
  /**
   * @return {String}
   **/
  self.getPath = function() {
    return self.path;
  }

  /**
   * @param {String} path
   **/
  self.setPath = function (path) {
    self.path = path;
  }
  
  /**
   * @return {String}
   **/
  self.getRegex = function() {
    return self.regex;
  }

  /**
   * @param {String} regex
   **/
  self.setRegex = function (regex) {
    self.regex = regex;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = TagRule;
}
