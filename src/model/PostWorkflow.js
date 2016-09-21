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
    define(['ApiClient', 'model/PostWorkflowOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostWorkflowOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.OnTaskClient) {
      root.OnTaskClient = {};
    }
    root.OnTaskClient.PostWorkflow = factory(root.OnTaskClient.ApiClient, root.OnTaskClient.PostWorkflowOptions);
  }
}(this, function(ApiClient, PostWorkflowOptions) {
  'use strict';




  /**
   * The PostWorkflow model module.
   * @module model/PostWorkflow
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PostWorkflow</code>.
   * @alias module:model/PostWorkflow
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PostWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostWorkflow} obj Optional instance to populate.
   * @return {module:model/PostWorkflow} The populated <code>PostWorkflow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = PostWorkflowOptions.constructFromObject(data['options']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PostWorkflowOptions} options
   */
  exports.prototype['options'] = undefined;



  return exports;
}));


