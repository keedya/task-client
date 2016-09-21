// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('Error', ['jquery'],
    function($) {
      return Error;
   });
}


var Error = function Error() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.code = null;
  
  /**
   * datatype: String
   **/
  self.fields = null;
  
  /**
   * datatype: String
   **/
  self.message = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.code = data.code;
    
    self.fields = data.fields;
    
    self.message = data.message;
    
  }

  
  /**
   * @return {Integer}
   **/
  self.getCode = function() {
    return self.code;
  }

  /**
   * @param {Integer} code
   **/
  self.setCode = function (code) {
    self.code = code;
  }
  
  /**
   * @return {String}
   **/
  self.getFields = function() {
    return self.fields;
  }

  /**
   * @param {String} fields
   **/
  self.setFields = function (fields) {
    self.fields = fields;
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
  module.exports = Error;
}
