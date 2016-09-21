/**
 * onTaskClient
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/WorkflowGraph'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/WorkflowGraph'));
  } else {
    // Browser globals (root is window)
    if (!root.OnTaskClient) {
      root.OnTaskClient = {};
    }
    root.OnTaskClient.GraphsApi = factory(root.OnTaskClient.ApiClient, root.OnTaskClient.Error, root.OnTaskClient.WorkflowGraph);
  }
}(this, function(ApiClient, Error, WorkflowGraph) {
  'use strict';

  /**
   * Graphs service.
   * @module api/GraphsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new GraphsApi. 
   * @alias module:api/GraphsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the workflowsDeleteGraphsByName operation.
     * @callback module:api/GraphsApi~workflowsDeleteGraphsByNameCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workflow graph 
     * Delete the workflow graph with the specified value of the injectableName property. 
     * @param {String} injectableName The workflow graph injectable name 
     * @param {module:api/GraphsApi~workflowsDeleteGraphsByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsDeleteGraphsByName = function(injectableName, callback) {
      var postBody = null;

      // verify the required parameter 'injectableName' is set
      if (injectableName == undefined || injectableName == null) {
        throw "Missing the required parameter 'injectableName' when calling workflowsDeleteGraphsByName";
      }


      var pathParams = {
        'injectableName': injectableName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/workflows/graphs/{injectableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsGetGraphs operation.
     * @callback module:api/GraphsApi~workflowsGetGraphsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of workflow graphs 
     * Get a list of all workflow graphs available to run. 
     * @param {module:api/GraphsApi~workflowsGetGraphsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsGetGraphs = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/workflows/graphs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsGetGraphsByName operation.
     * @callback module:api/GraphsApi~workflowsGetGraphsByNameCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workflow graph 
     * Get the workflow graph with the specified value of the injectableName property. 
     * @param {String} injectableName The workflow graph injectable name 
     * @param {module:api/GraphsApi~workflowsGetGraphsByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsGetGraphsByName = function(injectableName, callback) {
      var postBody = null;

      // verify the required parameter 'injectableName' is set
      if (injectableName == undefined || injectableName == null) {
        throw "Missing the required parameter 'injectableName' when calling workflowsGetGraphsByName";
      }


      var pathParams = {
        'injectableName': injectableName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/workflows/graphs/{injectableName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsPutGraphs operation.
     * @callback module:api/GraphsApi~workflowsPutGraphsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put a graph 
     * Create or modify a workflow graph in the graph library. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkflowGraph} opts.body The workflow graph properties
     * @param {module:api/GraphsApi~workflowsPutGraphsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsPutGraphs = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/workflows/graphs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
