# Thinking in React

**How would you break a mock into a component heirarchy?**
  > Draw boxes around every component (and subcomponent) and give them all names.

**What is the single responsibility principle and how does it apply to components?**
  > To keep things simple, a component should only have one job. If it gets too complex, it should be broken up into smaller subcomponents.

**What does it mean to build a ‘static’ version of your application?**
  > To build a version that has no interactivity. You build components that reuse other components, and pass data using props. State is used when your app requires interactivity, so it won't be used for this.

**Once you have a static application, what do you need to add?**
  > Components, Props, State

**What are the three questions you can ask to determine if something is state?**
  > Is it passed in through a parent element via props? If so, it's probably not state.
  > Does it remain unchanged over time? If so, it's probably not state.
  > Can you compute it based on any other state or props in your component? Probably not state.

**How can you identify where state needs to live?**
  
First, you need to remember that React has a one-way data flow down the component hierarchy. To try to figure out which component should own which state, follow these steps:

  > * Identify every component that renders something based on that state.
  > * Find a common owner component. A single component above all of the components that need the state in the hierarchy(?).
  > * Either the common owner or another component higher up in the hierarchy should own the state.
  > * If you can't find a component where it makes sense to own the state, then you should create a new component solely for holding the state and add it somewhere in the hierarchy, above the common owner component.

_____

## Things I Want To Know More About

* Component/state hierarchy
* Static versions

_____

## Links & Resources

* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [State vs. Props](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)
* [Thinking in React - CodePen Example](https://codepen.io/gaearon/pen/qPrNQZ)
* [React Sight - Application Visualizer](https://www.reactsight.com/)

_____

## Table of Contents

> 🏡 [Home](README.md) <br>
> 1️⃣ [Introduction to React and Components](read01.md)<br>
> 2️⃣ [States and Props](read02.md)<br>
> 3️⃣ [Passing Functions as Props](read03.md)<br>
> 4️⃣ [React and Forms](read04.md)<br>
> 5️⃣ [Thinking in React](read05.md)<br>
> 🐙 [My GitHub](https://github.com/mistidinzy)
