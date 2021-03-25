## Unsplash API Wrapper

### Description

Wrapper for the public Unsplash API. Designed for ease of use and rapid development. The purpose of this wrapper is to provide a simple and straightforward interface for users who are developing and testing applications and need easy access to high quality photos. This is a full featured wrapper, but focuses on providing a streamlined experience to aid in its primary purpose: providing a tool testing and developing applications.


### Installation

To install FreePI

```bash
$ npm install freepi
```


To install package individually, run the following in your terminal.

```bash
$ npm install @freepi/unsplash
```

### How To Use

```javascript
import { Unsplash } from "freepi";

# OR

import Unsplash from "@freepi/unsplash";

```

Then create a local instance of the Unsplash wrapper using your unsplash client id.

```javascript

const unsplash = new Unsplash({
  access_key, // your unsplash client id
});

```

**Searching UnSplash:**

To search unsplash for photos, collections, or users, use the **search** method.

The search method takes two arguments: "query" and "namespace" (namespace is 'photos' by default). 

Query: the search query you wish to make to UnSplash. The specific parameters available to the query object depends on the search. 

Namespace: Takes the values 'users', 'photos', or 'collections'.
This value determines what will be searched. Each namespace has its different parameters available so see the documentation for specific parameters and their values.

