---
title: How to Use the Slice Function in Javascript
description: The slice function is a string extracting function. It is used to get a piece of a string. The slice function is very similar to the substr function with a few differences.
slug: how-to-use-the-slice-function-in-javascript
date: 2023-08-17 19:00:00
categories: [Javascript]
---

## Table of contents

## Intro

When working with strings, I tend to think of the slice function. However, I  stay away from the function and use the substring function instead.

I also get the slice function mixed up with the splice function. The splice function works on arrays while slice handles strings.

To remember how the  slice function works I decide to write an article to explain it.

## Using Slice function

The slice function is a string extracting function. It is used to get a piece of a string. The slice function is very similar to the substr function with a few differences.

The slice function accepts 2 optional params that represents a range of indexes `text.slice(startIndex, endindex)`.

A string acts like an array but is not an array. Each character in a string has an index, starting from zero. What do we mean by indexes for a string? See the example below.

```js
const text = "This is a long string or text with line breaks and tabs";
// index 0 = T
// index 1 = h
// index 20 = g

// valid
console.log(text[0], text[1], text[2], text[3], text[4]); // T h i s

// invalid because forEach() only works with arrays 
text.forEach((element) => console.log(element))
```

Now that we understand indexes let’s look at examples using the slice function.

```js
const text = "This is a long string or text with line breaks and tabs";

const first = text.slice(); // return the entire string
const second = text.slice(5);  // start from index 5 and return the rest
const third = text.slice(5, 11); // start from index 5 and stop at index 10

console.log(first); // This is a long string or text with line breaks and tabs
console.log(second); // is a long string or text with line breaks and tabs
console.log(third); // is a long
```


<div class="react-note-block" data-title="Note">

  The end index is not included in the output. If you want to include the end index, increase the end index by 1.
  
</div>

## Splice function with Negative Values

The slice function can also use negative values. A negative index tells us to start from the end of the text and move left. A few example are shown below.

```js
const text = "This is a long string or text with line breaks and tabs";
// index -1 = s - character at the end of the string
// index -4 = t - fourth character from the end 
// index -10 = s - tenth character from the end

// We can not do text[-1]
```

```js
const text = "This is a long string or text with line breaks and tabs";

console.log(text.slice(-1)); // output: s
console.log(text.slice(-4)); // output: tabs
console.log(text.slice(-4, -1)); // output: tab

// Start at fifth character and go to the sixth character away from the end
console.log(text.slice(5, -6)); // output: is a long string or text with line breaks an
```

## Odd Results for Slice

The given examples shown below are not normal use cases and we should ideal try to avoid them to prevent unexpected results.

If the index range overlaps, the result will be empty.

```js
const text = "This is a long string or text with line breaks and tabs";

console.log(text.slice(-4, -6)); // returns empty string
console.log(text.slice(-4, 2)); // returns empty string
```

If the negative value is too low, the index defaults to 0.

```js
const text = "Javascript"; // total index is 10 

console.log(text.slice(-10)); // Javascript
console.log(text.slice(-20)); // Javascript
// same as below, because the text has less or equal to 10 characters
console.log(text.slice(0));
```

If the start index is greater than the total number of characters, then an empty sring is returned.

```js
const text = "Javascript"; // total index is 10 

console.log(text.slice(10)); // empty string
console.log(text.slice(15)); // empty string
```