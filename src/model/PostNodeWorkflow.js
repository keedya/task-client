// require files in Node.js environment
var PostNodeWorkflowOptions;
if (typeof module === 'object' && module.exports) {
  
  PostNodeWorkflowOptions = require('./PostNodeWorkflowOptions.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostNodeWorkflow', ['jquery''PostNodeWorkflowOptions'],
    function($PostNodeWorkflowOptions) {
      return PostNodeWorkflow;
   });
}


var PostNodeWorkflow = function PostNodeWorkflow() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.name = null;
  
  /**
   * datatype: PostNodeWorkflowOptions
   **/
  self.options = new post_node_workflow_options();
  
  
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
   * @return {PostNodeWorkflowOptions}
   **/
  self.getOptions = function() {
    return self.options;
  }

  /**
   * @param {PostNodeWorkflowOptions} options
   **/
  self.setOptions = function (options) {
    self.options = options;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostNodeWorkflow;
}
