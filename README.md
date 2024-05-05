# Dockerized monorepo

## Repo summary

The intent of this repo is to be a structure for a fullstack monorepo with an easy developer experience (docker containers with hot reloading and a one start command that works for everyone)

**frontend**

React + Vite + TypeScript

**backend**

NodeJS (esm) + ExpressJS

**database**

Postgresql

## Quickstart

1. download [docker desktop](https://www.docker.com/products/docker-desktop/) (if you don't already have it on your machine) and make sure the app is open
2. clone repo
3. cd to root directory
4. run `sh nuke-docker.sh` to make sure your docker is properly cleaned out
5. run `sh start-docker.sh` to startup everything

#### checking out the db

1. download your favorite db admin gui, I like [TablePlus](https://tableplus.com/)
2. create a new connection with the following

```text
User: user
Password: password
Database: mydatabase
Port: 5432
```

#### demo video

![demo video](./demo-video-monorepo-dockerized-.gif)
