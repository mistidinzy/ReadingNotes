# Identity - Authentication

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

## Reading

[Intro to ASPdotNet Identity on Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=visual-studio)

[Authentication & Authorization Demystified](https://digitalmccullough.com/blog/aspnetcore-auth-system-demystified/)

[dotnet Identity Source Code](https://github.com/dotnet/AspNetCore/tree/main/src/Identity)

---

## Identity Classes

## Claims

> Claim - A single fact about the user.
>
> * A single claim will contain a single piece of info.
>
> * Claim constructor accepts two ***strings***, called "**Type**" and "**Value**".
>
> * The **type** parameter will be the name of the claim, representing what info is going to be provided, such as "FirstName".
>
> * And the **value** parameter will be the actual info, such as "Jim".

### ClaimsIdentity

> **ClaimsIdentity** represents a form of identification that helps prove that you are who you say you are. 
> 
> (Similar to how a Driver's License does this for us IRL).

### ClaimsPrincipal

> **ClaimsPrincipal** represents the actual user and contains one or more instances of **ClaimsIdentity**.

## Verbs

![Identity Verbs](https://i.imgur.com/SJOD7VS.png)

---

## Auth Handlers

## Auth Middleware

## Auth & Auth Flow

---
