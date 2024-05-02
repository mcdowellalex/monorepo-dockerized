#!/bin/bash

echo "\n======================"
echo "\n...starting backend...\n"

# start backend docker container
docker compose up backend -d

echo "\n... backend container running 🎉..."

echo "\n\n...starting frontend..."

# start backend docker container
docker compose up frontend -d

echo "\n... frontend container running 🎉..."
echo "\n======================\n"

echo "visit localhost:5173 in your browser to see the UI\n"