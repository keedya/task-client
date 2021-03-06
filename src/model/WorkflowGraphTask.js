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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OnTaskClient) {
      root.OnTaskClient = {};
    }
    root.OnTaskClient.WorkflowGraphTask = factory(root.OnTaskClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WorkflowGraphTask model module.
   * @module model/WorkflowGraphTask
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>WorkflowGraphTask</code>.
   * @alias module:model/WorkflowGraphTask
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>WorkflowGraphTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowGraphTask} obj Optional instance to populate.
   * @return {module:model/WorkflowGraphTask} The populated <code>WorkflowGraphTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ignoreFailure')) {
        obj['ignoreFailure'] = ApiClient.convertToType(data['ignoreFailure'], 'Boolean');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('taskName')) {
        obj['taskName'] = ApiClient.convertToType(data['taskName'], 'String');
      }
      if (data.hasOwnProperty('waitOn')) {
        obj['waitOn'] = ApiClient.convertToType(data['waitOn'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} ignoreFailure
   */
  exports.prototype['ignoreFailure'] = undefined;
  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * @member {String} taskName
   */
  exports.prototype['taskName'] = undefined;
  /**
   * @member {Object} waitOn
   */
  exports.prototype['waitOn'] = undefined;



  return exports;
}));


