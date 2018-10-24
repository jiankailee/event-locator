from bs4 import BeautifulSoup
import requests

r = requests.get('https://ames.craigslist.org/search/eve?postal=50014&search_distance=200&sale_date=2018-10-24')
print r.status_code
reqtext = r.text
#print reqtext

soup = BeautifulSoup(reqtext, 'html.parser')

events = soup.find_all('p')

#events = events['result-title hdrlnk']
for event in events:
    print event
    #try:
    #    print event['result-title hdrlnk']
    #except:
    #    print "Nothing of value"
#print(soup.prettify())
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
