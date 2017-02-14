#!/bin/python3

from yarl import URL
from bs4 import BeautifulSoup
import argparse
import sys
import urllib.request, urllib.error, urllib.parse


class WebClonner():

    #This function will sanitise the url and check if url contains scheme or not
    def schemize(self,url):
        targetUrl = URL(url)
        #print(targetUrl.scheme)
        if targetUrl.scheme == '' :
            #supports only http scheme
            url = 'http://'+url
            print(url)
            targetUrl = URL(url)
        return targetUrl

    def __init__(self,targetUrl):
        rooturl = self.schemize(targetUrl)
        #print(rooturl)
        response = urllib.request.urlopen(str(rooturl))
        print(response.read())


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Process a url entered by user and clone the directory")
    parser.add_argument('--target',help='The target root url to clone the website')
    args = parser.parse_args()

    if args.target is None:
        print("Atleat one target url is required to start cloning")
        sys.exit(0)
    website = WebClonner(args.target)
