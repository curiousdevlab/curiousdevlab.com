---
title: Introduction to the Scripting Npm Package Zx
description: Zx is a package created by google with the goal to make creating scripts with javascript easier.
slug: introduction-to-the-scripting-npm-package-zx
date: 2023-08-19 10:00:00
categories: [Node.js]
tags: [Getting started, Npm package,]
---

## Table of contents

## Intro

Recently, I came across an interesting and useful npm package called [zx](https://www.npmjs.com/package/zx)

Zx is a package created by google with the goal to make creating scripts with javascript easier.

I don’t know about you but I prefer creating scripts with javascript over bash. Bash isn’t a language I use often and when I do I forget the language’s syntax and how it works.

## Requirements

All you need to use zx is node and npm installed on your system.

## Installing zx to a Project

We are going to install zx locally.

To get started with installation, create a project folder and initializing npm in it.

<div class="code-title">Terminal</div>

```bash
mkdir zx-intro
cd zx-intro
npm init 
```

You should complete the npm init prompt as shown below. Add your own details.

<div class="code-title">Terminal</div>

```bash
Press ^C at any time to quit.
package name: (zx-intro) 
version: (1.0.0) 
description: An introduction to zx
entry point: (index.js) 
test command: 
git repository: 
keywords: zx
author: Curious Dev Lab
license: (ISC) MIT
About to write to /Users/tjgore/Dev/sandbox/zx-intro/package.json:

{
  "name": "zx-intro",
  "version": "1.0.0",
  "description": "An introduction to zx",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "zx"
  ],
  "author": "Curious Dev Lab",
  "license": "MIT"
}

Is this OK? (yes) yes
```

Install the zx package locally, not globally. Using zx locally allows you to keep zx’s version fixed and available across users and dev environments. 

<div class="code-title">Terminal</div>

```bash
npm install zx
```

If the package is installed globally and you push this project to Github, the next dev to pull down the project and run `npm install` won’t get zx installed or even know if they are using the same version to make the script work as expected. 

## How to Use Zx

Now that we have zx installed in a project, let’s see what it can do.

Create a simple script.mjs file that uses zx. Think of this script as javascript and bash combined.

<div class="code-title">scripts.mjs</div>

```js
#! /usr/bin/env node

import { $, fs, echo } from "zx";

const name = "John";

echo`Hi ${name}!`;

console.log('Hi again,', name)

try {
  await fs.writeFile("newFileCreatedWithJS.txt", "Hello JS!");
} catch (err) {
  console.log(err);
  await $`exit 1`; // exit and stop executing with error
}

await $`touch newFileCreatedWithBash.txt`;
await $`echo "Hello Bash!" >> newFileCreatedWithBash.txt`;

await $`pwd && ls`;
```

To run this script you need to make it executable by running `chmod +x script.mjs`. 

After running the script with `./script.mjs` , your results should be as below.

```bash
Hi John!
Hi again, John
$ touch newFileCreatedWithBash.txt
$ echo "Hello Bash!" >> newFileCreatedWithBash.txt
$ ls
newFileCreatedWithBash.txt
newFileCreatedWithJS.txt
node_modules
package-lock.json
package.json
script.mjs
```

There are a few things to note in the above script example.

- Scripts using zx should ideally be javascript modules and end with the .mjs extension to allow node js imports to work.
- Since we are running zx locally and not globally, you must add `#! /usr/bin/env node` at the start of the script and import the zx package. This tells the terminal to use node js to run the script. If you are running zx globally, you can use `#! /usr/bin/env zx` and remove the import zx statement.
- Async await is top level and we don’t need to wrap it in a function to work. Most bash commands will need await.
- The `$` function is used to run bash commands such as: `ls`, `cd`, `touch filename` ect..
- Zx comes with pre installed packages and built in functions. `fs` for the fs-extra package and `echo` which is a built in console.log. You can still use console.log too.
- Zx scripts can use both javascript and bash syntax. In the script, we created 2 files one made with javascript and another with bash commands.

If you are more comfortable with javascript, I’m sure you see the possibilities here.

## Why Not Just Use Node JS as Is to Write Scripts?

We are just using node js with zx imported as a package. 

The nice thing about zx is that it comes pre packages with a few additional npm packages and built in functions that makes getting the task done quick and easy.

The zx page quotes,

> The `zx` package provides useful wrappers around `child_process`, escapes arguments and gives sensible defaults.
> 

## Benefits of zx

In my opinion, there are a few benefits to using zx over bash and clearly google also thinks the same. That’s why they created this wonderful package.

- First, we get to use javascript’s syntax and we can import other javascript files and use them like any other javascript app.

- We get access to the entire npm ecosystem.

- For the typescript fans, we can use typescript as well. Mind blown emoji.

## A Few zx Functions and Packages

The zx library comes with a few functions and  packages pre installed so you don’t need to  npm install them separately.

As seen in the example above we imported `fs` and `echo`. `fs` is the fs-extra npm package and echo is a built in function.

Here’s a list of a few more packages that come with zx

- `fetch` is from the `node-fetch` package and allows you to make fetch request from your script
- `question` is from the `readline` package and is used to make the terminal ask the user a question and save the user’s input to a variable.
- `chalk` is from, you guessed it, the `chalk` package and allows you to style your terminal output text with colors and and background colors.
- `os` comes from, you guessed it again, the `os` package. This package allows you to detect which operating system the script is running on. This is useful in cases where you want your script to be compatible with multiple operating systems.

There are many more built in packages and functions but this is just an introduction. To learn more about zx, check out the official docs on the [github page](https://github.com/google/zx#readme).