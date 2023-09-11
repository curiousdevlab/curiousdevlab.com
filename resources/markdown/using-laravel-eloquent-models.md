---
title: Using Laravel Eloquent Models
description: This is an example post with code and other stuff
slug: using-laravel-eloquent-models
date: 2023-08-29 10:00:00
categories: [Laravel]
---

## Table of contents

## Introduction

In Laravel, we use Eloquent Models to run SQL queries for the database. Eloquent is an object-relational mapper (ORM). An ORM is code that generates and executes SQL.

Instead of writing SQL statements like this `SELECT * FROM projects;` you will use Eloquent to run the following `Projects::all()`. Under the hood Eloquent takes over and generates the above SQL query.

Models are a representation of database tables in the codebase and use the ORM. Each database table has a model and are usually classes. In the `Project::all()` Eloquent example, the model is a Project php class. Models allow you to add more functionality to tables.

Even though Laravel use Eloquent, you can still opt out of it and run raw SQL queries.

To follow along you should know how to or already have an fresh Laravel project that is connected to a database.

## Create a Model

To create a model run the following command. Since a model also uses a database table let’s also create a table using migrations.

<div class="code-title">
  Terminal
</div>

```bash
php artisan make:model Project -m
```

This command will generate 2 files

-   a Model with a Project class at `app/Models/Project.php`
-   and a migration at `database/migrations/2023_09_07_042738_create_projects_table.php`

Update the migration to have some columns on the table.

<div class="code-title">
database/migrations/2023_09_07_042738_create_projects_table.php
</div>

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
```

Run the migration to create the projects table.

<div class="code-title">
  Terminal
</div>

```bash
php artisan migrate
```

## Using the Model

To use the model we will just use a Laravel artisan tinker session to demonstrate the model’s features.

Open a terminal and run the following.

<div class="code-title">
  Terminal
</div>

```bash
while true; do php artisan tinker; done
```

<div class="react-note-block">

We are running the Laravel command in a bash loop because the tinker session doesn’t refresh when there are code changes.

</div>

This command will start a session that is running the Laravel project. With this you can run code as if it is running in the app.

Lets query the database using the following command.

<div class="code-title">
  Terminal
</div>

```bash
Projects::all();
```

If you get the following error `Error Class "Project" not found.`, close the session with `CTRL + C`, run `composer dump-autoload` , start tinker again `php artisan tinker` , and try the command again.

If everything worked, You should see this output which is an empty Eloquent collection because the project’s table is empty.

<div class="code-title">
  Terminal
</div>

```bash
Illuminate\Database\Eloquent\Collection {#6996
    all: [],
  }
```

Let’s add some data to the project table using the Project Eloquent Model.

<div class="code-title">
  Terminal
</div>

```php
 Project::create(["name" => "Test Project", "description" => "A short description"]);
```

This will cause the following error because we need to tell our model it can use mass assignment methods such as `create()` and `update()`.

<div class="code-title">
  Terminal
</div>

```bash
Illuminate\Database\Eloquent\MassAssignmentException  Add [name] to fillable property to allow mass assignment on [App\Models\Project].
```

Mass assignment is done when a database rows is created or updated by passing in an array of values and Laravel prevents this action by default. This is done to avoid you from creating or updating unwanted columns on the database.

An example of where this could be helpful is to prevent a password column in a user’s table from being created or updated unintentionally. In this case we don't need mass assignment protection.

Update the Model to allow mass assignments.

<div class="code-title">
  app/Models/Project.php
</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

	protected $guarded = []; // [tl! add]
}
```

This tells the model that nothing is guarded against mass assignment.

You can accomplish the same results with the `fillable` property by replacing `guarded` with the following.

<div class="code-title">
  app/Models/Project.php
</div>

```php
// torchlight! {"diffIndicators": true, "diffIndicatorsInPlaceOfLineNumbers": true}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

	protected $guarded = []; // [tl! remove]
    protected $fillable = ['name', 'description', 'active']; // [tl! add]
}
```

This is very common in most Laravel projects and you will see either fillable or guarded being used.

There is a way to insert or update a project without mass assignment, by using the save method. We will go over an example of that later in this post.

Let’s reload our tinker session with `Ctrl + D` and try adding a project again.

<div class="code-title">
  Terminal
</div>

```php
Project::create(["name" => "Test Project", "description" => "A short description"])
```

<div class="react-note-block">

Tinker does not reload the laravel app on code changes. You must use `Ctrl + D` to get the updated code into the tinker session.

</div>

This time around you should not see any errors.

Check the database using the Eloquent Model as well.
<div class="code-title">
  Terminal
</div>

```php
Project::all();
```

## Eloquent Model Methods Examples

Eloquent Models come with a long list of methods that can be used to perform SQL query.

We already used the create() and all() method above. Let’s use a few more examples in the tinker session to show the power of Eloquent.

Eloquent Models also support using raw query statements. Anything you can do with SQL statements you can do with Eloquent Models. Learn more from the [Laravel docs](https://laravel.com/docs/10.x/eloquent)

<div class="react-note-block">

All the code written below can be used anywhere in your Laravel app. Just remember to import the model in the file that it is being used in.

</div>

Another way to create a project using the save method. This allows us to insert rows without updating the Model for mass assignment.

<div class="code-title">
  Terminal
</div>

```php
$project = new Project();

$project->name = "Awesome Project";
$project->description = "This is a long description";

$project->save();

```

Create many projects. Only the name column is a required column.

<div class="code-title">
  Terminal
</div>

```php
// Each array group must have the same keys
Project::insert([
    [
        "name" => 'Create a new website',
        "active" => true,
    ],
    [
        "name" => "Write a new blog post",
        "active" => true,
    ],
    [
        "name" => "Update the documentation",
        "active" => false,
    ],
]);

Project::all()->toArray();

```

Find a project by id and access it values.

<div class="code-title">
  Terminal
</div>

```php
$project = Project::find(4);

$project->name;
$project->active;

```

Update a project. You can update a project the same as you create aproject with the save() method.

<div class="code-title">
  Terminal
</div>

```php
$project = Project::find(2);

$project->name = "Cool Project";
$project->description = "This is a long description";

$project->save();

Project::find(2);

```

Get a project where the name has “Cool”.

<div class="code-title">
  Terminal
</div>

```php
$project = Project::where('name', 'like', '%Cool%')->first();
$project->toArray();

```

Get all projects and order by updated at time.

<div class="code-title">
  Terminal
</div>

```php
Project::orderBy('updated_at', 'DESC')->get();

```

Delete a project by id and by name.

<div class="code-title">
  Terminal
</div>

```php
Project::destroy(2);

Project::where('name', 'Test Project')->delete();

```
