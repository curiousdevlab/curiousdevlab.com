## Curious Dev Lab
Learn. Code. Write.

## Run The Project
This site is built with React, Inertia, Laravel and Tailwind CSS. 

To run the project, you need to have PHP, Composer, NVM installed on your machine. Then, follow these steps:

Clone the project. 

```bash
git clone repo-https-link
```

Move into project directory. 

```bash
cd curiousdevlab
```

Install php dependencies.

```bash
composer install
```

Switch to the projects node version. 

```bash
nvm use
```

Install node dependencies.

```bash
npm install
```

Set up the environment file.

```bash
cp .env.example .env
php artisan key:generate
# nano .env
# Add database credentials
```

Build the front-end assets for development

```bash
npm run dev
```

Host the project on a local server.

```bash
valet links # check if curiousdevlab.test is available
# if not run the below command in projects root
valet link 
valet open
```

Start coding away!

### SSR Mode

Run the project in SSR mode.

```bash
npm run ssr:build
php artisan inertia:start-ssr
```

## Inertia Custom Build
This project currently has a custom build of inertia. The build is located in `resources/js/inertiajsflow`.

I manually copy the built files to this folder to use in the project.

If you want to customize the build. Check out this project (provide link later).

## Caching
Disabled for now.
This project uses the `spatie/laravel-responsecache` package to cache responses. All cache is stored in `public/page-cache`.

The cache doesn't work as expected in dev mode, because we need an updated nginx config to server static pages and currently I can't do that with valet. The inertia cache works as expected in dev mode. Pages are cached in the client browser.

The inertia custom build and the responsecache package work together to create json and html cache files to reduce the server load.
Request rarely hit laravel. Nginx just serves up the static cache files. 

With this setup, the server can handle about 1K request per second on a $5 Linode server, maybe even more. I made 600K request in 10 minutes with no issues.

## Commands

Clear cached files.

```bash
# Clear all
php artisan page-cache:clear

# Clear 1 url
php artisan page-cache:clear urlPath

```
Or manually delete the files or folder to achieve the same result.

---

Server Monitoring
Check `config/server-monitor.php` for more info.

```bash
php artisan servermonitor:check
```

## Scripts

### How to run scripts
From the root directory run the following

```bash
# first time deploy use
./scripts/deploy.mjs --firstRun
# deploy
./scripts/deploy.mjs
```

Build post listing
```bash
# prod listing
./scripts/buildPostsJson.mjs

# dev listing
./scripts/buildPostsJson.mjs --dev
```