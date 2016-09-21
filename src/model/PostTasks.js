// require files in Node.js environment
var WorkflowTask;
if (typeof module === 'object' && module.exports) {
  
  WorkflowTask = require('./WorkflowTask.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostTasks', ['jquery''Array'],
    function($Array) {
      return PostTasks;
   });
}


var PostTasks = function PostTasks() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.identifier = null;
  
  /**
   * datatype: Array
   **/
  self.tasks = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.identifier = data.identifier;
    
    self.tasks = new Array();
    
  }

  
  /**
   * @return {String}
   **/
  self.getIdentifier = function() {
    return self.identifier;
  }

  /**
   * @param {String} identifier
   **/
  self.setIdentifier = function (identifier) {
    self.identifier = identifier;
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
  module.exports = PostTasks;
}
