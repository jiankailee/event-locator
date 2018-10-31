import requests
import json
isu_laundry_endpoint="https://www.laundryalert.com/cgi-bin/backoffice/MachineState.py?format=JSON&loc=isulaundry&room="

r = requests.get(isu_laundry_endpoint + "Maple")
machines = r.json()[u'location'][u'rooms'][0][u'machines']

nummach = len(machines)
print nummach
available = 0
inuse = 0
for machine in machines:
    print machine
    if machine[u'status'] == 'Available':
        available = available + 1
    else:
        inuse = inuse + 1
print available
print inuse
#print 'status' in machine
#print machine
