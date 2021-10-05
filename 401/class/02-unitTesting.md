# Class 02 - Unit Tests & Documentation

## Unit Testing

* TDD = Test Driven Development
* R/G/R approach = "Red/Green/Refactor" (Failing, Passing, Refactor)

Facts

* Always true

Theories

* Conditionally True

Why is it important?

    i. Confidently refactor, make it agile
    ii. High Quality Code
    iii. Documentation
    iv. Assists in Debugging
    v. Reduce company cost

## Demo

* Build/add a testing solution
* Add a new project
* Don't forget to add the reference
* Build out app with TDD
* Test First, Code Last. Follow the R/G/R approach
* Show code coverage
* How much of our code has been tested? Can we aim for 90%?
* What are the benefits of code coverage?

## Documentation

* Why do we need it

* Readme's <-- What are they?

* Proper Structure

_____

## Adding a New Test Project

    dotnet new xunit -o FizzBuzzApp.Tests

    dotnew sln add FizzBuzzApp.Tests

    dotnet restore = npm install

_____

## FizzBuzzerTests.cs

* using System;

* using Xunit; (X is capitalized)

**public** is how we mark code that we want other people to be able to use -- test code needs to be marked **public**

    [Fact] -- when there is only one scenario for the test

    public void FizzBuzz_returns_1_given_1()
    { 
      //Arrange -- Set up the test
        FizzBuzzer fb = new FizzBuzzer();
    }

* ✨ make class *public*
* ✨ reference the class in other project

## Act - what is the **one** thing that we are testing

    string result = fb.FizzBuzz(1);

## Assert -- we expect the result to be what

    Assert.Equal("Fizz", result);

_____

### FizzBuzzer.cs

    if (number % 3 == 0)
    {
      return "Fizz";
    }
      return number.ToString();

_____

## Xunit Theory

Theory = when there could be multiple scenarios for your test

    [Theory] -- 
    [InlineData(15)]
    [InlineData(30)]
    [InlineData(45)]

    public void FizzBuzz_returns_Buzz_for_multiples_of_five(int number){
      
      //Arrange
      FizzBuzzer fb = new FizzBuzzer();

      //Act
      string result = fb.FizzBuzz(number);

      //Assert
      Assert.Equal("Fizz", result);

    }

_____

    [Fact]

    public void FizzBuzz_throws_for_negative_number()
    {
      //Arrange
      FizzBuzzer fb = new FizzBuzzer();

      //Assert - has built-in function: .Throws
      Assert.Throws<ArgumentOutOfRangeException>(() => 
      {
        //Act
      string result = fb.FizzBuzz(-1);

      });
    }

_____

## C# Lambda expression === JS Arrow Function

**Assert.Throws** - This is the format we use for testing an exception
