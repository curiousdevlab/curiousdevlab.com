---
title: What are Laravel migrations and how to use them?
description: Migrations is a Laravel feature that keeps track of database updates and allows you to run and undo the updates as you like.
slug: what-are-laravel-migrations-and-how-to-use-them
date: 2023-08-23 10:00:00
categories: [Laravel]
tags: [Migrations]
---

## Table of contents

## Introduction

Laravel comes with migrations out of the box. Migrations are not specific to Laravel and many other frameworks have them. Migrations is a Laravel feature that keeps track of database updates and allows you to run and undo the updates as you like.

### Why use migrations?

Three reasons I love using database migrations are because they help with:

- Keeping a history of all your database updates which allows you to undo mistakes.
- Adding default data to the database such as enum data, predefined user roles, or a countries table.
- And they allow other developers to re-create the project’s database structure without an SQL dump. This is very useful in a large team setting where the database structure is updated frequently.

Migrations in an application makes the world of a difference. I use to build apps without migrations and I can never go back to that life.

### When to use migrations?

In my opinion, any project that uses a database, should have migrations or at least some variation of it. Migrations just makes work easier for everyone. 

## Create a laravel project and connect a database.

Get a laravel project up and running. If you need a jump start on getting started check out, my previous post on [Getting Started with Laravel](/introduction-to-installing-and-getting-started-with-laravel).

Once you have a laravel project up, create a database and connect the laravel project to the database. 

If you have mysql installed you can run the following command to create a database. If not, go ahead and use your database tool to create a database manually.

<div class="code-title">
Terminal
</div>

```bash
echo 'CREATE DATABASE `laravel-project`;' | mysql -u root

#if you have a mysql password

echo 'CREATE DATABASE `laravel-project`;' | mysql -u root -p
```

Then update your laravel project’s `.env` file to include the database’s connection details.


<div class="code-title">
.env
</div>

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel-project
DB_USERNAME=root
DB_PASSWORD=
```

Note

It’s ok to use root locally but not in production. In production, create a new database user with a strong password and lower access permissions.

The `.env` file is where you store passwords, private API keys, and other secret tokens you don’t want to expose to anyone. 

The file is also used to set data for the current working environment. That means, you will usually have more than one .env file, one for development, testing, and production.

Using the database details as an example. You don’t want anyone to know your database password when it is online, so that goes into the online server .env file. 

You may also have a different database name and port for your online server so that will also be added to the server’s .env.

Test the database connection by running Laravel’s default migrations.


<div class="code-title">
Terminal
</div>

```bash
php artisan migrate
```

If no errors were thrown, you should see the following output.

![Ran migrations](images/ran-migrations.jpg)

We will get into how those migration work later.

If you check your database using a database management tool, you should see a few new tables added. 

Here is a cli command you can use for a quick check.


<div class="code-title">
Terminal
</div>

```bash
tjgore$ echo "USE laravel-project; SHOW TABLES;" | mysql -u root

Tables_in_laravel-project

failed_jobs
migrations
organizations
password_reset_tokens
personal_access_tokens
users
```

## How to create a migration in Laravel?

We can now create a migration with the following Laravel command.


<div class="code-title">
Terminal
</div>

```bash
php artisan make:migration "create organizations table"
```

The text `create organizations table` should ideally follow this naming. Without the word `create` and the table name `organizations`, Laravel will not do as much code generation for you. 

I will show an example of this later on. It is also good practice to give tables their plural names.

The command creates a file called `2023_08_25_023635_create_organizations_table.php` in the `database/migrations` folder. It uses a date timestamp and the snake case version of the text you passed. Your file name will have a different date.

That’s it you created a migration. Laravel does all the heavy lifting. You still need to run it to update the database though. We will do that in the next section.

## How does it work?

Open the migration file and let’s explore. 

<div class="code-title">
database/migrations/2023_08_25_023635_create_organizations_table.php
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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
}; 
```

The migration command created this nameless php class with two methods `up()` to run the database updates and `down()` to undo them. Under the hood these methods run SQL statements to access the database.

Looking at the migration file, we see a `Schema::create` method and a `$table` object that will create table columns based on the methods called on it. 

Laravel generated this code for us, because we used the word `create` when running the `make:migration` command.

To see what laravel generates for different text, run a few migration commands and open the files in the `database/migrations` folder.


<div class="code-title">
Terminal
</div>

```bash
# same as the migration above
php artisan make:migration create_tasks_table

# simple up() methods, no code generation
php artisan make:migration "add organizations"

```

<div class="react-note-block" data-title="Note">
  
  For the above command, we use quotes around text with spaces.

</div>

After viewing the above migration files, delete them so we don’t run into any duplicate table errors.

