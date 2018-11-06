from craigslist import CraigslistEvents

ames_e = CraigslistEvents(site='ames', filters={'zip_code': 50014, 'search_distance':200})

for e in ames_e.get_results(sort_by='newest', limit=100):
    print e
