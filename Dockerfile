FROM google/nodejs
MAINTAINER Rohit Sehgal (rsehgal@iitk.ac.in)

RUN apt-get update
RUN apt-get install build-essential httrack -y
#RUN apt-get install supervisor -y

RUN mkdir -p /home/httrack/

#RUN httrack $URL -O /home/httrack/

RUN npm install -g static-server
#COPY superbisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

ENTRYPOINT ["httrack"]
CMD ["$URL","-O","/home/httrack/","-r5",";/bin/bash"]

