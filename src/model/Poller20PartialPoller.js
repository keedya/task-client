// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}



//export module
if ( typeof define === "function" && define.amd ) {     
	define('TypeEnum', ['jquery'], function($) {
        return TypeEnum;
	 });
}

var TypeEnum = function TypeEnum() {
	var self = this;
	

	/**
	 * @const 
	 */ 
	self.IPMI = "ipmi",
	
	/**
	 * @const 
	 */ 
	self.SNMP = "snmp",
	
	/**
	 * @const 
	 */ 
	self.REDFISH = "redfish";

}


//export module
if ( typeof define === "function" && define.amd ) {
  define('Poller20PartialPoller', ['jquery'],
    function($) {
      return Poller20PartialPoller;
   });
}

/**
 * A poller for periodic collection of telemetry data
 **/
var Poller20PartialPoller = function Poller20PartialPoller() { 
  var self = this;
  
  /**
   * Poller configuration object
   * datatype: Object
   **/
  self.config = null;
  
  /**
   * Asserted if poller is paused
   * datatype: Boolean
   **/
  self.paused = null;
  
  /**
   * Interval at which poller will run
   * datatype: Number
   **/
  self.pollInterval = null;
  
  /**
   * Type of poller
   * datatype: TypeEnum
   **/
  self.type = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.config = data.config;
    
    self.paused = data.paused;
    
    self.pollInterval = data.pollInterval;
    
    self.type = data.type;
    
  }

  
  /**
   * get Poller configuration object
   * @return {Object}
   **/
  self.getConfig = function() {
    return self.config;
  }

  /**
   * set Poller configuration object
   * @param {Object} config
   **/
  self.setConfig = function (config) {
    self.config = config;
  }
  
  /**
   * get Asserted if poller is paused
   * @return {Boolean}
   **/
  self.getPaused = function() {
    return self.paused;
  }

  /**
   * set Asserted if poller is paused
   * @param {Boolean} paused
   **/
  self.setPaused = function (paused) {
    self.paused = paused;
  }
  
  /**
   * get Interval at which poller will run
   * @return {Number}
   **/
  self.getPollInterval = function() {
    return self.pollInterval;
  }

  /**
   * set Interval at which poller will run
   * @param {Number} pollInterval
   **/
  self.setPollInterval = function (pollInterval) {
    self.pollInterval = pollInterval;
  }
  
  /**
   * get Type of poller
   * @return {TypeEnum}
   **/
  self.getType = function() {
    return self.type;
  }

  /**
   * set Type of poller
   * @param {TypeEnum} type
   **/
  self.setType = function (type) {
    self.type = type;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Poller20PartialPoller;
}
