## Simple app: integrating ExpressJS with a third party API

This is a very simple app that demonstrates how to integrate Express JS with
a third-party API that does not require complex authentication.


## Project plan

* The website will have just the home page, which will display the image gallery
imported from the third party api.

* We will use the npm module superagent to connect with the third party api, and
the modules handlebars and consolidate to prepare the template with the handlebars
template engine.

* The consolidate module help us to integrate handlebars with ExpressJS. We will
use app.engine() for that.


## Standard structure of server.js

1. App dependencies: npm and our own modules (routes, model, etc).
2. App instantiation.
3. DB connection.
4. App settings configuration: views, view engine, etc.
5. Define middleware: static files, error handlers, etc.
6. Define routes and request handlers.
7. Start app in the server on a particular host and port.