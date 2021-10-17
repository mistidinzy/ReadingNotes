# Unit Tests

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://mistidinzy.github.io/ReadingNotes/401home.html)
|
[PreWork](https://mistidinzy.github.io/ReadingNotes/401/preworkRM.html)
|
[Reading](https://mistidinzy.github.io/ReadingNotes/401/ReadingRM.html)
|
[Class Notes](https://mistidinzy.github.io/ReadingNotes/401/ClassRM.html)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)

_____

## What is Unit Testing?

### Unit tests are designed to test the developer's code logic.

First, a *unit* is a file grouping functions and classes that logically belong together. In C#, you can think of a unit as a method.

Unit Testing is one way of testing that isolates a part of your code, (usually a method), and runs through it with the parameters that you've provided.

An important aspect of unit tests is to completely separate this class from its callers and dependencies. (Callers are classes that depend on the class you are going to test. Dependencies are classes that your class that you are going to test depends on.)

[ELI5: Unit Tests](https://bit.ly/3laFmhu)

_____

## A Dead Simple Unit Test

***Very basic, hypothetical calculator class***:

```C#
public class Calculator
{
    public int Add(int x, int y)
    {
        return x + y;
    }
}
```

***Extremely clunky unit test***:

```C#
class Program
{
    static void Main(string[] args)
    {
        var calculator = new Calculator();

        int result = calculator.Add(5, 6);

        if (result != 11)
            throw new InvalidOperationException();
    }
}
```

## Wait! There's a Better Way

Right-click on the solution to add a project, select "Test", and choose "Unit Test Project Template".

***Actual Unit Test***:

```C#
[TestClass]¹
public class CalculatorTests
{
    [TestMethod]
    public void Adding_4_And_3_Should_Return_7()²
    {
        var calculator = new Calculator();

        int result = calculator.Add(4, 3);

        Assert.AreEqual³(7, result);
    }
}
```

¹The *TestClass* attribute tells Visual Studio's default test runner & framework, **MSTest**, that this class contains unit tests.

²Name the test method in a very descriptive way that clearly indicates which inputs should create what outputs.

³Microsoft supplies a UnitTesting namespace with this *Assert* class in it. This class has various methods you use as the final piece of the puzzle. ***Assertion Passes & Fails*** determine whether the test passes or fails, as seen in the test runner.

_____

### Best Practices

1. Arrange, Act, Assert
    * Arrange everything we need in order to run the experiment
    * Next, we act. Invoke the method, and capture the result.
    * Assert. Represents the general category of action which asserts the hypothesis itself.

2. One Assert per Test Method
3. Avoid Test Interdependence
    * Each test should handle its own setup and tear down.

4. Keep it Short, Sweet, and Visible
    * When a test fails, you want to understand what went wrong.
5. "Recognize *Test Setup Pain* as a Smell"
    * You shouldn't have to labor too heavily in setting up a class and method to test.
6. Add Them to the Build
    * Add your unit test suite's execution to the build, so that if any test fails, then the whole build will fail. This is necessary, so you don't get into the habit of ignoring failures.

_____

Next: [Documentation](02a-Documentation.md)

_____
