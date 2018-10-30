from bs4 import BeautifulSoup
import requests
from multiprocessing import Process

def main():
    r = requests.get('https://ames.craigslist.org/search/eve?search_distance=200&postal=50014&sale_date=2018-10-30')
    print r.status_code
    reqtext = r.text

    soup = BeautifulSoup(reqtext, 'html.parser')

    events = soup.find_all('p')

    for event in events:
        link = event.a['href']
        print link
        p = Process(target=scrap, args=(link,))
        p.start()
        p.join()

def scrap(link):
    r = requests.get(link)
    req = r.text
    
    soupp = BeautifulSoup(req, 'html.parser')

    title = soupp.title.string
    if title.endswith(' - events'):
        title = title[:-9]
    print title
    mapinfo = soupp.find(id="map")
    latitude = mapinfo['data-latitude']
    longitude = mapinfo['data-longitude']
    print latitude
    print longitude
    #mapaddr = soupp.find(class="mapaddress")
    #print mapaddr

if __name__ == '__main__':
    main()
