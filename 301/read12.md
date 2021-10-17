# CRUD

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **1** [Introduction to React & Components](/read01.md)
>
> **2** [States & Props](/read02.md)
>
> **3** [Passing Functions as Props](/read03.md)
>
> **4** [React & Forms](/read04.md)
>
> **5** [Thinking in React](/read05.md)
>
> **6** [Node.js • npm • Pair Programming](/read06.md)
>
> **7** [REST • HTTP • API Keys](/read07.md)
>
> **8** [APIs](/read08.md)
>
> **9** [Functional Programming](/read09.md)
>
> **10** [In Memory Storage](/read10.md)
>
> **11** [Mongo and Mongoose](/read11.md)
>
> **12** [CRUD](/read12.md)
>
> **13** [Diversity & Inclusion in the Tech Industry](/read13.md)
>
> **14** [Authentication](/read14.md)

_____

[Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1. **In your own words, describe what each group of status code represents:**

    > * 100’s = Informational
    > * 200’s = Success
    > * 300’s = Redirection
    > * 400’s = Client Error
    > * 500’s = Server Error

2. **What is a status code 202?**
    > Accepted - Request has been received, but not yet acted upon.
3. **What is a status code 308?**
    > Permanent Redirect - The resource is now permanently located at another URI.
4. **What code would you use if an update didn’t return data to a client?**
    > 204 - No Content
5. **What code would you use if a resource used to exist but no longer does?**
    > 410 - Gone(?) or 404 - Not Found(?)
6. **What is the ‘Forbidden’ status code?**
    > 403 - The client does not have access rights to the content.

[Build A REST API With Node.js, Express, & MongoDB](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

1. **Why do we need to pull our MongoDB database string out of our server and put it into our .env?**
    > Unclear. He didn’t explain why he did it in the video.
2. **What is middleware?**
    > Code that runs when server gets a request, but before it gets passed to the routes.
3. **What does app.use(express.json()) do?**
    > express.json is a built-in middleware function
4. **What does the /:id mean in a route?**
    > unsure
5. **What is the difference between PUT and PATCH?**
    > PUT uses the request URI to supply a modified version of the requested resource, which then replaces the original version of the requested resource. PATCH applies a partial update to the resource instead of completely replacing it.
6. **How do you make a default value in a schema?**
    > Schemas can define default values for certain paths. Create a new document without a path set, the default will kick in. Mongoose only applies a default if the value of the path is strictly undefined.
7. **What does a 500 error status code mean?**
    > It means Internal Server Error, which can be anything from a missing header field the backend accessed without checking its existence; to an unreachable third-party service that the backend wanted to call.
8. **What is the difference between a status 200 and a status 201?**
    > 200 = okay. Request has succeeded.
    > 201 = created. Request has been fulfilled and a new resource has been created.

## Building an API

1.  > npm init
2. install dependencies:
    > npm install express mongoose
3. install development dependencies:
    > dotenv
    >
    > nodemon
4. create files:
    > server.js
    >
    > .env
    >
    > .gitignore
5. write into .gitignore:
    > .env
    >
    > node_modules
6. in server.js:
    > 1. const express = require(‘express’);
    > 2. const app = express (); - app variable to configure our server
    > 3. app.listen(3000, () => console.log(“Server has Started’));
7. configure Mongoose to connect to MongoDB
    > const mongoose = require(‘mongoose’);
8. connect to our database
    > mongoose.connect(‘mongodb://localhost/databasename)
9.
    > const db = mongoose.connection
10.
    > db.on(‘error’, (error) => console.log(‘Connected to Database’))
11. create a variable in .env for database url, moved from server.js:
    > DATABASE_URL=mongodb://localhost/databasename
12.
    > require(‘dotenv’).config();
13. Create routes and setup json

_____
