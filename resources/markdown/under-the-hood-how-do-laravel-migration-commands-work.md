---
title: "Under the Hood: How do Laravel Migration Commands Work"
description: ""
slug: under-the-hood-how-do-laravel-migration-commands-work
date: 2023-08-27 10:00:00
categories: [Laravel]
tags: [Under the Hood, Migrations]
---

## Table of contents

## Introduction

Ever wondered how Laravel migration commands work under the hood? I have!

I enjoy finding out how things work and in this post I will dig into the inner workings of migrations.

If you are unfamiliar with Laravel’s migration, I recommend you read [How to use migrations]().

Let’s dive in!

## Make Migration Command

Create a migration and insert 2 columns in the `up` method for us to experiment with.

```bash
php artisan make:migration create_organizations
```

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
    public function up(): void // [tl! focus highlight]
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // [tl! add:1 focus:1]
            $table->json('website')->nullable();
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

Since the `make:migration` command is a built in Laravel command, it is located in the `vendor` folder and can be found in the `vendor/laravel/framework/src/Illuminate/Database/Console/Migrations/MigrateMakeCommand.php` file.

```php
/**
 * Execute the console command.
 *
 * @return void
 */
public function handle()
{
    // It's possible for the developer to specify the tables to modify in this
    // schema operation. The developer may also specify if this table needs
    // to be freshly created so we can create the appropriate migrations.
    $name = Str::snake(trim($this->input->getArgument('name'))); // [tl! focus highlight]

    $table = $this->input->getOption('table');

    $create = $this->input->getOption('create') ?: false;

    // If no table was given as an option but a create option is given then we
    // will use the "create" option as the table name. This allows the devs
    // to pass a table name into this option as a short-cut for creating.
    if (! $table && is_string($create)) {
        $table = $create;

        $create = true;
    }

    // Next, we will attempt to guess the table name if this the migration has
    // "create" in the name. This will allow us to provide a convenient way
    // of creating migrations that create new tables for the application.
    if (! $table) {
        [$table, $create] = TableGuesser::guess($name); // [tl! focus highlight]
    }

    // Now we are ready to write the migration out to disk. Once we've written
    // the migration out, we will dump-autoload for the entire framework to
    // make sure that the migrations are registered by the class loaders.
    $this->writeMigration($name, $table, $create); // [tl! focus highlight]
}

/**
 * Write the migration file to disk.
 *
 * @param  string  $name
 * @param  string  $table
 * @param  bool  $create
 * @return void
 */
protected function writeMigration($name, $table, $create)
{
    $file = $this->creator->create(  // [tl! focus:2 highlight:2]
        $name, $this->getMigrationPath(), $table, $create
    );

    $this->components->info(sprintf('Migration [%s] created successfully.', $file));
}
```

The `handle()` method in the above file is responsible for running the `make:migration` command.

The `make:migration` command is quite simple at its core and does the following:
- Gets the name of the migration from the command line using line 11.
- Guesses the table name from the migration name using line 30.
- And then creates a migration file using line 36.

In the `writingMigration` method, the `create` method is called on the `creator` object. The `creator` object is an instance of the `vendor/laravel/framework/src/Illuminate/Database/Migrations/MigrationCreator.php` class.


This `create` method handles:
- Check if the new migration file doesn't exists and the migrations folder exists. If not, it will create the migrations folder.
- Copy the migration stub file to the new migration file and replace the placeholders with the correct values.

```php
 /**
     * Create a new migration at the given path.
     *
     * @param  string  $name
     * @param  string  $path
     * @param  string|null  $table
     * @param  bool  $create
     * @return string
     *
     * @throws \Exception
     */
    public function create($name, $path, $table = null, $create = false)
    {
        $this->ensureMigrationDoesntAlreadyExist($name, $path); // [tl! focus highlight]

        // First we will get the stub file for the migration, which serves as a type
        // of template for the migration. Once we have those we will populate the
        // various place-holders, save the file, and run the post create event.
        $stub = $this->getStub($table, $create);

        $path = $this->getPath($name, $path);

        $this->files->ensureDirectoryExists(dirname($path)); // [tl! focus highlight]

        $this->files->put(
            $path, $this->populateStub($stub, $table) // [tl! focus highlight]
        );

        // Next, we will fire any hooks that are supposed to fire after a migration is
        // created. Once that is done we'll be ready to return the full path to the
        // migration file so it can be used however it's needed by the developer.
        $this->firePostCreateHooks($table, $path);

        return $path;
    }
```

