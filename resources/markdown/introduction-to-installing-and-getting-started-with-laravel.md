---
title: Introduction to Installing and Getting Started with Laravel
description: Laravel is the most popular php framework that helps developers build applications very quickly.
slug: introduction-to-installing-and-getting-started-with-laravel
date: 2023-08-21 10:00:00
categories: [Laravel]
tags: [Getting started]
---

## Table of contents

## Intro

Laravel is the most popular php framework that helps developers build applications very quickly. It is very similar to Ruby on Rails in terms of development speed. 

Laravel was built with the Model-View-Controller design pattern which makes it an easy framework to use.

A few features built into Laravel that makes building apps faster are:

- It has a template engine for rendering its views and building html components.
- It has handy database functionality such as migrations, seeders, and models to allow you to connect and start making queries immediately.
- It has a ton of request validation features.
- It has an event listener system.
- It has queueing functionality to give us background processing of long running tasks.
- It has email and notification tools that can use Slack and Twilio to send text messages.
- It has a filesystem feature to give you an easy way to access files, assets, and uploaded media.
- Tailwind CSS is Laravel’s go to for styling
- It has a large ecosystem of laravel packages and starter kits for React, Vue, and Nextjs.
- And much much more.

Compared to Node.js frameworks like express.js, you would need to spend a great deal of time to build or import a few packages to get all those built in features.

And even then, there isn’t a standardized way of structuring your project like there is with Laravel.

Don’t get me wrong, Node.js is still awesome and I love using it too for the right task.

## Installing Required Tools

To get started with Laravel we first need a few thing tools to get it to run on our machine.

Laravel needs php and composer in order to run.

