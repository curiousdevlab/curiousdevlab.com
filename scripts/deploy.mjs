#! /usr/bin/env node

import { $, echo, chalk, argv } from "zx";

$.verbose = true;

await $`whoami`

/**
 * Make sure server monitor check passes before continuing.
 */
async function monitorPass() {
  const monitorOutput = (
    await $`php artisan servermonitor:check`
  ).stdout.trim();

  if (!monitorOutput.includes("Failed: 0")) {
    try {
      await $`exit 1`
    } catch (p) {
      console.log(chalk.bgRed.black.bold(
        "🚨 Server monitor failed! Fix issues before you continue."
      ))
    }
  }
}

const { firstRun } = argv;

monitorPass();

// git pull and composer install
await $`git pull origin main && \
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev`

// If running for the first time, change folder permissions, generate key, and run migrations
if (firstRun) {
  await $`chmod -R 775 storage && \
  chmod -R 755 bootstrap/cache && \
  `;
}

await $`php artisan config:cache && \
php artisan view:cache && \
php artisan route:cache && \
npm install && \
npm run ssr:build`;

echo(chalk.bgGreen.black.bold("🚀 Application deployed!"))

