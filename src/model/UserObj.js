// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('UserObj', ['jquery'],
    function($) {
      return UserObj;
   });
}


var UserObj = function UserObj() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.password = null;
  
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
    
    self.password = data.password;
    
    self.role = data.role;
    
    self.username = data.username;
    
  }

  
  /**
   * @return {String}
   **/
  self.getPassword = function() {
    return self.password;
  }

  /**
   * @param {String} password
   **/
  self.setPassword = function (password) {
    self.password = password;
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
  module.exports = UserObj;
}
