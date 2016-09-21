// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('NodesPostObmById', ['jquery'],
    function($) {
      return NodesPostObmById;
   });
}

/**
 * IPMI OBM settings
 **/
var NodesPostObmById = function NodesPostObmById(service, config) { 
  var self = this;
  
  /**
   * datatype: Object
   * required
   **/
  self.config = config;
  
  /**
   * datatype: String
   * required
   **/
  self.service = service;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.config = data.config;
    
    self.service = data.service;
    
  }

  
  /**
   * @return {Object}
   **/
  self.getConfig = function() {
    return self.config;
  }

  /**
   * @param {Object} config
   **/
  self.setConfig = function (config) {
    self.config = config;
  }
  
  /**
   * @return {String}
   **/
  self.getService = function() {
    return self.service;
  }

  /**
   * @param {String} service
   **/
  self.setService = function (service) {
    self.service = service;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = NodesPostObmById;
}
