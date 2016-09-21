// require files in Node.js environment
var PostWorkflowOptions;
if (typeof module === 'object' && module.exports) {
  
  PostWorkflowOptions = require('./PostWorkflowOptions.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostWorkflow', ['jquery','PostWorkflowOptions'],
    function($PostWorkflowOptions) {
      return PostWorkflow;
   });
}


var PostWorkflow = function PostWorkflow() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.name = null;
  
  /**
   * datatype: PostWorkflowOptions
   **/
  self.options = new PostWorkflow_options();
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.name = data.name;
    
    self.options.constructFromObject(data.options);
    
  }

  
  /**
   * @return {String}
   **/
  self.getName = function() {
    return self.name;
  }

  /**
   * @param {String} name
   **/
  self.setName = function (name) {
    self.name = name;
  }
  
  /**
   * @return {PostWorkflowOptions}
   **/
  self.getOptions = function() {
    return self.options;
  }

  /**
   * @param {PostWorkflowOptions} options
   **/
  self.setOptions = function (options) {
    self.options = options;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostWorkflow;
}
