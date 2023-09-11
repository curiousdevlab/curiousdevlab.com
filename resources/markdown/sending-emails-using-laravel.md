---
title: Sending Emails Using Laravel
description: Sending emails with Laravel is quick and easy. Laravel comes with mailing features out of the box.
slug: sending-emails-using-laravel
date: 2023-08-25 10:00:00
categories: [Laravel]
---

## Table of contents

## Introduction

Sending emails with Laravel is quick and easy. Laravel comes with mailing features out of the box.

You have the options of using a third party mailing provider or Laravel’s default mailing.

In this post , we will demonstrate how to send a simple email.

## Create a Mail Class

Before we can start sending emails, we need to create a mail class using the following Laravel command.

```php
php artisan make:mail NewContentPublished
```

The following file below should have been created. Each mail class created contains the logic for sending a specific email template. In this case we are creating an email that is sent when new content is published to the site. 

<div class="code-title">
  app/Mail/NewContentPublished.php
</div>

```php
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewContentPublished extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Content Published',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
```

## Create an Email View Template

Now, we need to create an email template and update the content method in  `NewContentPublished.php` to let the class know which template to use to send emails.

Create an email template called `new-content-published.blade.php` in the following folder `resources/views/emails`. You may need to create the emails folder. 

<div class="code-title">
  Terminal
</div>

```bash
mkdir -p resources/views/emails
touch resources/views/emails/new-content-published.blade.php
```

Email templates are blade files just like the other files found in the views folder.

Let’s update the template to have some content.

<div class="code-title">
  resources/views/emails/new-content-published.blade.php
</div>

```html
<p>Hi Mam/Sir,</p>
<br/>

<p>The following content has been published on the website.</p>
<br/>

<p>Thank you for your time.</p>
```

<div class="react-note-block" data-title="Note">

  Email clients don’t support modern css and html syntax, so keep your email templates simple and clean for the best viewing experience.

</div>



## Using the Email View

We can update our mail class content method to use the email view we just created.

<div class="code-title">
  app/Mail/NewContentPublished.php
</div>

```php
class NewContentPublished extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Content Published',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name', // [tl! remove] [tl! focus:2]
            view: 'emails.new-content-published', // [tl! add]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
```

## Update Mail env Variables

We are almost ready to send an email. We still need to update our email environment variables, which can be found in the `.env` file. 

For this project's local development, we will be using Mailtrap. 

Mailtrap is an email service used for testing emails. With this service we don’t have to worry about sending emails to real email addresses. Mailtrap will catch all your sent emails and display them in the Mailtrap dashboard.

For a production app, you will need to switch out Mailtrap credentials to use either your business or personal email. 

If you have a high volume of emails it’s best to use a business email or an email provider service such as: Mailgun, Mailsender or AWS SES.  For email providers, there are a bit more steps required to get them working. That’s outside the scope of this post.

### Create Mailtrap Account

