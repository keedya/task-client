# OnTaskClient.GraphsApi

All URIs are relative to *http://localhost/api/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowsDeleteGraphsByName**](GraphsApi.md#workflowsDeleteGraphsByName) | **DELETE** /workflows/graphs/{injectableName} | Delete a workflow graph 
[**workflowsGetGraphs**](GraphsApi.md#workflowsGetGraphs) | **GET** /workflows/graphs | Get list of workflow graphs 
[**workflowsGetGraphsByName**](GraphsApi.md#workflowsGetGraphsByName) | **GET** /workflows/graphs/{injectableName} | Get a workflow graph 
[**workflowsPutGraphs**](GraphsApi.md#workflowsPutGraphs) | **PUT** /workflows/graphs | Put a graph 


<a name="workflowsDeleteGraphsByName"></a>
# **workflowsDeleteGraphsByName**
> Object workflowsDeleteGraphsByName(injectableName)

Delete a workflow graph 

Delete the workflow graph with the specified value of the injectableName property. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.GraphsApi();

var injectableName = "injectableName_example"; // String | The workflow graph injectable name 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsDeleteGraphsByName(injectableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **injectableName** | **String**| The workflow graph injectable name  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsGetGraphs"></a>
# **workflowsGetGraphs**
> Object workflowsGetGraphs()

Get list of workflow graphs 

Get a list of all workflow graphs available to run. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.GraphsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGetGraphs(callback);
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

<a name="workflowsGetGraphsByName"></a>
# **workflowsGetGraphsByName**
> Object workflowsGetGraphsByName(injectableName)

Get a workflow graph 

Get the workflow graph with the specified value of the injectableName property. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.GraphsApi();

var injectableName = "injectableName_example"; // String | The workflow graph injectable name 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGetGraphsByName(injectableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **injectableName** | **String**| The workflow graph injectable name  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workflowsPutGraphs"></a>
# **workflowsPutGraphs**
> Object workflowsPutGraphs(opts)

Put a graph 

Create or modify a workflow graph in the graph library. 

### Example
```javascript
var OnTaskClient = require('on_task_client');

var apiInstance = new OnTaskClient.GraphsApi();

var opts = { 
  'body': new OnTaskClient.WorkflowGraph() // WorkflowGraph | The workflow graph properties
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsPutGraphs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkflowGraph**](WorkflowGraph.md)| The workflow graph properties | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

