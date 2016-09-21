// require files in Node.js environment
var TagRule;
if (typeof module === 'object' && module.exports) {
  
  TagRule = require('./TagRule.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('Skus20SkusUpsert', ['jquery''Array'],
    function($Array) {
      return Skus20SkusUpsert;
   });
}

/**
 * A sku for RackHD
 **/
var Skus20SkusUpsert = function Skus20SkusUpsert() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.discoveryGraphName = null;
  
  /**
   * datatype: Object
   **/
  self.discoveryGraphOptions = null;
  
  /**
   * datatype: String
   **/
  self.name = null;
  
  /**
   * Possible Rules a Sku can use
   * datatype: Array
   **/
  self.rules = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.discoveryGraphName = data.discoveryGraphName;
    
    self.discoveryGraphOptions = data.discoveryGraphOptions;
    
    self.name = data.name;
    
    self.rules = new Array();
    
  }

  
  /**
   * @return {String}
   **/
  self.getDiscoveryGraphName = function() {
    return self.discoveryGraphName;
  }

  /**
   * @param {String} discoveryGraphName
   **/
  self.setDiscoveryGraphName = function (discoveryGraphName) {
    self.discoveryGraphName = discoveryGraphName;
  }
  
  /**
   * @return {Object}
   **/
  self.getDiscoveryGraphOptions = function() {
    return self.discoveryGraphOptions;
  }

  /**
   * @param {Object} discoveryGraphOptions
   **/
  self.setDiscoveryGraphOptions = function (discoveryGraphOptions) {
    self.discoveryGraphOptions = discoveryGraphOptions;
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
   * get Possible Rules a Sku can use
   * @return {Array}
   **/
  self.getRules = function() {
    return self.rules;
  }

  /**
   * set Possible Rules a Sku can use
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
  module.exports = Skus20SkusUpsert;
}
