# Dino Ipsum

## Description

This is a wrapper for the free Dino Ipsum API. "Dino Ipsum is a lorem ipsum for dinosaur lovers, and anyone who needs meaningless filler text for prototyping web pages."
Documentation for the API itself can be found [here](https://dinoipsum.herokuapp.com/).

### How To Use

The Dino Ipsum wrapper abstracts the Dino Ipsum API routes into an easy to use namespaced method. It uses Typescript, so parameters and return values are all defined by default.

## Installation

In your terminal run

```bash
$ npm install freepi

# OR

$ npm install @freepi/DinoIpsum

```

### Available Namespaces

Dino Ipsum has a single namespace, and uses a single method for retrieving placeholder Dino Ipsum text in three distinct formats:

- HTML
- JSON
- Text

You can access the namespace and its methods in the following manner:

```javascript
import { DinoIpsum } from 'freepi';

const dinoIpsum = new DinoIpsum();

// Example: retrieving Dino Ipsum with 
const result = dinoIpsum.getDinoIpsum();
const jsonDinoIpsum = result.data;
```

### Method Parameters

Dino Ipsum has a single method which can take up to three parameters in this order:

- Format: string
  * The only acceptable inputs are 'html', 'json', and 'text.' 
  * If any other strings are submitted, this parameter will default to 'json.'
  * Format strings are not case sensitive, so JSON, jSON, htmL, and tEXt are all acceptable inputs.

- Paragraphs: int
  * Defines the number of distinct paragraphs to be returned.
  * If this parameter is ommitted, Dino Ipsum will default paragraph count to 10.

- Words: int
  * Defines the number of words for each paragraph
  * If this parameter is omitted, Dino Ipsum will default paragraph word count to 30.

Parameters are not required as the wrapper and API will default to a JSON, 10 Paragraph, 30 Words format. Parameters are submitted in the following order: (format, paragraphs, words).

**Examples:**

```javascript
const dinoIpsum = new DinoIpsum();

const jsonResult = await dinoIpsum.getDinoIpsum();

// JSON, 10 paragraphs, 30 words per
const json = jsonResult.data;

const textResult = await dinoIpsum.getDinoIpsum('text');
const text = textResult.data;

// HTML, 1 paragraph, 4 words
const htmlResult = await dinoIpsum.getDinoIpsum('html', 1, 4);
```

## Bug Reports and Feedback

Any bug reports or feedback for this library should be directed to the github [issues page](https://github.com/AlexGaiser/freepi/issues)