# FreePI Core Library

## Description

The core library for FreePI. Contains logic that needs to be shared between packages.

### Installation

To install FreePI

```bash
$ npm install freepi
```


To install package individually, run the following in your terminal.

```bash
$ npm install @freepi/unsplash
```

## Features: 

 - RequestBuilder
 - requests
 - utils


## How To Use

To import the whole core library:  

```javascript
import { core } from "freepi";

# OR

import core from "@freepi/core";

```

### requests 

To use the requests library: 

Import the request methods from the `requests` object  

Available methods are:  
- get
- post
- del
- put

All methods take two arguments: a url (or path) and a config object. The config object is where additional information like headers, data, or query parameters are passed.

**To use requests methods**
```typescript
import { requests } from "@freepi/core";

const {get, post, del, put} = requests;

const queryParams = {
  id: 100,
}

get<Todo>('https://my.site.com/api/todos', {params: queryParams}) 
// the request will return an Axios promise of the type specified

```

**To use customReqInit:**  
customReqInit allows use of request methods using a custom instance of axios
you can optionally pass a config object which will be used to create the custom axios instance. 
```javascript
import { customReqInit } from '@freepi/core';

const requests = customReqInit({baseURL:"https://my.app.com"})
// all native methods available in the request library will 
// now use the custom axios instance
requests.get('/path') // will use baseURL set using config


```



