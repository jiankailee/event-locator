from bs4 import BeautifulSoup
import requests
import multiprocessing

r = requests.get('https://ames.craigslist.org/search/eve?search_distance=200&postal=50014&sale_date=2018-10-30')
print r.status_code
reqtext = r.text

soup = BeautifulSoup(reqtext, 'html.parser')

events = soup.find_all('p')

for event in events:
    print event.a['href']


#title = soup.title.string
#if title.endswith(' - events'):
#    title = title[:-9]
#print title
#mapinfo = soup.find(id="map")
#latitude = mapinfo['data-latitude']
#longitude = mapinfo['data-longitude']
#print latitude
#print longitude
#mapaddr = soup.find(class="mapaddress")
#print mapaddr
