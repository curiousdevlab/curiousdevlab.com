---
title: Connect Laravel to a Remote Database
description: This is an example post with code and other stuff
slug: connect-laravel-a-remote-database
date: 2023-08-28 10:00:00
categories: [Laravel]
---

## Table of contents

## Introduction

When working with Laravel I sometimes need to connect to a remote database from my local machine. 

Some server providers have a UI feature that allow you to add an IP address to your database or they may even provide a database UI to make connecting remotely easy. In cases where these features are not available, I have to manually connect to the database by other means. 

I can do that by using one of the following ways.

- By updating the server’s firewall and database’s config to make the remote database publicly available
- Or by creating a ssh tunnel and using the secure tunnel to connect to the database

In this post, I will be sharing how I used the second option to remotely connect to the database. I prefer using the second option because it keeps my database secure.

To get started I already had the mysql cli tool installed on my mac and a Linode server that holds both an active Laravel app and a mysql database.

I also had a Laravel app on my local machine and I wanted to connect the app to the remote database. To do that I set up a ssh tunnel. 

<div class="react-note-block">

Have your server’s ip address, username and password along with the mysql's username and password ready. You will need them to create the ssh tunnel and connect to the database.

</div>

## Create a ssh Tunnel

A ssh tunnel is a secure continuous connection that connects one machine to another and allows them to pass data and instructions back and forth. In my case, I connected my mac to my Linode server and passed SQL command to the server.

To create a ssh tunnel I ran the following command.

```php
ssh -NL 3307:127.0.0.1:3306 dev@192.155.88.108 
```

On running the command, I was prompted to enter a password. This the server password for the dev user and not the mysql password.

Let’s break down the command.

- -N tells the ssh command to disable running the user shell from the server. If you want to open the server’s user terminal, remove this option.
- -L tells ssh to make a tunnel based on the ports and host given.
- 3307 is the port number on my mac I wanted to use for the mysql connection. You most likely have mysql installed and it uses port 3306. Use any free ports between 3307 - 3320 to avoid conflicts.
- 127.0.0.1 is the host that mysql uses on the server to make connections. 127.0.0.1 ensures only apps on the same server can use the database.
- 3306 is the mysql port on the server.
- dev@192.155.88.108 is the username and the server ip address where the database is located. Update this section to use your servers username and ip

<div class="react-note-block">

  The mysql host and port can be found in the mysql config on the server. If your mysql config has a different value for the port like 3360 instead of 3306, update the above command to use the right port.

</div>

If you are following along and all went well, there should not be any errors or output information, just a blinking cursor because we used the -N option.

I kept the terminal tab open. If I closed the window the tunnel will close. To run tunnels in the background I could use the `-f` option on the ssh command.

## Use the Tunnel

Next I used the tunnel by logging into the server’s mysql database.

To connect to mysql I ran this command in a second terminal tab because I had to keep the terminal with the tunnel open.

```bash
mysql -u dev_user -h 127.0.0.1 -P 3307 -p
```

The command prompted me to enter another password. This is the mysql password for the mysql user, dev_user.

- -u dev_user represents the mysql user on the server
- -h 127.0.0.1 represents the mysql host on the server. If left out mysql will try to use `localhost ` and that will fail.
- -P represents the port number on my machine that I told the ssh tunnel to use for the mysql connection. If you left this out the mysql command would try to use your local database instead of the remote one.
- -p tells the command we reuire a password and to prompt the user to enter it.

Once I logged in, I verified that I was using the remote database by checking the databases.

```bash
SHOW DATABASES;
```

I saw my remote databases and not my local ones. Success!

## Use Remote Database in Laravel Project

With the help of a ssh tunnel, mysql commands and other database tools treat remote databases as if they were on the local machine. 

You can also connect to your local databases at the same time. The main difference is the port number.

Since the tunnel makes remote database appear local, my Laravel project won’t know the difference. I updated my `.env` file. 

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=laravel
DB_USERNAME=dev_lab
DB_PASSWORD="long-password" 
```
If you are following along, update the above env values to match yours.

I tested my connection by starting a Laravel tinker session and ran a sql query. The `getDatabaseName` method doesn’t run any sql queries. It just checks the env variable. 

```bash
php artisan tinker

DB::connection()->getDatabaseName();
= "laravel"

$projects = DB::table('projects')->limit(10)->get();
```

It worked!

Everything was done correctly so I got no errors and the query was executed.

I closed my ssh tunnel and ran the query again and that time it failed with the following output. 

```bash
SQLSTATE[HY000] [2002] Connection refused (Connection: mysql, SQL: select * from `projects` limit 10).
```

The ssh tunnel is not just limited to databases. It can be used with any tool on your server that uses a port.