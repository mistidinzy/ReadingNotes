# In Memory Storage

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

[JavaScript Call Stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)

**What is a ‘call’?**
  > A function invocation.

**How many ‘calls’ can happen at once?**

**What does LIFO mean?**
  > Last In, First Out -  The last function to be pushed to the stack, is the first to be popped out when the function returns.

**Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**

  > function numberOne() {
  > console.log(‘hello hello’);
  >}
  >function anotherOne() {
   >numberOne();
   >console.log(‘calling one inside another’);
  >}
  >console.log(‘DJ KHALID’);
  >anotherOne();

**What causes a Stack Overflow?**
        * When there is a function that calls itself (recursive function), and no exit point.

(ie.)
        function callMyself() {
         callMyself()
        }
      callMyself();

_____

[JavaScript Error Messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

**What is a ‘refrence error’?**
 When you try to use a variable that hasn’t been declared yet.
**What is a ‘syntax error’?**
 When you try to use incorrect syntax, like putting a token where it doesn’t belong, or not putting one where it’s expected.
**What is a ‘range error’?**
 Using .length on something, but specifying an invalid length.
**What is a ‘type error’?**
 When you try to access a data type, but it’s incorrect/incompatible.
**What is a breakpoint?**
 When you specify a line in your JS code, where you want the script to stop.
 This way you can go through and confirm certain portions are working.
**What does the word ‘debugger’ do in your code?**
 debugger; is a keyword you can use to hardcode a breakpoint within the code itself, rather than just selecting the line from the outside.

_____

More Links & Resources

[JavaScript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

_____
