# OnTaskClient.TasksApi

All URIs are relative to *http://localhost/api/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBootstrap**](TasksApi.md#getBootstrap) | **GET** /tasks/bootstrap.js | Get tasks bootstrap.js 
[**getTasksById**](TasksApi.md#getTasksById) | **GET** /tasks/{identifier} | Get a task 
[**postTaskById**](TasksApi.md#postTaskById) | **POST** /tasks/{identifier} | Post a task 
[**workflowsDeleteTasksByName**](TasksApi.md#workflowsDeleteTasksByName) | **DELETE** /workflows/tasks/{injectableName} | Delete a workflow task 
[**workflowsGetAllTasks**](TasksApi.md#workflowsGetAllTasks) | **GET** /workflows/tasks | Get list of workflow tasks 
[**workflowsGetTasksByName**](TasksApi.md#workflowsGetTasksByName) | **GET** /workflows/tasks/{injectableName} | Get a workflow task 
[**workflowsPutTask**](TasksApi.md#workflowsPutTask) | **PUT** /workflows/tasks | Put a workflow task 


<a name="getBootstrap"></a>
# **getBootstrap**
> VersionsResponse getBootstrap(opts)

Get tasks bootstrap.js 

Used internally by the system - get tasks bootstrap.js 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var opts = { 
  'macAddress': "macAddress_example" // String | Query string containing the mac address
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBootstrap(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **macAddress** | **String**| Query string containing the mac address | [optional] 

### Return type

[**VersionsResponse**](VersionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTasksById"></a>
# **getTasksById**
> Object getTasksById(identifier)

Get a task 

Get the specified task. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var identifier = "identifier_example"; // String | The task identifier 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTasksById(identifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The task identifier  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTaskById"></a>
# **postTaskById**
> Object postTaskById(identifier, body)

Post a task 

Start the specified task 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var identifier = "identifier_example"; // String | The task identifier 

var body = new OnTaskClient.PostTasks(); // PostTasks | The obm settings to apply 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTaskById(identifier, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The task identifier  | 
 **body** | [**PostTasks**](PostTasks.md)| The obm settings to apply  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsDeleteTasksByName"></a>
# **workflowsDeleteTasksByName**
> Object workflowsDeleteTasksByName(injectableName)

Delete a workflow task 

Delete the workflow task with the specified value of the injectableName property. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var injectableName = "injectableName_example"; // String | The task injectable name 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsDeleteTasksByName(injectableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **injectableName** | **String**| The task injectable name  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsGetAllTasks"></a>
# **workflowsGetAllTasks**
> Object workflowsGetAllTasks()

Get list of workflow tasks 

Get a list of all workflow tasks that can be added to a workflow. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGetAllTasks(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsGetTasksByName"></a>
# **workflowsGetTasksByName**
> Object workflowsGetTasksByName(injectableName)

Get a workflow task 

Get the task with the specified value of the injectableName property. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var injectableName = "injectableName_example"; // String | The task injectable name 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGetTasksByName(injectableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **injectableName** | **String**| The task injectable name  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsPutTask"></a>
# **workflowsPutTask**
> Object workflowsPutTask(opts)

Put a workflow task 

Create or update a workflow task in the library of tasks. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.TasksApi();

var opts = { 
  'body': new OnTaskClient.WorkflowTask() // WorkflowTask | The workflow task properties
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsPutTask(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkflowTask**](WorkflowTask.md)| The workflow task properties | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

