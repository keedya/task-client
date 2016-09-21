// require files in Node.js environment
var $, InlineResponse200, Error, PostWorkflow, Action;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  InlineResponse200 = require('../model/InlineResponse200.js');
  Error = require('../model/Error.js');
  PostWorkflow = require('../model/PostWorkflow.js');
  Action = require('../model/Action.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'InlineResponse200', 'Error', 'PostWorkflow', 'Action'], function($, InlineResponse200, Error, PostWorkflow, Action) {
        return WorkflowsApi;
	 });
}

var WorkflowsApi = function WorkflowsApi() {
	var self = this;
  
  
  /**
   * Get a list of workflow instances
   * Get list workflow that have been run, or are currently running.
   * @param {Boolean}  active Query string to search for specific workflow properties
   * @param {Integer}  skip Query string specifying properties to search for
   * @param {Integer}  top Query string specifying properties to search for
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGet = function(active, skip, top, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0:9005';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.active = active;
    
    queryParams.$skip = skip;
    
    queryParams.$top = top;
    
    
    

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
   * Run a workflow
   * Run a workflow by specifying a workflow graph injectable name.\nThe workflow is not associated with a node.
   * @param {PostWorkflow}  body The body must contain the name property with the\nvalue set to the injectable name of the workflow\ngraph to run
   * @param {String}  name Optionally specify the injectable name of the workflow graph to run
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsPost = function(body, name, callback) {
    var postBody = JSON.stringify(body);
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.name = name;
    
    
    

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
   * Get a workflow
   * Get the workflow with the specified instance identifier.
   * @param {String}  identifier The workflow instance identifier
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGetByInstanceId = function(identifier, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'identifier' is set
     if (identifier == null) {
        //throw new ApiException(400, "Missing the required parameter 'identifier' when calling workflowsGetByInstanceId");
        var errorRequiredMsg = "Missing the required parameter 'identifier' when calling workflowsGetByInstanceId";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/{identifier}", "\\{format\\}","json")
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
   * Delete a workflow
   * Delete the workflow with the specified instance identifier.
   * @param {String}  identifier The workflow instance identifier
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsDeleteByInstanceId = function(identifier, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'identifier' is set
     if (identifier == null) {
        //throw new ApiException(400, "Missing the required parameter 'identifier' when calling workflowsDeleteByInstanceId");
        var errorRequiredMsg = "Missing the required parameter 'identifier' when calling workflowsDeleteByInstanceId";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/{identifier}", "\\{format\\}","json")
, "\\{" + "identifier" + "\\}", encodeURIComponent(identifier.toString()));

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
  
  /**
   * Perform an action on a workflow
   * Perform the specified action on the workflow with the specified\ninstance identifier. Currently, the cancel action is supported.
   * @param {String}  identifier The workflow instance identifier
   * @param {Action}  action The action property with the value of the desired action
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsAction = function(identifier, action, callback) {
    var postBody = JSON.stringify(action);
    var postBinaryBody = null;
    
     // verify the required parameter 'identifier' is set
     if (identifier == null) {
        //throw new ApiException(400, "Missing the required parameter 'identifier' when calling workflowsAction");
        var errorRequiredMsg = "Missing the required parameter 'identifier' when calling workflowsAction";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'action' is set
     if (action == null) {
        //throw new ApiException(400, "Missing the required parameter 'action' when calling workflowsAction");
        var errorRequiredMsg = "Missing the required parameter 'action' when calling workflowsAction";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/{identifier}/action", "\\{format\\}","json")
, "\\{" + "identifier" + "\\}", encodeURIComponent(identifier.toString()));

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
  module.exports = WorkflowsApi;
}
