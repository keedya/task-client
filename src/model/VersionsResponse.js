// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('VersionsResponse', ['jquery'],
    function($) {
      return VersionsResponse;
   });
}


var VersionsResponse = function VersionsResponse(message) { 
  var self = this;
  
  /**
   * datatype: String
   * required
   **/
  self.message = message;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.message = data.message;
    
  }

  
  /**
   * @return {String}
   **/
  self.getMessage = function() {
    return self.message;
  }

  /**
   * @param {String} message
   **/
  self.setMessage = function (message) {
    self.message = message;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = VersionsResponse;
}
