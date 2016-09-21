// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ObmLed', ['jquery'],
    function($) {
      return ObmLed;
   });
}


var ObmLed = function ObmLed() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.nodeId = null;
  
  /**
   * datatype: Boolean
   **/
  self.value = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.nodeId = data.nodeId;
    
    self.value = data.value;
    
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
   * @return {Boolean}
   **/
  self.getValue = function() {
    return self.value;
  }

  /**
   * @param {Boolean} value
   **/
  self.setValue = function (value) {
    self.value = value;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ObmLed;
}
