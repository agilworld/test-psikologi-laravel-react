# Ibunda Studi Kasus

> This is a port of the original [Ping CRM](https://github.com/inertiajs/pingcrm) written in Laravel and React JS.


## Installation

Clone the repo locally:

```sh
git clone https://github.com/landish/pingcrm-react.git
cd pingcrm-react
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
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

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run artisan server:

```sh
php artisan serve
```

You're ready to go! [Visit Demo](http://127.0.0.1:8000/) in your browser, and login with:

- **Username:** soeokarno@indonesia.com
- **Password:** 12345678
