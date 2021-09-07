# REST • HTTP • API Keys

[Google: *Project Aristotle*](https://www.cnbc.com/2019/02/28/what-google-learned-in-its-quest-to-build-the-perfect-team.html)

In 2021, Google wanted to discover how to build the "perfect team", so they embarked on a quest named Project Aristotle.

They spent years analyzing data from over 180 teams across the company. They found that there were five key characteristics of the best teams.

> 1. **Psychological Safety:** Everyone on the team feels safe around their team members, and empowered to take risks and speak their minds, without fear of embarrassment or punishment.
> 2. **Dependability:** Everyone completes quality work, on time.
> 3. **Structure & Clarity:** Everyone knows what their specific expectations are. Expectations are challenging, yet attainable.
> 4. **Meaning:** Everyone has a sense of purpose in their work (financial security, supporting family, helping the team succeed, etc.).
> 5. **Impact:** Everyone sees that the result fo their work actually contributes to their team's overall goals.

_____

# REST

**1. Who is Roy Fielding?**
> An American computer scientist. One of the authors of the HTTP specification, and originator of the **REST** (Representational State Transfer) architectural style. He currently works at Adobe Systems. His personal website is [roy.gbiv.com](https://roy.gbiv.com/), so he is now instantly one of my favorite people.

    Life is a distributed object system. However, communication among humans is a distributed hypermedia system, where the mind's intellect, voice+gestures, eyes+ears, and imagination are all components. -- Roy T. Fielding, 1998.

**2. Why don’t the techniques that we use today work well, when we need to be able to talk to all of the machines in the world?**
  > Because they weren't designed to be used in that way. When Fielding and his colleagues started building the web, they needed to be able to talk to any machine, anywhere in the world.
  Most of the techniques that we use today were created with the idea of just talking to a smaller group of machines in mind.

**3. What is the HTTP protocol that Fielding and his friends created?**
  > Hypertext Transfer Protocol (HTTP), is the foundation of data communication for the World Wide Web. A typical HTTP server waits for client requests, resolves and locates the requested resource, applies the requested method to that resource, and then sends the response back to the client.

_____

    HTTP messages can consist of either:

     Requests from client to server
    or
     Responses from server to client

_____

**4. What does a GET do?**
> GET is a Simple-Request method. It means to retrieve whatever information is requested. It requests that the target resource transfers a representation of its state. GET requests should only retrieve data and have no other effect.

**5. What does a POST do?**
> The POST method requests that the target resource accepts and then processes the representation/entity enclosed within the message. (ie. Posting a message to a bulletin board)

**6. What does PUT do?**
> The PUT method requests that the target resource creates or updates its current state, using the state that is defined in the enclosed entity.

**7. What does PATCH do?**
> The PATCH method requests that a set of changes described in the request be applied to the target resource. The difference between PUT and PATCH is reflected in the way that the server **processes** the enclosed entity, in order to modify the target resource.

**What's the difference?**

> The **PUT** method requests that the enclosed entity will **replace** the version that is currently stored on the server. (ie. 0 ➡️ 1)

> The **PATCH** method requests that the version currently stored on the server be modified in a way that produces a new version. (ie. 1.0 ➡️ 1.1)

_____

## API Keys

[Geocoding API](https://locationiq.com/)
> Did you get your API key? ✅

[Weather Bit API](https://www.weatherbit.io/)
> Did you get your API key? ✅

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)
> Did you get your API key? ❌

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)
> Did you get your API key? ✅

_____

## Things I Wanna Know More About

> I want to read more about Tim Berners-Lee & the creation of the web.

_____

## Other Resources & Links

> * [World Wide Web](http://info.cern.ch/hypertext/WWW/TheProject.html)
> * [World Wide Web - README.html](http://info.cern.ch/hypertext/README.html)
> * [HyperText Transfer Protocol -- HTTP/1.0](https://www.hjp.at/doc/rfc/rfc1945.html)
> * [Software engineering and the cobbler's barefoot children](https://bit.ly/3yOvhKN)
> * [How I Explained **REST** To My Brother](https://gist.github.com/brookr/5977550)

_____

## Table of Contents

> 🏡 [**Home**](/README.md)
