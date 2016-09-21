// require files in Node.js environment
var $, InlineResponse200, Error, WorkflowGraph;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  InlineResponse200 = require('../model/InlineResponse200.js');
  Error = require('../model/Error.js');
  WorkflowGraph = require('../model/WorkflowGraph.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'InlineResponse200', 'Error', 'WorkflowGraph'], function($, InlineResponse200, Error, WorkflowGraph) {
        return GraphsApi;
	 });
}

var GraphsApi = function GraphsApi() {
	var self = this;
  
  
  /**
   * Get list of workflow graphs
   * Get a list of all workflow graphs available to run.
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGetGraphs = function(callback) {
    var postBody = null;
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0:9005';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/graphs", "\\{format\\}","json"));

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
   * Put a graph
   * Create or modify a workflow graph in the graph library.
   * @param {WorkflowGraph}  body The workflow graph properties
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsPutGraphs = function(body, callback) {
    var postBody = JSON.stringify(body);
    var postBinaryBody = null;
    
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/graphs", "\\{format\\}","json"));

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
   * Get a workflow graph
   * Get the workflow graph with the specified value of the injectableName property.
   * @param {String}  injectableName The workflow graph injectable name
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsGetGraphsByName = function(injectableName, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'injectableName' is set
     if (injectableName == null) {
        //throw new ApiException(400, "Missing the required parameter 'injectableName' when calling workflowsGetGraphsByName");
        var errorRequiredMsg = "Missing the required parameter 'injectableName' when calling workflowsGetGraphsByName";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/graphs/{injectableName}", "\\{format\\}","json")
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
   * Delete a workflow graph
   * Delete the workflow graph with the specified value of the injectableName property.
   * @param {String}  injectableName The workflow graph injectable name
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.workflowsDeleteGraphsByName = function(injectableName, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'injectableName' is set
     if (injectableName == null) {
        //throw new ApiException(400, "Missing the required parameter 'injectableName' when calling workflowsDeleteGraphsByName");
        var errorRequiredMsg = "Missing the required parameter 'injectableName' when calling workflowsDeleteGraphsByName";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'http://localhost/api/2.0';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/workflows/graphs/{injectableName}", "\\{format\\}","json")
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
  module.exports = GraphsApi;
}
