---
title: How to Install and Switch Between Multiple php Versions
description: I need to use and switch between multiple php version on the same machine.
slug: how-to-install-and-switch-between-multiple-php-versions
date: 2023-08-22 10:00:00
categories: [PHP]
---

## Table of contents

## Introduction

Sometimes, working on multiple php projects on the same machine might cause some issues because each project may be using a different php version. 

In cases like this, I need to use and switch between multiple php version.

Let’s get started by installing multiple php versions.

## Update Homebrew

On MacOS, I will use homebrew to install php. Homebrew is a tool for installing apps on your system. 

Before installing php, update homebrew to make sure it is using the latest version of homebrew.

```bash
brew update
```

<div class="react-note-block">
  
  Homebrew also works on Linux. Find out how to install homebrew [here](https://brew.sh/)

</div>


## Installing Multiple php Versions

Install php@8.0. This will take a minute or so to run.

```bash
brew install php@8.0
```

Test php by running the following.

```bash
php -v

# Yous should see the following output.
PHP 8.0.30 (cli) (built: Aug  5 2023 06:13:11) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.30, Copyright (c) Zend Technologies
    with Zend OPcache v8.0.30, Copyright (c), by Zend Technologies
```

Any command you run that uses php, will use php@8.0 to run the task.

Next let’s install php@8.2.

```bash
brew install php@8.2
```

To check if you have installed php@8.2, go to the folder where homebrew installations are located. Go into the php directory and list the folders there. You should see 8.0 and 8.2 folders.

```bash
cd /opt/homebrew/etc/php && ls
8.0     8.2
```

<div class="react-note-block">

On MacOS, you can not install really old versions of php such as php@7.2, unless you run the  following brew commands.

```bash
brew tap shivammathur/php

brew install shivammathur/php/php@7.2
```

</div>

### Switching versions with Homebrew

> Homebrew installs packages to their own directory and then symlinks their files into `/opt/homebrew`.

To switch between php version, use homebrew to unlink and link the different php versions. Think of each php version as a separate program.

```bash
brew unlink php@8.0

brew link php@8.2
```

<div class="react-note-block">

You must unlink your current version before linking the next version to prevent any unexpected errors.

</div>

Verify your php version was updated.

```bash
php -v

PHP 8.2.9 (cli) (built: Aug 16 2023 21:05:35) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.2.9, Copyright (c) Zend Technologies
    with Zend OPcache v8.2.9, Copyright (c), by Zend Technologies
```

## Switching Versions on Linux

If you are on Linux and didn’t use homebrew, you may need to swich versions by using the following commands. Before switching versions, verify you have the required php versions installed. 

```bash
# switch up - from current php@8.0 to php@8.2 
sudo update-alternatives --set php /usr/bin/php8.2

# switch down - from current php@8.2 to php@8.0
sudo update-alternatives --set php /usr/bin/php8.0
```