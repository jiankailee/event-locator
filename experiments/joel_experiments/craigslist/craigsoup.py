from bs4 import BeautifulSoup
import requests

r = requests.get('https://desmoines.craigslist.org/eve/d/storage-unit-auction-open-to/6715745382.html')
print r.status_code
reqtext = r.text
#print reqtext

soup = BeautifulSoup(reqtext, 'html.parser')

#print(soup.prettify())
tag = soup.find(id="map")
latitude = tag['data-latitude']
longitude = tag['data-longitude']
print latitude
print longitude
