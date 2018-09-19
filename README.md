
# TG_7_EventLocator

### Start the Nginx Server to pass NPM Development server to the internet
Starting the Nginx HTTP Server (passes the npm localhost server to the internet)
```
sudo systemctl start nginx
```

### Starting the NPM Development Server on Localhost:
Change to the project's directory. Git command can be used to update this folder
```
cd /var/www/html/TG_7_EventLocator/frontend/eventlocator
```
```
npm start
```

Visiting http://proj309-tg-07.misc.iastate.edu should now display the webpage

### Starting the postgresql server
```
sudo systemctl start postgresql
```

### Configuring to the Postgresql Sever
Change to the postgres user
```
sudo su postgres
```
Launch the postgres console
```
psql
```

From here, you can use ```\c databasename``` to connect to a database
or you can use commands like
```
SELECT * FROM table
```
or similar commands