Create a free account on [Mailtrap]((https://mailtrap.io/)) and get your mailing credentials. After you login, you should see your Home page. If not, you can access the Home page from the left sidebar navigation.

Click the Start Testing Button.

![Mailtrap Home page](images/mailtrap-home.jpg)

Then click the gear icon to go the demo inbox settings.

![Mailtrap demo inbox settings](images/demo-settings.jpg)

In the Integrations dropdown, select Laravel 9+.

![Mailtrap Integrations](images/mailtrap-integrations.jpg) 

You should then see your env variables to use Mailtrap in your Laravel project.

Open the .env and update the mail variables with your Mailtrap credentials.

<div class="code-title">
  .env
</div>

```bash
# torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
APP_NAME=Laravel

# ... other variables

MAIL_MAILER=smtp # [tl! add:4]
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=add-your-username
MAIL_PASSWORD=add-your-mailtrap-password
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

# ... other variables
```

<div class="react-note-block" data-title="Note">

 There is a `MAIL_FROM_ADDRESS` and `MAIL_FROM_NAME` variable in the above env. You can changes these as you please. These are used as the defaults for the emails from address and name.

</div>

Our NewContentPublished class is ready to be used. 

## Send an Email Through a Request

Let’s create a route that will receive a request and send our email.

Go to your routes file `routes/web.php` and update it to have a `/mail` route to send the new content published email on request.


<div class="code-title">
  routes/web.php
</div>

```php
use Illuminate\Support\Facades\Mail;

// Other routes

Route::get('/mail', function () {
    // Some new content was published
    Mail::to('hello@example.com')->send(new App\Mail\NewContentPublished());
    return response()->noContent();
});
```

Start and open your laravel project to visit the route.

If you are using the `php artisan serve` command to host your site, visit http://localhost:8000/mail 

After visiting the route, check your Mailtrap demo inbox and you should see a new email. Click it open to view it.

![New Content Published email](images/new-content-published-email.jpg)

## Previewing Emails Without Sending Them

We also have the option of previewing an email right in the browser without sending them out.

Add a preview route to the web.php routes and add the following logic.

<div class="code-title">
  routes/web.php
</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
use Illuminate\Support\Facades\Mail;

// Other routes

Route::get('/mail', function () {
    // Some new content was published
    Mail::to('hello@example.com')->send(new App\Mail\NewContentPublished());
    return response()->noContent();
});

Route::get('/preview', function () { // [tl! add:3 focus:3] 
    return new App\Mail\NewContentPublished();
});
```

Visit your projects `/preview` path in the browser to see the email preview.


## Dynamic Email Content

There may be instances, you would like to make the email template a bit more personal or dynamic. You can do that by passing in data into the email view. 

Remember our email view is just a Laravel blade view. That means we can use all the blade features in our email view.

There are two ways to pass data to the email view.

- By passing data to the `NewContentPublished` class constructor and assigning the values to public properties
- And by using the `with` param on the `new Content` class found in the `content` method.

You can use both or just one.

Here is how you update the `NewContentPublished` class to use custom data

<div class="code-title">
  app/Mail/NewContentPublished.php
</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewContentPublished extends Mailable
{
    use Queueable, SerializesModels;

    public $userName = 'Sir or Madam'; // [tl! add]

    public $contentTitle; // [tl! add]

    /**
     * Create a new message instance.
     */
    public function __construct($title, $userName = null)
    {
        $this->contentTitle = $title; // [tl! add]

        $this->userName = $userName ?? $this->userName; // [tl! add]
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Content Published',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.new-content-published',
            with: [ // [tl! add:2]
                'websiteUrl' => config('app.url'),
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
```

Update your routes to pass the data to the `NewContentPublished()` class.

<div class="code-title">
  routes/web.php
</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
use Illuminate\Support\Facades\Mail;

Route::get('/mail', function () {
    // Some new content was published
    Mail::to('hello@example.com')->send(new App\Mail\NewContentPublished());// [tl! remove]
    Mail::to('hello@example.com')->send(new App\Mail\NewContentPublished('Learn Laravel Mail')); // [tl! add]
    return response()->noContent();
});

Route::get('/preview', function () {
    return new App\Mail\NewContentPublished(); // [tl! remove]
    return new App\Mail\NewContentPublished('Learn Laravel Routes', 'Peter Pan'); // [tl! add]
});
```

And Finally update your view to use the data.


<div class="code-title">
  resources/views/emails/new-content-published.blade.php
</div>

```blade
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}

<p>Hi Sir or Madam,</p> <!-- [tl! remove] -->
<p>Hi {{ $userName }},</p> <!-- [tl! add] -->

<br/>

<p>The following content has been published on our website.</p> <!-- [tl! remove] -->
<p>The following content: {{ $contentTitle }} has been published on our website at {{ $websiteUrl }}.</p> <!-- [tl! add] -->

<br/>

<p>Thank you for your time.</p>
```

Open your `/preview` and `/mail` routes in the browser to see and send the updated email template.

<div class="react-note-block" data-title="Note">

In production, you will most likely always need to run your emails in the background because emails take quite some time to be sent and you don’t want to make your app feel unresponsive.  

To learn more about running emails in the background check out the [official docs](https://laravel.com/docs/10.x/mail#queueing-mail).

</div>