Php is a programming language and composer is a package manager for php. The same way npm is to javascript. Php package registry can be found [here](https://packagist.org/)

On Mac OS, we can use homebrew to install php.

<div class="code-title">Terminal</div>

```bash
brew install php
```

After installation check your php version with `php -v` . You should see something similar as shown below. Your version may differ though.  That is fine, as long as your version is higher than mine.

<div class="code-title">Terminal</div>

```bash
tjgore$ php -v
PHP 8.1.22 (cli) (built: Aug  3 2023 17:08:02) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.22, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.22, Copyright (c), by Zend Technologies
```

Next up, install composer. Composer requires a few commands to be installed. To ensure you run the most up to date commands, follow the commands found here [link](https://getcomposer.org/download/).

At the end of the composer installation, don’t miss the last command further down the page.

<div class="code-title">Terminal</div>

```bash
sudo mv composer.phar /usr/local/bin/composer 
```

<div class="react-note-block" data-title="Note">

The above command lets you run composer from anywhere.

If you don't run it you will have to call composer with `path/to/composer.phar`
</div>

Test your composer installation by running.

<div class="code-title">Terminal</div>

```bash
composer
```

Scroll to the top of the command's output and we should see the following.

![Composer installed](images/composer-installed.jpg)

Hopefully, that went smoothly without any hiccups. Now we are ready to create a laravel project.

## Create a laravel project

Composer is used to create a laravel project by running this command.

<div class="code-title">Terminal</div>

```bash
composer create-project laravel/laravel laravel-start
```

The composer command installed the laravel framework and all its dependencies in a folder called laravel-start. After installing, the laravel framework also ran a few command to get your project setup.

Move into the project’s directory and open the project with VSCode IDE. If you don’t have VSCode or the code command doesn't work you may need to open your project in your IDE manually.

<div class="code-title">Terminal</div>

```bash
cd laravel-start
code .
```

Your file structure should look like the following.

![Laravel file structure](images/laravel-folder-structure.jpg)

## Open Laravel Project in Browser.

There are many ways to open a Laravel project in the browser.

One way is by running a Laravel command using php to start a local server and open your browser at [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

<div class="code-title">Terminal</div>

```bash
php artisan serve
```

### Short Intro to Valet

Another way is by using a php package called Valet. Valet is a Mac OS dev tool that creates a local dev environment for your project to use. 

Valet comes with alot of cool features such as:

- Host your project on a *.test domain
- You can install and switch php versions on a per project basis
- Share your project to the public internet with the help of ngrok
- Add https to your local projects
- And more

Let’s install it globally and start it up.

<div class="code-title">Terminal</div>

```bash
composer global require laravel/valet
```

<div class="react-note-block" data-title="Note">

Usually you would install packages locally to your project, but Valet was built to be used globally.

If you ever have an issue with running it, try running
 - `valet restart` 
 - or `valet install` to fix the issue.
</div>

After Installing Valet, run the following to create a .test link to your Laravel project and open a browser to the link.

<div class="code-title">Terminal</div>

```bash
valet link
A [laravel-start] symbolic link has been created in [/Users/tjgore/.config/valet/Sites/laravel-start].
valet open
```

Your browser should open to [http://laravel-start.test/](http://laravel-start.test/)

To view all your valet links run this command `valet links` .

<div class="code-title">Terminal</div>

```bash
valet links

+-----------------+-----+-----------------------------+----------------------------------------------------------------+-------------+
| Site            | SSL | URL                         | Path                                                           | PHP Version |
+-----------------+-----+-----------------------------+----------------------------------------------------------------+-------------+
| laravel-start   |     | http://laravel-start.test   | /Users/tjgore/Dev/sandbox/laravel-start                        | php@8.1     |
```

Valet can also switch php versions per project with `valet isolate php@8.0` and use the updated php version to run php commands and composer.

- `valet php artisan serve`
- `valet composer require <package-name>`

These commands will use php@8.0 instead of your local machine’s php version.

## Create a page in Laravel

Let’s now create a page to show how routes and views work.

In your IDE open the following file `routes/web.php` and let’s update it to include another url path.

This file is where you control what url paths are available.

In VSCode you can use the keyboard shortcut Command + P and search for the file to navigate to it quickly.

<div class="code-title">routes/web.php</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": false}
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () { // [tl! highlight:2 focus:2]
	return 'Hi';
});

```

The first `Route::get` line in this file is the current page we see at [http://laravel-start.test](http://laravel-start.test) .

The second route is at [http://laravel-start.test/home](http://laravel-start.test/home). You should be able to see “Hi”. And just like that we created a route.

Normally the Routes second parameter, the nameless function, would be added to a php class called a controller to separate the app logic from the routing. That is beyond this intro post but an example of it would look like the following.

<div class="code-title">routes/web.php</div>

```php
Route::get('/home', function () { // [tl! remove:2]
	return 'Hi';
});

Route::get('/home', [HomeController::class, 'index']); // [tl! add]
```

Let’s add a proper html page to what is return from the /home route. Right now it is just returning “Hi” and the browser is adding a default html structure.

Navigate to `resources/views` and create a new file called `home.balde.php`. Blade is Laravel’s template engine and adds additional functionality to plain html. 

I won’t get into blade except that it powers up html and gives us the ability to create components and layouts for pages so you don’t have to repeat code and structures.

Update the home.blade.php to the following.

<div class="code-title">resources/views/home.blade.php</div>

```html
<!DOCTYPE html>
<html>

<head>
    <title>Page Title</title>
</head>

<body>
    <h1 style="color:green;">My First Laravel App</h1>
</body>

</html>
```

Now return to your `routes/web.php` file and update the home route to use the home.blade.php file as a view.

<div class="code-title">routes/web.php</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": false}
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
   return 'Hi'; // [tl! remove]
	return view('home'); // [tl! add]
});
```

Notice, we just used the name of the blade file without the `blade.php` extension.

Visit  [http://laravel-start.test/home](http://laravel-start.test/home) and check out the changes.

## Bonus: Create an API route

Navigate to `routes/api.php` and add the following code to it.

<div class="code-title">routes/api.php</div>

```php
 Route::get('/organization', function () {
	return response()->json([ // [tl! focus:3]
        ['name' => 'Twitter'],
        ['name' => 'Google'],
    ]);
});
```

You could also add the api routes to the `routes/web.php` file but this helps to keep routes organized as your application grows.

Open your browser and visit [http://laravel-start.test/api/organization](http://laravel-start.test/api/organization). 

![Json response](images/json-response.jpg)

I have json viewer chrome extension to show my json in a nice format. Yours will look different but with the same data.

<div class="react-note-block">

All routes in `routes/api.php` will be under the api path [http://laravel-start.test/api/organization](http://laravel-start.test/api/organization).

If the api route is added to `routes/web.php` , it doesn’t fall under the api path, just [http://laravel-start.test/organization](http://laravel-start.test/organization).
</div>

