# OnTaskClient.WorkflowsApi

All URIs are relative to *http://localhost/api/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowsAction**](WorkflowsApi.md#workflowsAction) | **PUT** /workflows/{identifier}/action | Perform an action on a workflow 
[**workflowsDeleteByInstanceId**](WorkflowsApi.md#workflowsDeleteByInstanceId) | **DELETE** /workflows/{identifier} | Delete a workflow 
[**workflowsGet**](WorkflowsApi.md#workflowsGet) | **GET** /workflows | Get a list of workflow instances 
[**workflowsGetByInstanceId**](WorkflowsApi.md#workflowsGetByInstanceId) | **GET** /workflows/{identifier} | Get a workflow 
[**workflowsPost**](WorkflowsApi.md#workflowsPost) | **POST** /workflows | Run a workflow 


<a name="workflowsAction"></a>
# **workflowsAction**
> Object workflowsAction(identifier, action)

Perform an action on a workflow 

Perform the specified action on the workflow with the specified instance identifier. Currently, the cancel action is supported. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.WorkflowsApi();

var identifier = "identifier_example"; // String | The workflow instance identifier 

var action = new OnTaskClient.Action(); // Action | The action property with the value of the desired action


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsAction(identifier, action, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The workflow instance identifier  | 
 **action** | [**Action**](Action.md)| The action property with the value of the desired action | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsDeleteByInstanceId"></a>
# **workflowsDeleteByInstanceId**
> Object workflowsDeleteByInstanceId(identifier)

Delete a workflow 

Delete the workflow with the specified instance identifier. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.WorkflowsApi();

var identifier = "identifier_example"; // String | The workflow instance identifier 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsDeleteByInstanceId(identifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The workflow instance identifier  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsGet"></a>
# **workflowsGet**
> Object workflowsGet(opts)

Get a list of workflow instances 

Get list workflow that have been run, or are currently running. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.WorkflowsApi();

var opts = { 
  'active': true, // Boolean | Query string to search for specific workflow properties 
  'skip': 56, // Integer | Query string specifying properties to search for
  'top': 56 // Integer | Query string specifying properties to search for
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **Boolean**| Query string to search for specific workflow properties  | [optional] 
 **skip** | **Integer**| Query string specifying properties to search for | [optional] 
 **top** | **Integer**| Query string specifying properties to search for | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsGetByInstanceId"></a>
# **workflowsGetByInstanceId**
> Object workflowsGetByInstanceId(identifier)

Get a workflow 

Get the workflow with the specified instance identifier. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.WorkflowsApi();

var identifier = "identifier_example"; // String | The workflow instance identifier 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGetByInstanceId(identifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The workflow instance identifier  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsPost"></a>
# **workflowsPost**
> Object workflowsPost(opts)

Run a workflow 

Run a workflow by specifying a workflow graph injectable name. The workflow is not associated with a node. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.WorkflowsApi();

var opts = { 
  'body': new OnTaskClient.PostWorkflow(), // PostWorkflow | The body must contain the name property with the value set to the injectable name of the workflow graph to run 
  'nodeId': "nodeId_example", // String | pass node id
  'name': "name_example" // String | Optionally specify the injectable name of the workflow graph to run
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostWorkflow**](PostWorkflow.md)| The body must contain the name property with the value set to the injectable name of the workflow graph to run  | [optional] 
 **nodeId** | **String**| pass node id | [optional] 
 **name** | **String**| Optionally specify the injectable name of the workflow graph to run | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

