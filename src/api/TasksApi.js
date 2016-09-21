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
    define(['ApiClient', 'model/VersionsResponse', 'model/ErrorResponse', 'model/Error', 'model/PostTasks', 'model/WorkflowTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VersionsResponse'), require('../model/ErrorResponse'), require('../model/Error'), require('../model/PostTasks'), require('../model/WorkflowTask'));
  } else {
    // Browser globals (root is window)
    if (!root.OnTaskClient) {
      root.OnTaskClient = {};
    }
    root.OnTaskClient.TasksApi = factory(root.OnTaskClient.ApiClient, root.OnTaskClient.VersionsResponse, root.OnTaskClient.ErrorResponse, root.OnTaskClient.Error, root.OnTaskClient.PostTasks, root.OnTaskClient.WorkflowTask);
  }
}(this, function(ApiClient, VersionsResponse, ErrorResponse, Error, PostTasks, WorkflowTask) {
  'use strict';

  /**
   * Tasks service.
   * @module api/TasksApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TasksApi. 
   * @alias module:api/TasksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBootstrap operation.
     * @callback module:api/TasksApi~getBootstrapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tasks bootstrap.js 
     * Used internally by the system - get tasks bootstrap.js 
     * @param {Object} opts Optional parameters
     * @param {String} opts.macAddress Query string containing the mac address
     * @param {module:api/TasksApi~getBootstrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionsResponse}
     */
    this.getBootstrap = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'macAddress': opts['macAddress']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VersionsResponse;

      return this.apiClient.callApi(
        '/tasks/bootstrap.js', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTasksById operation.
     * @callback module:api/TasksApi~getTasksByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a task 
     * Get the specified task. 
     * @param {String} identifier The task identifier 
     * @param {module:api/TasksApi~getTasksByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getTasksById = function(identifier, callback) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier == undefined || identifier == null) {
        throw "Missing the required parameter 'identifier' when calling getTasksById";
      }


      var pathParams = {
        'identifier': identifier
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
        '/tasks/{identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postTaskById operation.
     * @callback module:api/TasksApi~postTaskByIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post a task 
     * Start the specified task 
     * @param {String} identifier The task identifier 
     * @param {module:model/PostTasks} body The obm settings to apply 
     * @param {module:api/TasksApi~postTaskByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.postTaskById = function(identifier, body, callback) {
      var postBody = body;

      // verify the required parameter 'identifier' is set
      if (identifier == undefined || identifier == null) {
        throw "Missing the required parameter 'identifier' when calling postTaskById";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postTaskById";
      }


      var pathParams = {
        'identifier': identifier
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
        '/tasks/{identifier}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsDeleteTasksByName operation.
     * @callback module:api/TasksApi~workflowsDeleteTasksByNameCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workflow task 
     * Delete the workflow task with the specified value of the injectableName property. 
     * @param {String} injectableName The task injectable name 
     * @param {module:api/TasksApi~workflowsDeleteTasksByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsDeleteTasksByName = function(injectableName, callback) {
      var postBody = null;

      // verify the required parameter 'injectableName' is set
      if (injectableName == undefined || injectableName == null) {
        throw "Missing the required parameter 'injectableName' when calling workflowsDeleteTasksByName";
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
        '/workflows/tasks/{injectableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsGetAllTasks operation.
     * @callback module:api/TasksApi~workflowsGetAllTasksCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of workflow tasks 
     * Get a list of all workflow tasks that can be added to a workflow. 
     * @param {module:api/TasksApi~workflowsGetAllTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsGetAllTasks = function(callback) {
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
        '/workflows/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsGetTasksByName operation.
     * @callback module:api/TasksApi~workflowsGetTasksByNameCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a workflow task 
     * Get the task with the specified value of the injectableName property. 
     * @param {String} injectableName The task injectable name 
     * @param {module:api/TasksApi~workflowsGetTasksByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsGetTasksByName = function(injectableName, callback) {
      var postBody = null;

      // verify the required parameter 'injectableName' is set
      if (injectableName == undefined || injectableName == null) {
        throw "Missing the required parameter 'injectableName' when calling workflowsGetTasksByName";
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
        '/workflows/tasks/{injectableName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsPutTask operation.
     * @callback module:api/TasksApi~workflowsPutTaskCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Put a workflow task 
     * Create or update a workflow task in the library of tasks. 
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkflowTask} opts.body The workflow task properties
     * @param {module:api/TasksApi~workflowsPutTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.workflowsPutTask = function(opts, callback) {
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
        '/workflows/tasks', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
