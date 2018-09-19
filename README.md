# TG_7_EventLocator

### How to start both Nginx and NPM Development server:
HTTP Nginx Server:
'''
sudo systemctl start nginx
'''

### Starting the NPM Development Server:
'''
cd /var/www/html/TG_7_EventLocator/frontend/eventlocator
'''
'''
npm start
'''

Visiting http://proj309-tg-07.misc.iastate.edu should now display the webpage

### Starting the postgresql server
'''
sudo systemctl start postgresql
'''

### Configuring to the Postgresql Sever
'''
sudo su postgres
'''
'''
psql
'''

From here, you can use \c databasename to connect to a database
or you can use commands like 
'''
SELECT * FROM table
'''
or similar commands


