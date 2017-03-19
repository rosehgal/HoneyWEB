#!/bin/bash

<<COMMENT
if [ "$EUID" -ne 0 ]
then
  echo "Please run as root *"
  exit
fi
COMMENT

dpkg -s httrack

if [ $? -ne 0 ]
then
  echo "Httrack is not installed...Installing"
  sudo apt-get install httrack -y
fi

if [ $# -eq 0 ]
then
  echo "No argument/URL provided to clone?"
  exit
fi

mkdir ./serverDocker/clonned_website
httrack $1 -O ./serverDocker/clonned_website

mkdir ./serverDocker/clonned_website/$1/SQL
cp ./SQLi/index.html ./serverDocker/clonned_website/$1/SQL/index.html
cp ./SQLi/login.php ./serverDocker/clonned_website/$1/SQL/login.php
sed -i 's+<body>+<body><p><a href="./SQL/index.html">LOGIN</a></p>+g' ./serverDocker/clonned_website/$1/index.html
