## Simple app: integrating ExpressJS with a third party API

This is a very simple app that demonstrates how to integrate Express JS with
a third-party API that does not require complex authentication.


## Project plan

* The website will have just the home page, which will display the image gallery
imported from the third party api.

* We will use the npm module superagent to connect with the third party api, and
the modules handlebars and contemplate to prepare the template with the handlebars
template engine.


## Standard structure of server.js

1. App dependencies: npm and own modules.
2. App instantiation.
3. DB connection.
4. App settings configuration.
5. Define middleware: static files, views, view engine, error handlers, etc.
6. Define routes and request handlers.
7. Start app in the server on a particular host and port.