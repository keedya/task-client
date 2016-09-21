// require files in Node.js environment
var PostWorkflowOptionsDefault;
if (typeof module === 'object' && module.exports) {
  
  PostWorkflowOptionsDefault = require('./PostWorkflowOptionsDefault.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostWorkflowOptions', ['jquery','PostWorkflowOptionsDefault'],
    function($PostWorkflowOptionsDefault) {
      return PostWorkflowOptions;
   });
}


var PostWorkflowOptions = function PostWorkflowOptions() { 
  var self = this;
  
  /**
   * datatype: PostWorkflowOptionsDefault
   **/
  self._default = new PostWorkflow_options_default();
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self._default.constructFromObject(data.default);
    
  }

  
  /**
   * @return {PostWorkflowOptionsDefault}
   **/
  self.getDefault = function() {
    return self._default;
  }

  /**
   * @param {PostWorkflowOptionsDefault} _default
   **/
  self.setDefault = function (_default) {
    self._default = _default;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostWorkflowOptions;
}
