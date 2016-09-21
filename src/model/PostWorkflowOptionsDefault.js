// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostWorkflowOptionsDefault', ['jquery'],
    function($) {
      return PostWorkflowOptionsDefault;
   });
}


var PostWorkflowOptionsDefault = function PostWorkflowOptionsDefault() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.nodeId = null;
  
  /**
   * datatype: Object
   **/
  self.graphOptions = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.nodeId = data.nodeId;
    
    self.graphOptions = data.graphOptions;
    
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
   * @return {Object}
   **/
  self.getGraphOptions = function() {
    return self.graphOptions;
  }

  /**
   * @param {Object} graphOptions
   **/
  self.setGraphOptions = function (graphOptions) {
    self.graphOptions = graphOptions;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostWorkflowOptionsDefault;
}
