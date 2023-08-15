
# cd into project first

git pull origin main

composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache

npm install
npm run ssr:build

whoami
echo "🚀 Application deployed!"