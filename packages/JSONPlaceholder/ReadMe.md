# JSONPlaceholder API Wrapper

## Description

This is a wrapper for the free JSON Placeholder API. The JSON Placeholder API exists to provide rapid access to dummy JSON data. 
Documentation for the API itself can be found [here](https://jsonplaceholder.typicode.com/).

The JSONPlaceholder wrapper abstracts the specific paths for the JSON Placeholder API into easy to use, namespaced methods. It uses Typescript, so parameters and return values are all defined by defualt.

## Installation

In your terminal run 

```bash
$ npm install freepi

# OR

$ npm install @freepi/jsonplaceholder

```


## How To Use

To use the JSONPlaceholder wrapper, import it into your file from either the freepi library or the standalone JSONPlaceholder package.

```javascript
import { JSONPlaceholder } from "freepi";

// OR

import JSONPlaceholder from "@freepi/jsonplaceholder"

const jsonPlaceholder = new JSONPlaceholder()


```

### Available Namespaces

JSONPlaceholder has a number of namespaces for each portion of the API. Each one has methods available to it for interacting with that portion of the UI.

- todos
- posts
- comments
- users
- albums
- photos

You can access a namespace and its methods in the following manner: 

```javascript
import { JSONPlaceholder } from "freepi";

const jsonPlaceholder = new JSONPlaceholder()

// Example: retrieving all todo items
const todos = await jsonPlaceholder.todos.findAll()


```

### Available Methods

Every namespace has the following methods available to it:
- `find`: Searches the namespace for a value that matches search parameters,
- `findAll`: Gets all values in the namespace,
- `getById`: Retrieves a value in the namespace by its id,
- `create`: Makes a POST request to the API (JSONPlaceholder imitates a POST request without creating new data),
- `findNested`: Retrieve values using the nested url paths available to the API,

**Examples:** 
```javascript
// find a todo by title
const res = await jsonPlaceholder.todos.find({
      title: 'quo adipisci enim quam ut ab',
    });
    

// Get all post items
const res = await jsonPlaceholder.posts.findAll();

// get a user by id
const res = await jsonPlaceholder.users.getById(1);


// Create a new user
const newUser: User = {
      id: 97,
      name: 'Ian Scott',
      username: 'Uber_Scott',
      email: 'IanIsDaBest@CoolIan.net',
      address: {
        street: 'Apple St',
        suite: 'Suite 333',
        city: 'Nagasaki',
        zipcode: '716-239',
        geo: {
          lat: '65.9817',
          lng: '27.0012',
        },
      },
      phone: '(123)456-7890',
      website: 'IanIsCool.io',
      company: {
        name: 'Green Is Best',
        catchPhrase: 'Waaagh!',
        bs: 'What is bs?',
      },
    };

const res = await jsonPlaceholder.users.create(newUser)

// find a nested todo
const res = await jsonPlaceholder.todos.findNested(
      'posts',
      1,
      'comments',
    )();

```



## Bug Reports and Feedback

Any bug reports or feedback for this library should be directed to the github [issues page](https://github.com/AlexGaiser/freepi/issues) 
