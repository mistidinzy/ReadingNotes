# Class Two - State & Props

[React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

**Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?**

  render

**What is the very first thing to happen in the lifecycle of React?**

  mounting

**Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates**

  Constructor

  Render

  React updates

  ComponentDidMount

  (Render?)

  (React updates?)

  ComponentWillUnmount

**What does componentDidMount do?**

  After a component is mounted, this method is invoked. This is where you can load anything using a network request, initialize the DOM, and set up any subscriptions.

_____

## React Bootstrap

[React-Bootstrap](https://react-bootstrap.github.io/components/alerts)

React-Bootstrap is a library of built-from-scratch components that has evolved and grown alongside React, without dependencies like jQuery.

Each component is accessible-by-default.

You should import individual components rather than the whole library of components.

_____

[React State VS Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

Props are like arguments to a function. When you want to render a component, you will pass through props outside of the component, like you would with arguments to their functions.

**What types of things can you pass in the props?**

  Title, Description
  Static information

**What is the big difference between props and state?**

  Props are handled outside of the component, State is handled inside of the component.

**When do we re-render our application?**

  When you change state.

**What are some examples of things that we could store in state?**

  Count of a counter application, user input from forms.

_____

## Things I want to know more about

  It seemed like props was described as being for flexible, varying information. But then later in the video, it was described as static information that wouldn't change? So I misunderstood something there.

_____

[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

[Handling Events](https://reactjs.org/docs/handling-events.html)

[React Tutorial through 'Developer Tools'](https://reactjs.org/tutorial/tutorial.html)

_____

[Home](/README.md)