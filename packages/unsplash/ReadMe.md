# Unsplash API Wrapper

## Description

Wrapper for the public Unsplash API. Designed for ease of use and rapid development. The purpose of this wrapper is to provide a simple and straightforward interface for users who are developing and testing applications and need easy access to high quality photos. This is a full featured wrapper, but focuses on providing a streamlined experience to aid in its primary purpose: providing a tool testing and developing applications.

## Installation

To install FreePI

```bash
$ npm install freepi
```

To install package individually, run the following in your terminal.

```bash
$ npm install @freepi/unsplash
```

## How To Use

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

### Searching Unsplash

To search unsplash for photos, collections, or users, use the **search** method.

The search method takes two arguments: "query" and "namespace" (namespace is 'photos' by default).

**Query**: the search query you wish to make to UnSplash. The specific parameters available to the query object depends on the search.

See details for available query parameters here:

- [photos](https://unsplash.com/documentation#search-photos)
- [collections](https://unsplash.com/documentation#search-collections)
- [users](https://unsplash.com/documentation#search-users)

**Namespace**: Takes the values 'users', 'photos', or 'collections'.
This value determines what will be searched. Each namespace has its different parameters available so see the documentation for specific parameters and their values.

**Example:**

```javascript
const unsplash = new Unsplash({
  access_key, // your unsplash client id
});

unsplash.search({
  query: 'cat',
  page: 1,
  per_page: 1,
  color: 'orange',
});
// search defaults to the photos namespace
```

### Photos Methods

The 'photos' object provides a variety of methods for getting photos from unsplash. To use these methods call 'photos' on the unsplash instance.

**Available Methods are:**

- getRandom
- getById
- getPhotoStatistics
- trackDownload
- updatePhoto
- likePhoto
- unLikePhoto
- getAll
- search

**Examples:**

```javascript
const unsplash = new Unsplash({
  access_key, // your unsplash client id
});

// Retrieve a single random photo, given optional filters.
unsplash.photos.getRandom({
      orientation: 'landscape',
      count: 10,
    });
// Can also invoke without parameters to get a single random photo
unsplash.photos.getRandom();
// Retrieve a single photo by id
unsplash.photos.getById('photo id')
// Retrieve a photos statistics
unsplash.photos.getPhotoStatistics('photo id')
// Track a photo when initiating a download as per API guidelines
unsplash.photos.trackDownload('photo id')
// Update a photo on behalf of the logged-in user. See documentation for available parameters
unsplash.photos.updatePhoto('photo id', {description: 'updated description'})
// Like a photo on behalf of the logged-in user
unsplash.photos.likePhoto('photo id')
// Remove a user’s like of a photo
unsplash.photos.unLikePhoto('photo id')
// Search for photos. Alias of 'search' using photos namespace
unsplash.photos.search({query: 'dog',
      page: 10,
      per_page: 1,
      color: 'red',
    }})
// Get a single page from the list of all photos.
unsplash.photos.getAll({
      page: 1,
      per_page: 2,
      order_by: 'popular',
    });


```

## Bug Reports and Feedback

Any bug reports or feedback for this library should be directed to the github [issues page](https://github.com/AlexGaiser/freepi/issues)
