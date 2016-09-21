// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('GenericObj', ['jquery'],
    function($) {
      return GenericObj;
   });
}


var GenericObj = function GenericObj() { 
  var self = this;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
  }

  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = GenericObj;
}
