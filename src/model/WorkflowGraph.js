// require files in Node.js environment
var WorkflowGraphTask;
if (typeof module === 'object' && module.exports) {
  
  WorkflowGraphTask = require('./WorkflowGraphTask.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('WorkflowGraph', ['jquery''Array'],
    function($Array) {
      return WorkflowGraph;
   });
}


var WorkflowGraph = function WorkflowGraph() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.friendlyName = null;
  
  /**
   * datatype: String
   **/
  self.injectableName = null;
  
  /**
   * datatype: Object
   **/
  self.options = null;
  
  /**
   * datatype: Array
   **/
  self.tasks = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.friendlyName = data.friendlyName;
    
    self.injectableName = data.injectableName;
    
    self.options = data.options;
    
    self.tasks = new Array();
    
  }

  
  /**
   * @return {String}
   **/
  self.getFriendlyName = function() {
    return self.friendlyName;
  }

  /**
   * @param {String} friendlyName
   **/
  self.setFriendlyName = function (friendlyName) {
    self.friendlyName = friendlyName;
  }
  
  /**
   * @return {String}
   **/
  self.getInjectableName = function() {
    return self.injectableName;
  }

  /**
   * @param {String} injectableName
   **/
  self.setInjectableName = function (injectableName) {
    self.injectableName = injectableName;
  }
  
  /**
   * @return {Object}
   **/
  self.getOptions = function() {
    return self.options;
  }

  /**
   * @param {Object} options
   **/
  self.setOptions = function (options) {
    self.options = options;
  }
  
  /**
   * @return {Array}
   **/
  self.getTasks = function() {
    return self.tasks;
  }

  /**
   * @param {Array} tasks
   **/
  self.setTasks = function (tasks) {
    self.tasks = tasks;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = WorkflowGraph;
}
