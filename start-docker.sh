#!/bin/bash

echo "\n======================"
echo "\n...starting backend...\n"

# start backend docker container
docker compose up backend -d

echo "\n... backend container running 🎉..."

# start frontend docker container
echo "\n\n...starting frontend..."

docker compose up frontend -d

echo "\n... frontend container running 🎉..."
echo "\n======================\n"

echo "if it did not open automatically, visit localhost:5173 in your browser to see the UI\n"