# Data Transfer Objects (DTOs)

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://bit.ly/3EcMrF6)
|
[PreWork](https://bit.ly/3jzkAa1)
|
[Reading](https://bit.ly/3b8DLDc)
|
[Class Notes](https://bit.ly/3Eglbpb)
|
[DSA Code Challenges](https://bit.ly/3GjNoNG)
>

---

## Reading

* [Data Transfer Objects](https://docs.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5)

* [How to Use DTOs](https://www.infoworld.com/article/3562271/how-to-use-data-transfer-objects-in-aspnet-core-31.html)

---

## Data Transfer Objects

***A class of classes that only exist for shuttling data around. Not considered a core part of our model.***

Data Transfer Objects allow us to adhere to stricter and more curated data contract between the client code and the API.

They do not contain any business logic, they only have simple getters and setters.

* **Why DTOs are necessary**

  * Encapsulate data

  * Reduce number of method calls into a single call

* **What problems DTOs solve**

* They improve performance and bring costs down.
* They flatten object hierarchy for easier data transfer.
* Can exclude certain properties you do not wish to pass onto the UI layer.

---
