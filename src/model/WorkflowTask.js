// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('WorkflowTask', ['jquery'],
    function($) {
      return WorkflowTask;
   });
}


var WorkflowTask = function WorkflowTask() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.friendlyName = null;
  
  /**
   * datatype: String
   **/
  self.implementsTask = null;
  
  /**
   * datatype: String
   **/
  self.injectableName = null;
  
  /**
   * datatype: Object
   **/
  self.options = null;
  
  /**
   * datatype: Object
   **/
  self.properties = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.friendlyName = data.friendlyName;
    
    self.implementsTask = data.implementsTask;
    
    self.injectableName = data.injectableName;
    
    self.options = data.options;
    
    self.properties = data.properties;
    
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
  self.getImplementsTask = function() {
    return self.implementsTask;
  }

  /**
   * @param {String} implementsTask
   **/
  self.setImplementsTask = function (implementsTask) {
    self.implementsTask = implementsTask;
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
   * @return {Object}
   **/
  self.getProperties = function() {
    return self.properties;
  }

  /**
   * @param {Object} properties
   **/
  self.setProperties = function (properties) {
    self.properties = properties;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = WorkflowTask;
}
