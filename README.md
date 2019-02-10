
# TG_7_EventLocator

The project is a web app and will show all events nearby you. Users can create events publicly such as bbq parties and football parties, and group up people who want to join in. This app also will allow users to view ISU events or events hosted by companies. Events can be shared privately between close friends or posted publicly to any user to view. Whenever you are unsure about what to do with your evening, you can view the webpage and see all the posted events happening near you.
Our project will require Nodejs and a reactive interface working with each other to allow for a dynamically updated page. We’ll use npm to add support for things like Google Maps or other plugins for parts that would be time consuming to do ourselves. We’ll also use an SQL database to manage user account info.

technologies: Front-end--Javascript, React,NPM, React-Leaflet, Back-end-- socket.io, Javascript, NodeJS,express, Database-MySQL



Design Description

Client-Side GUI
On the client side, we use React Javascript library to build the user interface. The user interacts with the front-end interface to view and enter data. Users submit data on the user interface or fetch the data from the server using the HTTP request function built into React. NPM library Geocode translates addresses and place names into longitude and latitude coordinates to be used on the map. The map is drawn using React-Leaflet which allows users to click on the markers placed on it and search different locations through the React-Geocode library. Users can send and receive messages to and from all currently connected users using Socket.IO, which is connected directly to the backend.

Server-Side Backend
On the Server side, we use Node.js for our framework. We also use Express on top of Node.js to host the data on the port 8080 in the JSON format. Express also creates a connection to the SQL database, querying and updating it. Besides that, Socket.IO is required to request and respond to message data. Socket.IO receives and broadcasts user messages from the chat to all other connected users.

Server-Side SQL Database
There are three tables in the database. The database contains tables for user, public event, and private event information. Express sends SQL queries to the database to be executed, hosting the response after it is finised. 

Tables and fields

There are three tables in the database which are named userInfo, event, and private Event. 

UserInfo
The userInfo table contains info for all users, including username, password, address, and email addresses. We use this database when users sign up and login on the website. It is a one to one relationship.

Public Events
The event table stores the info from all public events that are displayed on the website. It contains event name, longitude, latitude, description, address, start time, and end time as fields. The table is mainly used in the create-public-event page and public-event-list page. 

Private Events
The private event table holds the info for  private events created by users. Each event has a username, eventname, longitude, latitude, description,address, start time, and end time. 


### Start the Nginx Server to pass NPM Development server to the internet
Starting the Nginx HTTP Server (passes the npm localhost server to the internet)
```
sudo systemctl start nginx
```
### NEW USEFUL SERVER COMMANDS
```
sudo systemctl COMMAND HERE eventlocator-frontend
sudo systemctl COMMAND HERE eventlocator-backend
```
The Commands which are useful for systemctl are : start, restart, and status

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



