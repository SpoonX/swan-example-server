# aurelia-todo-server

a [Sails](http://sailsjs.org) application

## Create a user
To log in to the example, you'll have to create a user.

### Using curl
Make sure you have curl installed, and run the following (make sure the server is running first):

`curl -H "Content-Type: application/json" -XPOST http://127.0.0.1:1337/auth/signup -d '{"username":"user","password":"password"}'`

### Using postman / other tool
Make a `POST` request to `http://127.0.0.1:1337/auth/signup` with the following parameters:

- username
- password