To view all your migration stubs, go to the `vendor/laravel/framework/src/Illuminate/Database/Migrations/stubs` folder.

## Run Migration Command

Migrations are usually ran with the following command.

```bash
php artisan migrate
```

Just like the `make:migration` command, the `migrate` is also located in the `vendor` folder and works by calling the `handle` method in the `vendor/laravel/framework/src/Illuminate/Database/Console/Migrations/MigrateCommand.php` file.

<div class="react-note-block" dat-title="Note">

All the migration commands are located in the `vendor/laravel/framework/src/Illuminate/Database/Console/Migrations` folder.

</div>

All Laravel command classes have a `handle()` method and the migrate commands are no different.

```php
/**
 * Execute the console command.
 *
 * @return int
 */
public function handle() // [tl! focus highlight]
{
    if (! $this->confirmToProceed()) { // [tl! focus:2 highlight:2]
        return 1;
    }

    $this->migrator->usingConnection($this->option('database'), function () {
        $this->prepareDatabase(); // [tl! focus highlight]

        // Next, we will check to see if a path option has been defined. If it has
        // we will use the path relative to the root of this installation folder
        // so that migrations may be run for any path within the applications.
        $this->migrator->setOutput($this->output)  // [tl! focus:4 highlight:4]
            ->run($this->getMigrationPaths(), [
                'pretend' => $this->option('pretend'),
                'step' => $this->option('step'),
            ]);

        // Finally, if the "seed" option has been given, we will re-run the database
        // seed task to re-populate the database, which is convenient when adding
        // a migration and a seed at the same time, as it is only this command.
        if ($this->option('seed') && ! $this->option('pretend')) {
            $this->call('db:seed', [
                '--class' => $this->option('seeder') ?: 'Database\\Seeders\\DatabaseSeeder',
                '--force' => true,
            ]);
        }
    });

    return 0;
}
```
Laravel does a great job of commenting their code to make it easy to understand what is going on.

I highlighted the lines that do most of the work.

<div class="react-note-block" data-title="Tip">

If you are using VSCode on Mac OS, you can jump to methods and classes by holding down the `command` key and clicking on the method or class name.

You can also search for files with `command + p` and then type the file name.

</div>


Lines 8 - 10 checks if we are in production and if we are, it will ask us to confirm that we want to run the migration. The confirmation can be by passed if we include the force param.

```bash
php artisan migrate --force
# Run in production without confirmation
```

You can check out the `confirmToProceed()` method in the `vendor/laravel/framework/src/Illuminate/Foundation/Console/ConfirmableTrait.php` file.


Line 13 calls the `prepareDatabase()` method. This method is responsible for a few things: 
- Ensuring that the database provided in your .env file exists 
- For creating the migrations table in the database. Laravel run the `php artisan migrate:install` command silently to generate the migrations table.
- And for running any available schema.sql files before any other migrations. Schema files are generated with the `php artisan schema:dump` command.


Lines 18 - 22 does most of the heavy lifting. The migrator objects calls the `run()` method in the `vendor/laravel/framework/src/Illuminate/Database/Migrations/Migrator.php` file.

```php
/**
 * Run the pending migrations at a given path.
 *
 * @param  array|string  $paths
 * @param  array  $options
 * @return array
 */
public function run($paths = [], array $options = []) // [tl! focus highlight]
{
    // Once we grab all of the migration files for the path, we will compare them
    // against the migrations that have already been run for this package then
    // run each of the outstanding migrations against a database connection.
    $files = $this->getMigrationFiles($paths); // [tl! focus highlight]

    $this->requireFiles($migrations = $this->pendingMigrations( // [tl! focus:1 highlight:1]
        $files, $this->repository->getRan()
    ));

    // Once we have all these migrations that are outstanding we are ready to run
    // we will go ahead and run them "up". This will execute each migration as
    // an operation against a database. Then we'll return this list of them.
    $this->runPending($migrations, $options); // [tl! focus highlight]

    return $migrations;
}
```

The `run` method does the following:
- Gets all the migrations from the `database/migrations` folder using line 13
- Checks to see which migrations ran using lines 15 - 16 `$this->pendingMigrations( $files, $this->repository->getRan())`
 - And runs only the pending migrations by calling the `up()` method in each migration file using line 22.  


