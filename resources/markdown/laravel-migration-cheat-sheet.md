---
title: Laravel Migration Cheat Sheet
description: This is a collection of tips and notes on Laravel’s migration service.
slug: laravel-migration-cheat-sheet
date: 2023-08-26 10:00:00
categories: [Laravel]
tags: [Cheat sheet, Migrations]
---

## Table of contents

## Introduction

This is a collection of tips and notes on Laravel’s migration service.

This is for readers who are familiar with Laravel and want a quick reference to migrations.

Check out this [post](/what-are-laravel-migrations-and-how-to-use-them) to get an introduction to migrations.

## Create Migrations

This command is used to create a migration that creates a new database table.

```bash
php artisan make:migration create_tasks_table
// or
php artisan make:migration "create tasks"
// or
php artisan make:migration create_tasks_table --create=tasks
```
```

This command creates a migration that updates an existing database table.

```bash
php artisan make:migration add_new_column_to_tasks_table
// or
php artisan make:migration "add a new column to tasks"
```

Create an empty migration by omiting the words `create` or `to_database` .

```bash
php artisan make:migration generate_tasks_table 
```

Create a Model and migration to create a new table.

```bash
php artisan make:migration -m Projects

# Output
INFO  Model [app/Models/Projects.php] created successfully.  

INFO  Migration [database/migrations/2023_08_29_031631_create_projects_table.php] created successfully.
```

## Create Migrations Table

You should never really need this but it is a nice to know command. Laravel runs this behind the scenes for your first migration.

```bash
 php artisan migrate:install
```

## Run Migrations

Run all the pending migrations as a batch.

```bash
php artisan migration

# Run migration in production
php artisan migrate --force
```

Run each migration file in a separate batch. Migration file 1 will be batch 1 file 2 will be batch 2 and so on. This makes it easy to revert one migration at a time. Recommended if you have more than one migration.

```bash
php artisan migrate --step
```

Only works with the migrate command, rollback, refresh and others will ignore the `--step` param without a number.


## Migrations Table

- The migrations table keeps track of all your database migrations that ran.
- The batch column in the migration table represents a group of migrations that ran together.

## Undo Migrations

These commands run the down method in a migration file.

Revert all your migrations. This runs the `down()` method in all your migrations which most times drops the table.

```bash
php artisan migrate:reset
```

Revert a single batch of migrations. if your entire database was created with 1 batch of migrations, this will wipe your database.

```bash
php artisan migrate:rollback
```

Revert the given number of migrations using the `—step` param. This will ignore the migration batch order. Recommended

```bash
php artisan migration:rollback --step=2
# Revert only 2 migration files, not bacthes
```

Revert all migrations for the given batch number.

```bash
php artisan migrate:rollback --bacth=3
# Revert only batch 3, not batche >= 3
```

Revert all migrations and run all the migrations again, hence the name refresh. Can also use the `—step` param.

```bash
php artisan migrate:refresh

php artisan migrate:refresh --step=2
```

Drop all tables with the SQL DROP TABLE command and then run migrate command.

```bash
php artisan migrate:fresh
```

## Get Migration Output

Print out the SQL statements that will run. This command will not run any migrations on your database.

```bash
php artisan migrate --pretend

php artisan migration --step=2 --pretend

php artisan migrate:rollback --pretend

php artisan migration:rollback --step=2 --pretend
```

## Get Migration Status

Show all the migrations that have and have not run. 

```bash
php artisan migrate:status
```

## Multiple Migrations Folder

Create another migration folder.

```bash
php artisan make:migration create_projects_table --path "database/other_migrations"

```

Run all the migration commands for another migration folder. 

```bash
php artisan migrate --path "database/other_migrations"

php artisan migrate:rollback --step=2 --path "database/other_migrations"
# Without the path, the migration can't be found even though it is in the DB.

php artisan migrate:refresh --path "database/other_migrations"

php artisan migrate --pretend --path "database/other_migrations"

php artisan migrate:rollback --step=1 --pretend --path "database/other_migrations"
```

## Export or Dump the Database as SQL

<div class="react-note-block" data-title="Warning!!">
  
  Dumps created with these commands do not have the database data, only the database structure and migrations table data.

  Any migration that adds read-only data or enums, you will need to handle manually.

</div>

Create a `database/schema/name-of-file.sql` files with your database structure, without the data.

```bash
php artisan schema:dump
```

Create sql dump from your database without the data and delete the migrations folder.

```bash
php artisan schema:dump --prune

```

If you run the migrate command on a fresh database, the sql dump file will run before running any migrations.

## To Be Continued…