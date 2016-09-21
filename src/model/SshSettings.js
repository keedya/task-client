// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('SshSettings', ['jquery'],
    function($) {
      return SshSettings;
   });
}

/**
 * SSH settings
 **/
var SshSettings = function SshSettings(host, user) { 
  var self = this;
  
  /**
   * datatype: String
   * required
   **/
  self.host = host;
  
  /**
   * datatype: String
   **/
  self.password = null;
  
  /**
   * datatype: String
   * required
   **/
  self.user = user;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.host = data.host;
    
    self.password = data.password;
    
    self.user = data.user;
    
  }

  
  /**
   * @return {String}
   **/
  self.getHost = function() {
    return self.host;
  }

  /**
   * @param {String} host
   **/
  self.setHost = function (host) {
    self.host = host;
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
  self.getUser = function() {
    return self.user;
  }

  /**
   * @param {String} user
   **/
  self.setUser = function (user) {
    self.user = user;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = SshSettings;
}
