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
	self.COMPUTE = "compute",
	
	/**
	 * @const 
	 */ 
	self.SWITCH = "switch",
	
	/**
	 * @const 
	 */ 
	self.DAE = "dae",
	
	/**
	 * @const 
	 */ 
	self.PDU = "pdu",
	
	/**
	 * @const 
	 */ 
	self.MGMT = "mgmt",
	
	/**
	 * @const 
	 */ 
	self.ENCLOSURE = "enclosure",
	
	/**
	 * @const 
	 */ 
	self.RACK = "rack";

}


//export module
if ( typeof define === "function" && define.amd ) {
  define('Node20PartialNode', ['jquery'],
    function($) {
      return Node20PartialNode;
   });
}

/**
 * Post a node in RackHD
 **/
var Node20PartialNode = function Node20PartialNode() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.autoDiscover = null;
  
  /**
   * Name of the node
   * datatype: String
   **/
  self.name = null;
  
  /**
   * Type of node
   * datatype: TypeEnum
   **/
  self.type = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.autoDiscover = data.autoDiscover;
    
    self.name = data.name;
    
    self.type = data.type;
    
  }

  
  /**
   * @return {String}
   **/
  self.getAutoDiscover = function() {
    return self.autoDiscover;
  }

  /**
   * @param {String} autoDiscover
   **/
  self.setAutoDiscover = function (autoDiscover) {
    self.autoDiscover = autoDiscover;
  }
  
  /**
   * get Name of the node
   * @return {String}
   **/
  self.getName = function() {
    return self.name;
  }

  /**
   * set Name of the node
   * @param {String} name
   **/
  self.setName = function (name) {
    self.name = name;
  }
  
  /**
   * get Type of node
   * @return {TypeEnum}
   **/
  self.getType = function() {
    return self.type;
  }

  /**
   * set Type of node
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
  module.exports = Node20PartialNode;
}
