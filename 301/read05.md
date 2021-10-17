# Thinking in React

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
