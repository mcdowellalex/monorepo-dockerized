# A dockerized monorepo

The intent of this repo is to be a structure for a fullstack monorepo with an easy developer experience (docker containers with hot reloading and a one start command that works for everyone)

#### frontend

React + Vite + TypeScript

#### backend

NodeJS (esm) + ExpressJS

#### database

MongoDB local image https://hub.docker.com/_/mongo

### Quickstart

1. clone repo
2. cd to root directory
3. run `sh nuke-docker.sh` to make sure your docker is properly cleaned out
4. run `sh start-docker.sh` to startup everything

#### checking out the db

1. download [mongodb compass](https://www.mongodb.com/products/tools/compass)
2. create a new connection with uri: `mongodb://localhost:27017`
3. make sure to add the username and password by going to advanced connection options > authentication and adding `username: admin` and `password: password` (can find and update these in the mongodb service section of the `./compose.yaml` )
