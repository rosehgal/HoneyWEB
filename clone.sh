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

ip=
while [[ $ip = "" ]]; do
    read -p "Enter IP address to which you want to bind your mysql server: "  ip
done

docker run -d --name=SQLi-mysql --env="MYSQL_ROOT_PASSWORD=root" --publish $ip:3306:3306 mysql

dpkg -s mysql-client

if [ $? -ne 0 ]
then
    sudo apt-get install mysql-client -y
fi

sleep 60
ip=$(echo "$ip" | xargs)

mysql -u root -proot -h $ip -P 3306 -e 'use mysql;source SQLi/sqli.sql;'

