---
title: "How to Fix DBeaver Importing Issue: Native Client is Not Specified for Connection"
description: When importing data for the first time into DBeaver, I usually get stuck with an error and can’t import anything. Let's fix it!
slug: how-to-fix-dbeaver-importing-issue-native-client-is-not-specified-for-connection
date: 2023-08-20 19:00:00
categories: [Database]
---

## Table of Contents

## Intro 

DBeaver is my go to database tool.

I use DBeaver because: 

- It is free.
- Works on all popular operating systems: Windows, Mac OS, and Linux.
- Supports many different SQL databases.
- It provides an ER diagram of my databases
- And it is stable (never crashed while in use).

When importing data for the first time into DBeaver, I usually get stuck with an error and can’t import anything. 

Let’s go over how to import a database dump without any issues. 

## Import a Database Dump

Given I already have DBeaver installed and created a database, I right clicked on my database name in the left sidebar, navigated to `Tools` and then clicked `Restore database`.

![Restore Database](/images/click-restore-database.jpg)

After clicking `Restore database`, the Database Import window opened.

## The Error

At the top of the Database Import window, I  saw `Native client is not specified for connection` as shown below.

![Database Import Error](/images/database-import-error.jpg)


If you see that message, you can’t import anything.  The start button is disabled

To fix that error, I needed to tell DBeaver what tool it should use to import data.

## How to Fix the Error

If you are using mysql or postgres, you will need to find the path to your database cli tool and update DBeaver to use that path.

I’m using mysql so I ran the command below.

<div class="code-title">Terminal</div>

```bash
which mysql
/opt/homebrew/bin/mysql
```

For postgres, try running `which psql` or  `which postgresql`.

After getting my path, I went back to the Database Import window and clicked `Local Client` at the bottom left of the import window. 

![Database Import Local Client](/images/import-local-client.jpg)

Another window opened and I clicked the Local Client dropdown and selected `Browse`.

![Database Import Browse](/images/browse.jpg)

I then clicked the `Add Home` button and searched for my mysql path `/opt/homebrew/bin`.

![Add Home Path](/images/add-home.jpg)

To find the path, I used the keyboard shortcut Command + Shift + G and typed `/opt/homebrew/bin` and clicked Open in that folder. 
You don't need to add `mysql`, only `/opt/homebrew/bin` as shown below.

![Add Home Path](/images/added-path.jpg)

I then clicked the `Ok` buttons to confirm until I got back to the Database Import Window. From there, the `Start` button is now active and I can import my data.

From now on, DBeaver can use the mysql cli tool to import data.