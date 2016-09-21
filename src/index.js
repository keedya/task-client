if (typeof module === 'object' && module.exports) {
  var OnTaskClient = {};
  
  OnTaskClient.Error = require('./model/Error.js');
  
  OnTaskClient.ErrorResponse = require('./model/ErrorResponse.js');
  
  OnTaskClient.VersionsResponse = require('./model/VersionsResponse.js');
  
  OnTaskClient.Action = require('./model/Action.js');
  
  OnTaskClient.GenericObj = require('./model/GenericObj.js');
  
  OnTaskClient.PostTasks = require('./model/PostTasks.js');
  
  OnTaskClient.PostWorkflow = require('./model/PostWorkflow.js');
  
  OnTaskClient.WorkflowGraph = require('./model/WorkflowGraph.js');
  
  OnTaskClient.WorkflowGraphTask = require('./model/WorkflowGraphTask.js');
  
  OnTaskClient.WorkflowTask = require('./model/WorkflowTask.js');
  
  OnTaskClient.inline_response_200 = require('./model/InlineResponse200.js');
  
  OnTaskClient.PostWorkflow_options_default = require('./model/PostWorkflowOptionsDefault.js');
  
  OnTaskClient.PostWorkflow_options = require('./model/PostWorkflowOptions.js');
  
  
  OnTaskClient.TasksApi = require('./api/TasksApi.js');
  
  OnTaskClient.GraphsApi = require('./api/GraphsApi.js');
  
  OnTaskClient.WorkflowsApi = require('./api/WorkflowsApi.js');
  
  module.exports = OnTaskClient;
}