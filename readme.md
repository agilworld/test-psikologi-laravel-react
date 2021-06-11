# Ibunda Studi Kasus

> This is a repo of [Test Psikologi Laravel React](https://github.com/agilworld/test-psikologi-laravel-react.git) written in Laravel and React JS.


## Installation

Clone the repo locally:

```sh
git clone https://github.com/agilworld/test-psikologi-laravel-react.git
cd test-psikologi-laravel-react
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

if you have no sqlite3 installed. Please go install it first
```sh
sudo apt-get install php7.3-sqlite sqlite3
```

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate:fresh
```

Run database seeder:

```sh
php artisan db:seed
```

Development serve & Build assets:

```sh
php artisan serve
npm run watch
```

You're ready to go! [Visit Demo](http://localhost:8000/) in your browser, and login with:

- **Username:** soeokarno@indonesia.com
- **Password:** 12345678