At a high level, the `runPending` method also does quite a bit.
Let's dig deeper to see how far we need to go to run the migrations `up()` method. 

Go into the `runPending` method and you will see a few `$this->fireMigrationEvent` calls and the `runUp` method called in a loop.

Listeners can be created to use the fireMigration events to hook into the migration process. You can read more about that in the [Laravel docs](https://laravel.com/docs/10.x/migrations#events).

The `runUp` method is called per migration file. Within the `runUp` method the `runMigration` method is called as shown.

```php
 /**
 * Run "up" a migration instance.
 *
 * @param  string  $file
 * @param  int  $batch
 * @param  bool  $pretend
 * @return void
 */
protected function runUp($file, $batch, $pretend) // [tl! focus highlight]
{
    // First we will resolve a "real" instance of the migration class from this
    // migration file name. Once we have the instances we can run the actual
    // command such as "up" or "down", or we can just simulate the action.
    $migration = $this->resolvePath($file);

    $name = $this->getMigrationName($file);

    if ($pretend) {
        return $this->pretendToRun($migration, 'up');
    }

    $this->write(Task::class, $name, fn () => $this->runMigration($migration, 'up')); // [tl! focus highlight]

    // Once we have run a migrations class, we will log that it was run in this
    // repository so that we don't try to run it next time we do a migration
    // in the application. A migration repository keeps the migrate order.
    $this->repository->log($name, $batch);
}
```

Take note of the the `up` param that is passed to the `runMigration` method. This is the method that actually updates the database. 

Open a migration file and you will see the `up` method. This method is responsible for creating SQL statements and running them against the database.

The `runMigration` method is also responsible for running the migration within a transaction, if the current database supports transactions. This is done to ensure that if an error occurs, the database can be rolled back to the state before the migration was ran.

```php
 /**
 * Run a migration inside a transaction if the database supports it.
 *
 * @param  object  $migration
 * @param  string  $method
 * @return void
 */
protected function runMigration($migration, $method) // [tl! focus highlight]
{
    $connection = $this->resolveConnection(
        $migration->getConnection()
    );

    $callback = function () use ($connection, $migration, $method) {
        if (method_exists($migration, $method)) {
            $this->fireMigrationEvent(new MigrationStarted($migration, $method));

            $this->runMethod($connection, $migration, $method); // [tl! focus highlight]

            $this->fireMigrationEvent(new MigrationEnded($migration, $method));
        }
    };

    $this->getSchemaGrammar($connection)->supportsSchemaTransactions() // [tl! focus:3 highlight:3]
        && $migration->withinTransaction
                ? $connection->transaction($callback)
                : $callback();
}
```

From the `runMigration` method, the `runMethod` method is called which is the root of execution. The `runMethod` method calls the `up` method in the migration file. The `$migration->{$method}();` is the same as calling `$migration->up();` because the `$method` variable is set to `up`.

```php
 /**
 * Run a migration method on the given connection.
 *
 * @param  \Illuminate\Database\Connection  $connection
 * @param  object  $migration
 * @param  string  $method
 * @return void
 */
protected function runMethod($connection, $migration, $method) // [tl! focus highlight]
{
    $previousConnection = $this->resolver->getDefaultConnection();

    try {
        $this->resolver->setDefaultConnection($connection->getName());

        $migration->{$method}(); // [tl! focus highlight]
    } finally {
        $this->resolver->setDefaultConnection($previousConnection);
    }
}
```

<div class="react-note-block" data-title="Note">

  Majority of the method calls shown above all fall in the `vendor/laravel/framework/src/Illuminate/Database/Migrations/Migrator.php` file.
  The Migrator class handles most of the logic for running migrations.

</div>

## Other Migration Commands

There are other migrate commands that are used to manage migrations such as:
- `php artisan migrate:rollback`
- `php artisan migrate:refresh`
- `php artisan migrate:reset`
- and so on

Each command is split into its own class and can be found in the `vendor/laravel/framework/src/Illuminate/Database/Console/Migrations` folder.

I won't get into each command but they all use the `Migrator.php` class to run migrations very similarly to the `MigrateCommand.php`.

Once you go through and understand the `MigrateCommand.php` file, you will be able to understand the other migration commands.