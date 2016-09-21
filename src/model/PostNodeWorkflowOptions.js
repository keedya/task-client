// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PostNodeWorkflowOptions', ['jquery'],
    function($) {
      return PostNodeWorkflowOptions;
   });
}


var PostNodeWorkflowOptions = function PostNodeWorkflowOptions() { 
  var self = this;
  
  /**
   * datatype: Object
   **/
  self._default = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self._default = data.default;
    
  }

  
  /**
   * @return {Object}
   **/
  self.getDefault = function() {
    return self._default;
  }

  /**
   * @param {Object} _default
   **/
  self.setDefault = function (_default) {
    self._default = _default;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PostNodeWorkflowOptions;
}
