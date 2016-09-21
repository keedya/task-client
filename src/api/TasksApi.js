// require files in Node.js environment
var $, VersionsResponse, ErrorResponse, InlineResponse200, Error, PostTasks, WorkflowTask;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  VersionsResponse = require('../model/VersionsResponse.js');
  ErrorResponse = require('../model/ErrorResponse.js');
  InlineResponse200 = require('../model/InlineResponse200.js');
  Error = require('../model/Error.js');
  PostTasks = require('../model/PostTasks.js');
  WorkflowTask = require('../model/WorkflowTask.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'VersionsResponse', 'ErrorResponse', 'InlineResponse200', 'Error', 'PostTasks', 'WorkflowTask'], function($, VersionsResponse, ErrorResponse, InlineResponse200, Error, PostTasks, WorkflowTask) {
        return TasksApi;
	 });
}

var TasksApi = function TasksApi() {
	var self = this;
  
  
  /**
   * Get tasks bootstrap.js
   * Used internally by the system - get tasks bootstrap.js
   * @param {String}  macAddress Query string containing the mac address
   * @param {function} callback the callback function
   * @return VersionsResponse
   */
  self.getBootstrap = function(macAddress, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0:9005';
     // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/tasks/bootstrap.js", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.macAddress = macAddress;
    
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns VersionsResponse
        */
      
      var myResponse = new VersionsResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Get a task
   * Get the specified task.
   * @param {String}  identifier The task identifier
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.getTasksById = function(identifier, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'identifier' is set
     if (identifier == null) {
        //throw new ApiException(400, "Missing the required parameter 'identifier' when calling getTasksById");
        var errorRequiredMsg = "Missing the required parameter 'identifier' when calling getTasksById";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/tasks/{identifier}", "\\{format\\}","json")
, "\\{" + "identifier" + "\\}", encodeURIComponent(identifier.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Post a task
   * Start the specified task
   * @param {String}  identifier The task identifier
   * @param {PostTasks}  body The obm settings to apply
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.postTaskById = function(identifier, body, callback) {
    var postBody = JSON.stringify(body);
    var postBinaryBody = null;
    
     // verify the required parameter 'identifier' is set
     if (identifier == null) {
        //throw new ApiException(400, "Missing the required parameter 'identifier' when calling postTaskById");
        var errorRequiredMsg = "Missing the required parameter 'identifier' when calling postTaskById";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'body' is set
     if (body == null) {
        //throw new ApiException(400, "Missing the required parameter 'body' when calling postTaskById");
        var errorRequiredMsg = "Missing the required parameter 'body' when calling postTaskById";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/tasks/{identifier}", "\\{format\\}","json")
, "\\{" + "identifier" + "\\}", encodeURIComponent(identifier.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "POST", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Get list of workflow tasks
   * Get a list of all workflow tasks that can be added to a workflow.
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGetAllTasks = function(callback) {
    var postBody = null;
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/tasks", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Put a workflow task
   * Create or update a workflow task in the library of tasks.
   * @param {WorkflowTask}  body The workflow task properties
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsPutTask = function(body, callback) {
    var postBody = JSON.stringify(body);
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/tasks", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "PUT", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Get a workflow task
   * Get the task with the specified value of the injectableName property.
   * @param {String}  injectableName The task injectable name
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGetTasksByName = function(injectableName, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'injectableName' is set
     if (injectableName == null) {
        //throw new ApiException(400, "Missing the required parameter 'injectableName' when calling workflowsGetTasksByName");
        var errorRequiredMsg = "Missing the required parameter 'injectableName' when calling workflowsGetTasksByName";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/tasks/{injectableName}", "\\{format\\}","json")
, "\\{" + "injectableName" + "\\}", encodeURIComponent(injectableName.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * Delete a workflow task
   * Delete the workflow task with the specified value of the injectableName property.
   * @param {String}  injectableName The task injectable name
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsDeleteTasksByName = function(injectableName, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'injectableName' is set
     if (injectableName == null) {
        //throw new ApiException(400, "Missing the required parameter 'injectableName' when calling workflowsDeleteTasksByName");
        var errorRequiredMsg = "Missing the required parameter 'injectableName' when calling workflowsDeleteTasksByName";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/tasks/{injectableName}", "\\{format\\}","json")
, "\\{" + "injectableName" + "\\}", encodeURIComponent(injectableName.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    
    

    path += createQueryString(queryParams);

    var options = {type: "DELETE", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  

 	function replaceAll (haystack, needle, replace) {
		var result= haystack;
		if (needle !=null && replace!=null) {
			result= haystack.replace(new RegExp(needle, 'g'), replace);
		}
		return result;
	}

 	function createQueryString (queryParams) {
		var queryString ='';
		var i = 0;
		for (var queryParamName in queryParams) {
			if (i==0) {
				queryString += '?' ;
			} else {
				queryString += '&' ;
			}
			
			queryString +=  queryParamName + '=' + encodeURIComponent(queryParams[queryParamName]);
			i++;
		}
		
		return queryString;
	}
}

// export module for Node.js
if (typeof module === 'object' && module.exports) {
  module.exports = TasksApi;
}
