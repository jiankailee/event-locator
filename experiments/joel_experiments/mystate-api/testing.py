import requests


#eventkey = {"name":"eventkey","config":"8aa084537a2184f6179c"}
eventkey = {"eventkey": "8aa084537a2184f6179c"}
#eventkey = {"bob": "mypassword"}
#Ym9iOm15cGFzc3dvcmQK
#eventkey = {"name":"eventkey", "config":"Ym9iOm15cGFzc3dvcmQK"}



r = requests.get("https://www.event.iastate.edu/api/events/", params=eventkey)

print(r.text)
print(r.json)
