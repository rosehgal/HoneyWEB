FROM r0hi7/nodejs

Maintainer Rohit Sehgal (rsehgal@iitk.ac.in)

RUN mkdir -p /app/proxy
WORKDIR /app/proxy

ADD package.json /app/proxy/
ADD proxy.js /app/proxy/
RUN npm install 

EXPOSE 80
ENTRYPOINT ["npm","start"]
