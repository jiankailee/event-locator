from bs4 import BeautifulSoup
import requests
from multiprocessing import Process
import mysql.connector
from mysql.connector import Error

def main():
    r = requests.get('https://ames.craigslist.org/search/eve?sort=upcoming&nearbyArea=339&nearbyArea=340&nearbyArea=341&nearbyArea=567&nearbyArea=691&nearbyArea=692&nearbyArea=693&nearbyArea=98&searchNearby=2')
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
    try:
        conn = mysql.connector.connect(host='localhost', database='309project', user='team1', password='1234Qwe!')
        cur = conn.cursor()
        query = "INSET INTO event (eventName, longitude, latitude) VALUES (\'" + title + "\', \'" + longitude + "\', \'" + latitude + "\');"
        cur.execute(query)
        cur.close()
        #conn.close()
    except Error as e:
        print(e)
    finally:
        conn.close()
    #mapaddr = soupp.find(class="mapaddress")
    #print mapaddr

if __name__ == '__main__':
    main()
