#!/bin/bash

# start backend docker container
cd backend
docker compose watch &&

echo "... backend container running 🎉..."

cd ../frontend
docker compose up
