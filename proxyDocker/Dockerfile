FROM r0hi7/nodejs

Maintainer Rohit Sehgal (rsehgal@iitk.ac.in)

RUN apt-get install tcpdump -y
RUN mkdir -p /app/proxy
WORKDIR /app/proxy

ADD package.json /app/proxy/
ADD proxy.js /app/proxy/
ADD startup_script.sh /app/proxy/startup_script.sh
RUN npm install

EXPOSE 80
ENTRYPOINT ["/bin/bash"]
CMD ["/app/proxy/startup_script.sh"]
