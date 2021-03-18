# FreePI, The Free API Library

### Description

This is a library designed to give rapid and easy access to a variety of free APIs found on the internet. It's purpose is to give developers a simple way to get placeholder text, json, or test their application's network connectivity without needing to create their own services or write boilerplate code to access the APIs. It also removes the need to remember the various endpoints associated with the APIs by abstracting http requests to simple class methods.

This Library also serves as a way to document and collect various free apis which can speed development without frequently needing to return to the source documentation.

This Library is created as a MonoRepo with each individual wrapper and project existing as a separate package. It uses Lerna to bootstrap and symlink the packages as well as for managing version control. This means that every tool included in this library can be downloaded separately. It takes inspiration from the Jest, Babel, and React in it's organization.
  
### Installation: 

To install FreePI run 
```bash
$ npm install freepi

# Or to install an individual package:

$ npm install @freepi/JSONPlaceholder 

```

### How to Use:

Simply install the library and import the API wrapper you wish to use from the freepi library. Alternatively, each wrapper can be downloaded individually using the @freepi/<package> notation.
  
```javascript
import { JSONPlaceholder } from "freepi";

# OR

import JSONPlaceholder from "@freepi/jsonplaceholder";

```

Then create a local instance of the wrapper following the ReadMe for the individual package (Some packages may vary in their configuration)

```javascript
const jsonWrap = new JSONPlaceholder();

const todos = await jsonWrap.todos.find({ userId: 1 })

```

### APIs Supported:

**JSONPlaceholder**
**Unsplash**

### APIs To Be Supported:

**Lorem Ipsum Generator**

### Other Features:

The library is written in TypeScript and bundled to include all the necessary types information. This means IntelliSense in VSCODE or another IDE will work with FreePI and if you are using TypeScript, all the Types will be included from the start!

Features a standalone core library with several handy services to aid in rapid development of APIs for either FreePI or your own API wrapper projects. Including a a custom request library based on Axios.

### Platforms Supported:

node.js  
browser

### Linting and Formatting Rules

Uses Eslint and Prettier. Contributors should use Prettier to format their code before submitting. Linting and formatting rules can be found in the respective .eslintrc.json and .prettierrc files.

