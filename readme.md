
## About the Project

This is my first project using GraphQL, a simple one, designed just for knowledge purposes. In this project you're able to create, update, list and delete "users" and also create and list "profiles"

## Technologies/Frameworks

- NodeJS
- GraphQL
- Apollo-Server
- Knex
- Postgres

## How to run the project

```git clone https://github.com/rafaelmindicelo/graphql-api.git```

Run this script to clone the repository

#

```npm i```

Run this script to install all the dependencies
#
```docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres```

Run this script in order to create a docker postgres container

#

```docker container start postgres```

Run this script to start the container

#

```npx knex migrate:latest```

Run this script in order to update the database with the created migrations

#

```npm start```

This script will start de server. You can make the queries in your browser: localhost:4000