// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('RoleObj', ['jquery'],
    function($) {
      return RoleObj;
   });
}


var RoleObj = function RoleObj() { 
  var self = this;
  
  /**
   * datatype: Array
   **/
  self.privileges = [];
  
  /**
   * datatype: String
   **/
  self.role = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.privileges = new Array();
    
    self.role = data.role;
    
  }

  
  /**
   * @return {Array}
   **/
  self.getPrivileges = function() {
    return self.privileges;
  }

  /**
   * @param {Array} privileges
   **/
  self.setPrivileges = function (privileges) {
    self.privileges = privileges;
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
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = RoleObj;
}
