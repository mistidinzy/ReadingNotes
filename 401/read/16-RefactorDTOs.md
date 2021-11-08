# Refactoring with DTOs

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

* [Data Transfer Objects](https://docs.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5)

* [How to Use DTOs](https://www.infoworld.com/article/3562271/how-to-use-data-transfer-objects-in-aspnet-core-31.html)

---

## Data Transfer Objects

* A Data Transfer Object is an object that defines how the data will be sent over the network.

Usually used as a container to encapsulate data, and pass it from one layer of an application to another.

If you're using models to pass data between layers, and sending data back to the "presentation layer", then you are exposing the internal data structures of your app, which is not ideal and creates a major design flaw in the application.

Decoupling your layers with DTOs will make life easier when implementing APIs, MVC apps, etc.

Another reason to use DTOs is **data hiding**.

* Using DTOs, you can return only the data that is requested.

---
