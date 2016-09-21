// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}



//export module
if ( typeof define === "function" && define.amd ) {     
	define('CommandEnum', ['jquery'], function($) {
        return CommandEnum;
	 });
}

var CommandEnum = function CommandEnum() {
	var self = this;
	

	/**
	 * @const 
	 */ 
	self.CANCEL = "cancel";

}


//export module
if ( typeof define === "function" && define.amd ) {
  define('Action', ['jquery'],
    function($) {
      return Action;
   });
}

/**
 * Action object
 **/
var Action = function Action(command) { 
  var self = this;
  
  /**
   * Command to execute
   * datatype: CommandEnum
   * required
   **/
  self.command = command;
  
  /**
   * Command options object
   * datatype: Object
   **/
  self.options = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.command = data.command;
    
    self.options = data.options;
    
  }

  
  /**
   * get Command to execute
   * @return {CommandEnum}
   **/
  self.getCommand = function() {
    return self.command;
  }

  /**
   * set Command to execute
   * @param {CommandEnum} command
   **/
  self.setCommand = function (command) {
    self.command = command;
  }
  
  /**
   * get Command options object
   * @return {Object}
   **/
  self.getOptions = function() {
    return self.options;
  }

  /**
   * set Command options object
   * @param {Object} options
   **/
  self.setOptions = function (options) {
    self.options = options;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Action;
}
