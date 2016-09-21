if (typeof module === 'object' && module.exports) {
  var RackHd20 = {};
  
  RackHd20.Error = require('./model/Error.js');
  
  RackHd20.ErrorResponse = require('./model/ErrorResponse.js');
  
  RackHd20.Lookups.2.0_LookupBase = require('./model/Lookups.2.0_LookupBase.js');
  
  RackHd20.VersionsResponse = require('./model/VersionsResponse.js');
  
  RackHd20.action = require('./model/action.js');
  
  RackHd20.generic_obj = require('./model/generic_obj.js');
  
  RackHd20.get_user_obj = require('./model/get_user_obj.js');
  
  RackHd20.ipmi-obm-service_Obm = require('./model/ipmi-obm-service_Obm.js');
  
  RackHd20.node.2.0_PartialNode = require('./model/node.2.0_PartialNode.js');
  
  RackHd20.nodes_post_obm_by_id = require('./model/nodes_post_obm_by_id.js');
  
  RackHd20.obm_led = require('./model/obm_led.js');
  
  RackHd20.poller.2.0_PartialPoller = require('./model/poller.2.0_PartialPoller.js');
  
  RackHd20.post_node_workflow = require('./model/post_node_workflow.js');
  
  RackHd20.post_tags = require('./model/post_tags.js');
  
  RackHd20.post_tasks = require('./model/post_tasks.js');
  
  RackHd20.post_workflow = require('./model/post_workflow.js');
  
  RackHd20.role_obj = require('./model/role_obj.js');
  
  RackHd20.skus.2.0_SkusUpsert = require('./model/skus.2.0_SkusUpsert.js');
  
  RackHd20.ssh_settings = require('./model/ssh_settings.js');
  
  RackHd20.tag_rule = require('./model/tag_rule.js');
  
  RackHd20.user_obj = require('./model/user_obj.js');
  
  RackHd20.workflow_graph = require('./model/workflow_graph.js');
  
  RackHd20.workflow_graph_task = require('./model/workflow_graph_task.js');
  
  RackHd20.workflow_task = require('./model/workflow_task.js');
  
  RackHd20.inline_response_200 = require('./model/inline_response_200.js');
  
  RackHd20.ipmiobmservice_Obm_config = require('./model/ipmiobmservice_Obm_config.js');
  
  RackHd20.post_node_workflow_options = require('./model/post_node_workflow_options.js');
  
  RackHd20.post_workflow_options_default = require('./model/post_workflow_options_default.js');
  
  RackHd20.post_workflow_options = require('./model/post_workflow_options.js');
  
  
  RackHd20.TasksApi = require('./api/TasksApi.js');
  
  RackHd20.GraphsApi = require('./api/GraphsApi.js');
  
  RackHd20.WorkflowsApi = require('./api/WorkflowsApi.js');
  
  module.exports = RackHd20;
}