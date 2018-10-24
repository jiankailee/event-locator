from bs4 import BeautifulSoup
import requests

r = requests.get('https://desmoines.craigslist.org/eve/d/storage-unit-auction-open-to/6715745382.html')
print r.status_code
reqtext = r.text
#print reqtext

soup = BeautifulSoup(reqtext, 'html.parser')

#print(soup.prettify())
title = soup.title.string
if title.endswith(' - events'):
    title = title[:-9]
print title
mapinfo = soup.find(id="map")
latitude = mapinfo['data-latitude']
longitude = mapinfo['data-longitude']
print latitude
print longitude
#mapaddr = soup.find(class="mapaddress")
#print mapaddr
