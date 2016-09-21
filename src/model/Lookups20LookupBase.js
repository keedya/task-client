// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('Lookups20LookupBase', ['jquery'],
    function($) {
      return Lookups20LookupBase;
   });
}

/**
 * A lookup record
 **/
var Lookups20LookupBase = function Lookups20LookupBase() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.ipAddress = null;
  
  /**
   * datatype: String
   **/
  self.macAddress = null;
  
  /**
   * datatype: String
   **/
  self.node = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.ipAddress = data.ipAddress;
    
    self.macAddress = data.macAddress;
    
    self.node = data.node;
    
  }

  
  /**
   * @return {String}
   **/
  self.getIpAddress = function() {
    return self.ipAddress;
  }

  /**
   * @param {String} ipAddress
   **/
  self.setIpAddress = function (ipAddress) {
    self.ipAddress = ipAddress;
  }
  
  /**
   * @return {String}
   **/
  self.getMacAddress = function() {
    return self.macAddress;
  }

  /**
   * @param {String} macAddress
   **/
  self.setMacAddress = function (macAddress) {
    self.macAddress = macAddress;
  }
  
  /**
   * @return {String}
   **/
  self.getNode = function() {
    return self.node;
  }

  /**
   * @param {String} node
   **/
  self.setNode = function (node) {
    self.node = node;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Lookups20LookupBase;
}
