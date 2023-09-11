---
title: "Slice vs Substring: Which Javascript Function is Faster?"
description: "Even though these functions give the same results, they work differently. Let’s go over how these functions work differently."
slug: slice-vs-substring-which-javascript-function-is-faster
date: 2023-08-18 19:00:00
categories: [Javascript]
---

## Table of contents

## Intro

The slice and substring functions are string extracting functions. They both return a piece of a string based on a start and end index.

```js
const text = "Curious";
/** 
index 0 = C = -7 negative index
index 1 = u = -6 negative index
index 2 = r = -5 negative index
index 3 = i = -4 negative index
index 4 = o = -3 negative index
index 5 = u = -2 negative index
index 6 = s = -1 negative index
End index not included in output
*/

console.log(text.substring(3, 6)); // output: iou
console.log(text.slice(-4, -1)); // output: iou
```

## The Differences

Even though these functions give the same results, they work differently. Let’s go over how these functions work.

### Substring

The substring function can only use positive indexes.

```jsx
const text = "Marvel Universe World";

console.log(text.substring(4)); // output: el Universe World
console.log(text.substring(0, 7)); // output: Marvel

// If the start index is greater than the end index, swap values
console.log(text.substring(7, 1)); // output: arvel
// the above is the same as below
console.log(text.substring(1, 7)); // output: arvel

console.log(text.substring(10, 3)); // vel Uni
// the above is the same as below
console.log(text.substring(3, 10)); // vel Uni
```

If a negative value is used it defaults to zero and then swaps values.

```jsx
const text = "Marvel Universe World";

console.log(text.substring(7, -5)); // Marvel
// same as below, first -5 becomes 0 and then (7, 0) swap values to be (0, 7) 
console.log(text.substring(0, 7)); // Marvel
```

### Slice

The slice function can use both positive and negative indexes. When negative values are used we start at the end of the string and count to the left. Negative values might be a bit confusing so check the example below.

```jsx
const text = "Marvel Universe World";

// index -1 = d
// index -2 = l
// index -3 = r
// index -4 = o
// index -5 = W
// etc..

console.log(text.substring(0, 7)); // output: Marvel

console.log(text.slice(-4)); // output: orld

// start at second character and go to the seventh charcter from 
// the end of the string
console.log(text.slice(2, -7)); // output: rvel Univers
```

Also the slice function does not swap values or defaults to zero as shown above.

To learn more on the slice function, read our article on [How to Use the Slice Function](/how-to-use-the-slice-function-in-javascript) 

<div class="react-note-block" data-title="Note">

If the end index for slice or substring is left out, the text length is used as the end index.

```jsx
const text = "Marvel Universe World";
// text length = 21

console.log(text.substring(4)); // output: el Universe World
// same as
console.log(text.substring(4, 21)); // output: el Universe World
```

</div>

## Which is faster?

Slice and substring do the same thing but which one is faster?

Let’s run a substring function 500 million times in the terminal and console.log how long it took to finish. Add the below code to a `substring.js` file and make it executable with `chmod  +x substring.js`. Use `node ./substring.js` to run it.

<div class="code-title">substring.js</div>

```js
const text = "Marvel Universe World";

const current = Date.now();

for(x = 0; x <= 500000000; x++) {
  text.substring(4);
}

const end = Date.now() - current;

console.log('Completed in: ', end, 'milliseconds');
console.log('Completed in: ', (end / 1000.0), 'seconds');
```

Results after running 3 times

```bash
Completed in:  1241 milliseconds
Completed in:  1.241 seconds

Completed in:  1255 milliseconds
Completed in:  1.255 seconds

Completed in:  1256 milliseconds
Completed in:  1.256 seconds
```

Let do the same for slice and see the results.

<div class="code-title">slice.js</div>

```js
const text = "Marvel Universe World";

const current = Date.now();

for(x = 0; x <= 500000000; x++) {
  text.slice(4);
}

const end = Date.now() - current;

console.log('Completed in: ', end, 'milliseconds');
console.log('Completed in: ', (end / 1000.0), 'seconds');
```

And the slice results as shown below.

```js
Completed in:  1251 milliseconds
Completed in:  1.251 seconds

Completed in:  1237 milliseconds
Completed in:  1.237 seconds

Completed in:  1257 milliseconds
Completed in:  1.257 seconds
```

From the results, it looks like there isn’t a big difference in performance between the slice and substring functions. Also running 500 million times in less than 1.3 seconds is pretty fast either way.

So feel free to use whichever you are comfortable with.

In my opinion, substring is easier to understand than slice and I use it more often.