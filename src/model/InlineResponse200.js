// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('InlineResponse200', ['jquery'],
    function($) {
      return InlineResponse200;
   });
}


var InlineResponse200 = function InlineResponse200() { 
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
  module.exports = InlineResponse200;
}
