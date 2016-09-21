// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('GetUserObj', ['jquery'],
    function($) {
      return GetUserObj;
   });
}


var GetUserObj = function GetUserObj() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.role = null;
  
  /**
   * datatype: String
   **/
  self.username = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.role = data.role;
    
    self.username = data.username;
    
  }

  
  /**
   * @return {String}
   **/
  self.getRole = function() {
    return self.role;
  }

  /**
   * @param {String} role
   **/
  self.setRole = function (role) {
    self.role = role;
  }
  
  /**
   * @return {String}
   **/
  self.getUsername = function() {
    return self.username;
  }

  /**
   * @param {String} username
   **/
  self.setUsername = function (username) {
    self.username = username;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = GetUserObj;
}
