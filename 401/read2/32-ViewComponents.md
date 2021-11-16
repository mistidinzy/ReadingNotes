# Read 32: View Components

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

[Intro to View Components](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/view-components?view=aspnetcore-2.1)

[View Components](https://mariusschulz.com/blog/view-components-in-asp-net-core-mvc)

---

## View Components

View components are like partial views.

They render a chunk rather than a whole response.

View components are intended anywhere you have reusable rendering logic that's too complex for a partial view, such as:

* Dynamic navigation menus
* Tag cloud (where it queries the database)
* Log-in panel
* Shopping cart
* Recently published articles
* Sidebar content on a typical blog
* A log-in panel that would be rendered on every page, and show either the links to log out or log-in, depending on the log-in state of the user

---

### A view component consists of two parts: the **class**, and the **result it returns**

---

View components must be public, non-nested, and non-abstract classes.

The view component name is the class name with the "ViewComponent" suffix removed.

---

To use the view component, call the following inside a view:

```c sharp
@await Component.InvokeAsync("Name of view component", {Anonymous Type Containing Parameters})
```

---

You can also invoke view components directly from a controller method.

You can implement a controller action that returns the content of the **ViewComponentResult**.

---
