# A dockerized monorepo

The intent of this repo is to be a structure for a fullstack monorepo with an easy developer experience (docker containers with hot reloading and a one start command that works for everyone)

#### frontend

React + Vite + TypeScript

#### backend

NodeJS (esm) + ExpressJS

#### database

Postgresql

### Quickstart

1. clone repo
2. cd to root directory
3. run `sh nuke-docker.sh` to make sure your docker is properly cleaned out
4. run `sh start-docker.sh` to startup everything

#### checking out the db

1. download your favorite db admin gui, I like [TablePlus](https://tableplus.com/)
2. create a new connection with the following

```text
User: user
Password: password
Database: mydatabase
Port: 5432
```
