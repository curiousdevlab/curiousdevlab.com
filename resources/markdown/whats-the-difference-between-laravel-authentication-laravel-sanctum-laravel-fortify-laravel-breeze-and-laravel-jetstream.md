---
title: What’s the Difference Between Laravel Authentication, Laravel Sanctum, Laravel Fortify, Laravel Breeze,  and Laravel Jetstream ?
description: Why are there so many packages or ways to do authentication in Laravel? 
slug: whats-the-difference-between-laravel-authentication-laravel-sanctum-laravel-fortify-laravel-breeze-and-laravel-jetstream
date: 2023-08-24 10:00:00
categories: [Laravel]
tags: []
---

## Table of contents

## Introduction

Most times when I think about authentication for Laravel I wonder. 

- Why are there so many packages or ways to do authentication in Laravel?
- Which one should I use?
- Do they all do the same thing?

Currently, Laravel provides 5 ways of setting up auth in your app. They are

- Laravel Fortify
- Laravel Breeze
- Laravel Sanctum
- Laravel Jetstream
- and Laravel Authentication.

Today, in this post, I will be digging into Laravel’s auth options and explaining how they differ and when to use them.

## Laravel Authentication

In the Laravel docs, there are parts that state you can use Laravel’s built in authentication services. Let’s understand those services first.

Laravel provides authentication out of the box. The same way it provides notifications, queues, and validation services.

These auth services can be used as is and will perform cookie based authentication for your app.

Compared to the auth packages, Laravel’s auth services are bare bones. 

All of the following packages we are about to go over, use Laravel’s auth services under the hood but with additional features. 

With that being said, if you desire or want to learn, you can build all the auth packages listed with Laravel’s built in authentication services. The main purpose of these auth packages is to help us get started quickly.

Unless you are building a very unique auth experience, it is rare to implement auth without one of Laravel’s authentication packages.

## Laravel Sanctum

Laravel Sanctum is an API authentication package used for 

- API Tokens,
- Single Page Applications (SPAs), React and Vue
- and Mobile apps.

Sanctum comes pre-installed in all Laravel projects and can be used along side all the other auth packages.

Laravel introduced Sanctum to provide a simpler and lighter alternative to Laravel's Passport which uses OAuth2. 

Sanctum only provides backend logic and does not include a frontend UI.

As stated above, Sanctum can be used to authenticate in 3 different ways.

For API Tokens, Sanctum can authenticate and generate multiple tokens for users’ accounts. It is the same way you may generate an API Token for ChatGPT or Google Maps to use as a third party service in your personal app. Sanctum manages these tokens and can even add scopes to them.

SPAs API authentication is another way Sanctum is used. In this case, Sanctum uses cookie based sessions to authenticate request. The SPA and Laravel app must be on the same top-level domains in order for this to work. 

The last way Sanctum is used is with Mobile apps. This way may be familiar to most because it works similar to jwt based auth. 

Sanctum creates a token on login and the token can be saved on the user’s device. To authenticate the user’s request, the saved token should be passed in on the Authorization header as a Bearer token.

## Laravel Fortify

Laravel Fortify is a headless authentication package. This means Fortify does not have a frontend or UI. It only has the backend functionality for authentication. 

Fortify is not an API authentication system because it only handles cookie based authentication and not token or jwt based. Nothing prevents you from using it as an API but it was not designed to be used that way. You may run into some issues.

So, if it is headless how do we use Fortify? Fortify’s purpose is to handle all the backend auth and allows you to build your frontend UI, such as your login and register pages, using Laravel blade. 

Fortify comes with the following backend features.

- Login
- Register
- Two Factor Authentication
- Password Reset
- Email Verification
- And Password Confirmation for actions that prompt users to re-enter their password, like changing a users email.

Use Fortify when you want to fully customize your frontend UI and use blade.

## Laravel Breeze

Laravel Breeze is a package that provides an authentication backend with the required frontend auth pages and a profile page to manage the user’s profile.

Under the hood, Breeze also uses Laravel Sanctum for APIs.

The pages that come with Breeze are

- Login page
- Register page
- Password Reset page
- Email Verification page
- Password Confirmation page
- And a Profile page.

Here are some screenshots of the pages.

*Profile page*![Profile Page](images/profile-page.jpg)

*Login page*![Login Page](images/login-page.jpg)

*Register page*![Register Page](images/register-page.jpg)


Unlike Fortify, Breeze does not include the backend logic or pages for Two Factor Authentication.

Breeze also gives you the option of selecting what frontend UI you would like to use.

Breeze comes with 4 main options and all are built with Tailwind CSS.

- Blade templates - Laravel’s template engine that can be combine with Livewire
- Inertia.js with  Vue
- Inertia.js with React
- And API - This uses Laravel Sanctum.

I find the API option is the odd one out because it does not come with a frontend UI. You have to install the UI separately. 

The frontend for the API option is located in the [breeze-next repo](https://github.com/laravel/breeze-next). The other difference with the breeze-next frontend UI is that it doesn’t include a profile page.

I would use Laravel Breeze if I wanted to get started very quickly with a simple auth service and I was ok with the current frontend UI’s look and feel. 

And even if I wanted to change the UI’s design, it is styled with Tailwind CSS so updating it shouldn’t be too time consuming.

Breeze is also great to use with other frontend frameworks such as: Next.js, Svelte or Angular because it provides a cookie based API authentication feature.

<div class="react-note-block" data-title="Note">

You should not use Laravel Breeze and Fortify together. They have a lot of the same features except for the Two Factor Authentication and the frontend UI.

You can use Sanctum with either Laravel Fortify or Breeze in the same application because Sanctum does API authentication. 

</div>


## Laravel Jetstream

The biggest of them all is left for last.

Laravel Jetstream is the auth package that does it all. Jetstream took Fortify’s backend, Breeze’s frontend UI pages and Sanctum’s API auth and added more features.

Jetstream provides all the previous packages features plus the following.

- Team Management backend and pages
- Session Management backend and pages
- API Management backend and pages

You can view all the features and pages listed on [Jetstream site](https://jetstream.laravel.com/features/api.html).

You also have the frontend options of using Jetstream with Blade and Livewire or Inertia.js with React/Vue.

I would use Jetstream if I wanted to get all those management features and pages instantly. The amount of features Jetstream gives could save anyone weeks of work and testing.

The main reason not to use Jetstream is if you don’t need all the features it provides. Breeze may be a simpler and better fit for your needs.

<div class="react-note-block" data-title="Note">

Jetstream has all the auth features. There is no need to install any other auth package with it.

</div>


## Wrap up

Let’s wrap up with the answers to the questions I started with.

- Why are there so many packages or ways to do auth in Laravel?
    
    Each package provides something different and has its own use cases. For example, Jetstream has everything needed for an enterprise level SAAS but not every app will need all those features.
    
    Both Breeze and Sanctum provide API authentication but Sanctum is better suited for a project for Mobile apps.
    
    And If need, I can always build my unique auth setup using Laravel's default auth services. Each project has its needs.
    
- Which one should I use?
    
    As stated above, it comes down to your project’s use case.
    
     
    
- Do they all do the same thing?
    
    For the majority part, yes they all create logic to login and register a user. On the other hand, they also have unique features. 
    
    For example, Sanctum provides API authentication for SPAs and Mobile apps while Fortify provides Two Factor authentication and does not have API features.