# Passing Functions as Props

## [React Docs - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

What does .map() return?
> .map() is similar to forEach. It takes in an array and doubles their values.

If I want to loop through an array and display each value in JSX, how do I do that in React?
> Use 'forEach'(?). Unclear.
  
Each list item needs a unique __?
> **key**.

What is the purpose of a key?

> Keys are a special string attribute, assigned to list items, that help React identify which items have changed, are added, or removed.

_____

## [The Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

What is the spread operator?
> An ellipsis \(...), used to expand an iterable object into a list of arguments.

List 4 things that the spread operator can do.
  > Concatenate or combine arrays.
  > Add an item to a list.
  > Add to state in React.
  > Use Math functions.

Give an example of using the spread operator to combine two arrays.
> const fruits = ['🍏','🍊','🍌','🍉','🍍']
> const moreFruits = [...fruits];
>
> console.log(...[...fruits,'...',...moreFruits]) //

Give an example of using the spread operator to add a new item to an array.

Give an example of using the spread operator to combine two objects into one.

_____

[How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU)

In the video, what is the first step that the developer does to pass functions between components?

In your own words, what does the increment function do?

How can you pass a method from a parent component into a child component?

How does the child component invoke a method that was passed to it from a parent component?

_____

[React Tutorial through ‘Declaring a Winner’](https://reactjs.org/tutorial/tutorial.html)
[React Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

_____

## Things I want to know more about

_____

> * [Home](README.md)