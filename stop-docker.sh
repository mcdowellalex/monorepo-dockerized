#!/bin/bash

# Stop all Docker containers
docker stop $(docker ps -aq)