#!/bin/sh
tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)' -G 3600 -w /app/proxy/logs/"capture_+%Y-%m-%d.pcap" &
npm start