Let’s update our migration to use the `$table` objects methods to add a few more columns to the organizations table. There is a long list of available methods found [here](https://laravel.com/docs/10.x/migrations#available-column-types). Check out the docs to learn what each one does.

<div class="code-title">
database/migrations/2023_08_25_023635_create_organizations_table.php
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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id(); // id column
            $table->string('name');
            $table->string('website')->nullable();
            $table->longText('description')->nullable();
            $table->unsignedInteger('employee_count')->default(1);
            $table->boolean('is_active')->default(true);
            $table->json('meta_data');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
```

The only thing left to do is to run the migration.

## Running Migrations

Earlier, we ran the default migrations to test out our database connection. This time around we want to print the SQL statements the migration runs under the hood. This command will not update the database.


<div class="code-title">
Terminal
</div>

```bash
php artisan migration --pretend

create table `organizations` (`id` bigint unsigned not null auto_increment primary key, `name` varchar(255) not null, `website` varchar(255) null, `description` longtext null, `employee_count` int unsigned not null default '1', `is_active` tinyint(1) not null default '1', `meta_data` json not null, `created_at` timestamp null, `updated_at` timestamp null, `deleted_at` timestamp null) default character set utf8mb4 collate 'utf8mb4_unicode_ci'
```

Now run the migration to execute the same SQL statement on the database.


<div class="code-title">
Terminal
</div>

```bash
php artisan migrate
```

Remember, migrations help us to keep a history of all the database updates. In that case, we can  undo the previous migration by running the following.


<div class="code-title">
Terminal
</div>

```bash
php artisan migrate:rollback

INFO  Rolling back migrations.  

2023_08_25_023635_create_organizations_table .......................................................... 8ms DONE
```

You can also check the state of all your migrations by running.


<div class="code-title">
Terminal
</div>

```bash
php artisan migrate:status
```

You should see the following output.

![Migration status](images/migration-status.jpg)

You can also check the database table `migrations` to see all the migrations that have already ran. Missing migrations are still pending. 

Use a database tool if you have one, but you can also view the table with the following command.


<div class="code-title">
Terminal
</div>

```bash
echo 'USE laravel-project; SELECT * FROM migrations;' | mysql -u root

id      migration       batch
22      2014_10_12_000000_create_users_table    1
23      2014_10_12_100000_create_password_reset_tokens_table    1
24      2019_08_19_000000_create_failed_jobs_table      1
25      2019_12_14_000001_create_personal_access_tokens_table   1
```

## Create an update migration

We created a migration that creates a new table but there will be times you want to create a migration to update a table that we can not rollback because it has data or is already in production. 

To do that, run one of the following migration commands which will create a migration with an `up()` method that will use the `Schema::table()` method and not the `Scheme::create()` method.


<div class="code-title">
Terminal
</div>

```bash
# Only run one, not both commands
php artisan make:migration add_address_to_organizations_table

#or

php artisan make:migration add_organizations_address --table=organizations 
```

The command will create the following migration.

<div class="code-title">
database/migrations/2023_08_25_051335_add_address_to_organizations_table.php
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
        Schema::table('organizations', function (Blueprint $table) {
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('organizations', function (Blueprint $table) {
            //
        });
    }
};
```

The magic words to make Laravel generate some default code are:

- `to_organizations` in the migration’s name
- or `--table=organizations`

Without any of these, an empty migration file would be created and you would need to add the `Schema::table` method.

Let’s update the migration to add an address column, rename the name column to brand_name, and update the meta-data column to be nullable.

<div class="code-title">
database/migrations/2023_08_25_051335_add_address_to_organizations_table.php
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
        Schema::table('organizations', function (Blueprint $table) {
            $table->string('address')->nullable();
						$table->renameColumn('name', 'brand_name');
            $table->json('meta_data')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('organizations', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->json('meta_data')->nullable(false);
						$table->renameColumn('brand_name', 'name')->change();
        });
    }
};
```

The `down()` method reverts the table back to its original state.

Run the migration and check your database.


<div class="code-title">
Terminal
</div>

```bash
php artisan migrate
```

<div class="react-note-block" data-title="Note">

You can also use migrations to run any database SQL statement you want. For example, you can use a migration to populate a table with readonly data.

</div>

## Manually accessing migrations.

There may be a time a migration fails to run because of a error in the code and you are stuck. Migrations won’t run or rollback. 

In cases like that, you can manually go to the migrations table in your database and see if any rows have the name of the migration that failed. 

If the migration is there, you can delete that table row from the migrations table and delete the new table or revert the columns the migration added. After that clean up, try running the migration again.

You can also manually update a migration file name to make it run before or after other migrations. 

Migrations are ran in the order of their timestamped names, which are listed in your IDE from top to bottom.
