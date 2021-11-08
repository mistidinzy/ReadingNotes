# Testing, Swagger and Deployments

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

## Deploying with Azure

[Azure Deployment Checklist](https://github.com/DeltaVCode/cedar-c-do-401d5/blob/main/class-17/resources/azure-deployment.md)

---

## Views

**What is a view?**

> In the **Model-View-Controller (MVC)** pattern, the ***view*** handles the app's data presentation and user interaction.

> A view is an HTML template with embedded "Razor markup."

> Razor markup is code that interacts with HTML markup to produce a webpage that's sent to the client.

Views help establish ***separation of concerns*** within an MVC app.

* App is easier to maintain
* Parts of the app are loosely coupled.
* Easier to test user interface portions of app.
* Less likely to repeat sections of the user interface.

---

### Layouts

Use **layouts** to provide consistent webpage sections and reduce code repetition. Layouts often contain the header, navigation and menu elements, and the footer.

### Partial Views

**Partial views** reduce code duplication by managing reusable parts of views.

### View Components

**View component**s are similar to partial views in that they allow you to reduce repetitive code, but they're appropriate for view content that requires code to run on the server in order to render the webpage.

**View components** are useful when the rendered content requires database interaction, such as for a website shopping cart.

---

### View Discovery

When an action returns a view, a process called "**view discovery**" takes place.

This process determines which view file is used based on the view name.

---

## ASP(dot)NET MVC - Forms

[Tutorial for Creating Forms](https://www.completecsharptutorial.com/asp-net-mvc5/4-ways-to-create-form-in-asp-net-mvc.php)

---
