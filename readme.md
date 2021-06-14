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
**Linux Ubuntu**
```sh
sudo apt-get install php7.3-sqlite sqlite3
sudo phpenmod sqlite3
sudo service apache2 restart
```

**Windows OS**
Download [SQL Lite Tools here](https://www.sqlite.org/2021/sqlite-tools-win32-x86-3350500.zip) and unzip file, run sqlite3.exe and make sure php extension php sqlite3 (at php.ini) enabled and then restart your Xampp server or your favorite web server that installed on your OS

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
