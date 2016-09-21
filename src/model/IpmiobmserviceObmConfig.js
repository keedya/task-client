// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('IpmiobmserviceObmConfig', ['jquery'],
    function($) {
      return IpmiobmserviceObmConfig;
   });
}


var IpmiobmserviceObmConfig = function IpmiobmserviceObmConfig() { 
  var self = this;
  
  /**
   * BMC address
   * datatype: String
   **/
  self.host = null;
  
  /**
   * IPMI username
   * datatype: String
   **/
  self.user = null;
  
  /**
   * IPMI password
   * datatype: String
   **/
  self.password = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.host = data.host;
    
    self.user = data.user;
    
    self.password = data.password;
    
  }

  
  /**
   * get BMC address
   * @return {String}
   **/
  self.getHost = function() {
    return self.host;
  }

  /**
   * set BMC address
   * @param {String} host
   **/
  self.setHost = function (host) {
    self.host = host;
  }
  
  /**
   * get IPMI username
   * @return {String}
   **/
  self.getUser = function() {
    return self.user;
  }

  /**
   * set IPMI username
   * @param {String} user
   **/
  self.setUser = function (user) {
    self.user = user;
  }
  
  /**
   * get IPMI password
   * @return {String}
   **/
  self.getPassword = function() {
    return self.password;
  }

  /**
   * set IPMI password
   * @param {String} password
   **/
  self.setPassword = function (password) {
    self.password = password;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = IpmiobmserviceObmConfig;
}
