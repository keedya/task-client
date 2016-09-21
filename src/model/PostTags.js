// require files in Node.js environment
var TagRule;
if (typeof module === 'object' && module.exports) {
  
  TagRule = require('./TagRule.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostTags', ['jquery''Array'],
    function($Array) {
      return PostTags;
   });
}


var PostTags = function PostTags() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.name = null;
  
  /**
   * datatype: Array
   **/
  self.rules = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.name = data.name;
    
    self.rules = new Array();
    
  }

  
  /**
   * @return {String}
   **/
  self.getName = function() {
    return self.name;
  }

  /**
   * @param {String} name
   **/
  self.setName = function (name) {
    self.name = name;
  }
  
  /**
   * @return {Array}
   **/
  self.getRules = function() {
    return self.rules;
  }

  /**
   * @param {Array} rules
   **/
  self.setRules = function (rules) {
    self.rules = rules;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostTags;
}
