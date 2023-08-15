# Only run this for the very first time you deploy your application.
# cd into project first

git pull origin main

composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# change permissions


php artisan key::generate
php artisan migrate

npm install
npm run ssr:build

whoami
echo "🚀 Application deployed!"