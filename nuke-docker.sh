#!/bin/bash

# Stop and remove all containers
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

# Remove all volumes
docker volume rm $(docker volume ls -q)

# Remove all images
docker rmi $(docker images -aq)