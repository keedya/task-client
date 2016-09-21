// require files in Node.js environment
var IpmiobmserviceObmConfig;
if (typeof module === 'object' && module.exports) {
  
  IpmiobmserviceObmConfig = require('./IpmiobmserviceObmConfig.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('IpmiObmServiceObm', ['jquery', 'IpmiobmserviceObmConfig'],
    function($, IpmiobmserviceObmConfig) {
      return IpmiObmServiceObm;
   });
}

/**
 * OBM settings
 **/
var IpmiObmServiceObm = function IpmiObmServiceObm(nodeId, service) { 
  var self = this;
  
  /**
   * datatype: IpmiobmserviceObmConfig
   **/
  self.config = new ipmiobmservice_Obm_config();
  
  /**
   * datatype: String
   * required
   **/
  self.nodeId = nodeId;
  
  /**
   * datatype: String
   * required
   **/
  self.service = service;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.config.constructFromObject(data.config);
    
    self.nodeId = data.nodeId;
    
    self.service = data.service;
    
  }

  
  /**
   * @return {IpmiobmserviceObmConfig}
   **/
  self.getConfig = function() {
    return self.config;
  }

  /**
   * @param {IpmiobmserviceObmConfig} config
   **/
  self.setConfig = function (config) {
    self.config = config;
  }
  
  /**
   * @return {String}
   **/
  self.getNodeId = function() {
    return self.nodeId;
  }

  /**
   * @param {String} nodeId
   **/
  self.setNodeId = function (nodeId) {
    self.nodeId = nodeId;
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
  module.exports = IpmiObmServiceObm;
}
