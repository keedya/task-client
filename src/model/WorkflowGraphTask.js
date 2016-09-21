// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('WorkflowGraphTask', ['jquery'],
    function($) {
      return WorkflowGraphTask;
   });
}


var WorkflowGraphTask = function WorkflowGraphTask() { 
  var self = this;
  
  /**
   * datatype: Boolean
   **/
  self.ignoreFailure = null;
  
  /**
   * datatype: String
   **/
  self.label = null;
  
  /**
   * datatype: String
   **/
  self.taskName = null;
  
  /**
   * datatype: Object
   **/
  self.waitOn = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.ignoreFailure = data.ignoreFailure;
    
    self.label = data.label;
    
    self.taskName = data.taskName;
    
    self.waitOn = data.waitOn;
    
  }

  
  /**
   * @return {Boolean}
   **/
  self.getIgnoreFailure = function() {
    return self.ignoreFailure;
  }

  /**
   * @param {Boolean} ignoreFailure
   **/
  self.setIgnoreFailure = function (ignoreFailure) {
    self.ignoreFailure = ignoreFailure;
  }
  
  /**
   * @return {String}
   **/
  self.getLabel = function() {
    return self.label;
  }

  /**
   * @param {String} label
   **/
  self.setLabel = function (label) {
    self.label = label;
  }
  
  /**
   * @return {String}
   **/
  self.getTaskName = function() {
    return self.taskName;
  }

  /**
   * @param {String} taskName
   **/
  self.setTaskName = function (taskName) {
    self.taskName = taskName;
  }
  
  /**
   * @return {Object}
   **/
  self.getWaitOn = function() {
    return self.waitOn;
  }

  /**
   * @param {Object} waitOn
   **/
  self.setWaitOn = function (waitOn) {
    self.waitOn = waitOn;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = WorkflowGraphTask;
}
