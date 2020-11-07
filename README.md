#My test Application

Solution of the test problem at the link 
https://docs.google.com/document/d/1ZKQsBJAWQDFz3VCv8llk4sVW-SrdTZW9IScyuLuJGCc/edit


## Features

- Laravel 7, React, React Router
- React Hook, React Context for state management
- REST Full API for sending messages


## Installation

- Clone the repo
- Installing all Composer & NPM dependencies.

```bash
composer install && npm install
```

- Copy .env.example to .env
- Generate app key

```bash
php artisan key:generate
```

- Run database migration

```bash
php artisan migrate:fresh
```

- Generate JWT secret

```bash
php artisan jwt:secret
```

- Compiling Assets

```bash
npm run dev
```
