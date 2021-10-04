# Exception Handling & Debugging

## **Debugging**

![First Computer Bug - 1945](/img/1stbug1945.jpeg)

### *Debugging for Absolute Beginners*

### Step 1. Ask Yourself the Right Questions

* What did you expect your code to do?
* What happened instead?
* Was there an error?
* What is the symptom of the problem?

### Step 2. Examine Your Assumptions

* Are you using the right API for what you want it to do?
* Are you using it in the right way?
* Are there any typos in your code?
* Did you make a change in your code, assuming it is unrelated to your current problem?
* Did you expect a variable to contain something different from what you got?
* Do you know the intent of the code?

### Step 3. Step Through with a Debugger

In Visual Studio, enter debugging mode with F5 or the **Start Debugging** button.

Stepping through your code within a debugger will allow you to pause the app at any point to examine its state, and then step through it line by line to watch everything as it's happening. Set breakpoints where you want the code to stop at a certain line on its own.

[Visual Studio Debugger Overview](https://bit.ly/3FeFswp)

_____

## **Exceptions**

An ***exception*** is any error condition or unexpected behavior that is encountered by running a program.

They can be thrown because of a fault in your code, unavailable operating system resources, unexpected conditions encountered by the runtime, etc.

**Some common exceptions can be**:

* [Exception](https://bit.ly/3a4SiPv)
* [IndexOutOfRangeException](https://bit.ly/3a0E8iD)
* [NullReferenceException](https://bit.ly/3DbPmgO)
* [InvalidOperationException](https://bit.ly/2ZVcce8)
* [ArgumentException](https://bit.ly/3uAe0EJ)
* [ArgumentNullException](https://bit.ly/3D8e7Kv)
* [ArgumentOutOfRangeException](https://bit.ly/2YeoYU0)

_____

## **Exception Handling**

### Throw

***throw*** signals the occurence of an exception during program execution. It can be used as an expression as well as a statement.

A ***throw*** statement can be used in a ***catch*** block to re-throw the exception that is caught.

### Try/Catch

***try/catch*** is a statement that consists of a ***try*** block followed by one or more ***catch*** clauses, which specify handlers for different exceptions.

If you suspect a code statement might give you trouble, place it within a ***try*** block.

Below the try block, place statements that will handle the exception(s) within a ***catch*** block.

Example:

```C#
static void Main()
{
    int n;
    try
    {
        // Do not initialize this variable here.
        n = 123;
    }
    catch
    {
    }
    // Error: Use of unassigned local variable 'n'.
    Console.Write(n);
}
```

### Try-Finally

***finally*** is a block of statements that will run once control leaves the ***try*** statement. You can use this to clean up any resources that are allocated in the try block.

### Try-Catch-Finally

_____

### C\# 7.0

* (pg. 158 - 166): Statements and Exceptions
* Try/Catch & Exceptions excerpt from intro

## Very Big Bad Bugs

### [Therac-25](https://www.bugsnag.com/blog/bug-day-race-condition-therac-25)

Therac-25 was a radiation machine that, due to programming errors, sometimes gave its patients radiation doses that were hundreds of times greater than normal, resulting in serious injury or death.

This machine and the accidents associated have become a highlighted case of overconfidence and lack of proper due diligence in resolving software errors.

### [Ariane 5](https://www.bugsnag.com/blog/bug-day-ariane-5-disaster)

Considered to be one of the most expensive software failues in history.

____

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)
