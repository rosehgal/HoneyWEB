#!/bin/bash

mkdir ./logs
docker-compose build
if [ $? -ne 0 ]
then
  echo "Unable to build docker"
  exit
fi
docker-compose up
