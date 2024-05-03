#!/bin/bash

echo "\n======================"


# start postgresql docker container
echo "\n...starting postgresql...\n"
docker compose up postgresql -d 
echo "\n... postgresql container running 🎉..."

# start backend docker container
echo "\n...starting backend...\n"
docker compose up backend -d
echo "\n... backend container running 🎉..."

# start frontend docker container
echo "\n\n...starting frontend..."
docker compose up frontend -d
echo "\n... frontend container running 🎉..."


echo "\n======================\n"

echo "if it did not open automatically, visit localhost:5173 in your browser to see the UI\n"