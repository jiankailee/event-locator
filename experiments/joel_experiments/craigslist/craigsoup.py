from bs4 import BeautifulSoup
import requests

r = requests.get('https://cedarrapids.craigslist.org/eve/d/friday-fish-fry-culinary/6750380553.html')
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
mapinfo2 = soup.body.userbody
print mapinfo2
#mapaddr = soup.find(class="mapaddress")
#print mapaddr
