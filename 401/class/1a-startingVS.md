# Class 01 - Visual Studio

## 🏡 [**Home**](0-classhome.md)

_____

Solution is a collection of projects

Projects are where you group C# files together

.csproj is an XML file that tells the compiler what to do/what kind of C# program to create

SDKs - software development kits

_____

dotnet new - gives us a list of all the kinds of projects we can create

dotnet new sln - create new solution file
always needs to be in the root of the project, with the readme and gitignore, etc.

_____

## **! Connecting GH Repo to VS Project !**

1. Repo
    * README .md
    * .gitignore -> VisualStudio
    * MIT License

2. After creating Repo & Cloning:
    1. dotnet new sln
    2. dotnet new console -o MyProjectName
    3. dotnet sln add MyProjectName

To open file in default program (which for solution files is Visual Studio) from command line:

* open MySolution.sln   # mac

* start MySolution.sln  # windows

_____

everything has to be within the Class’s curly braces

``` C#
class Program

{ 
  (in here) 
  static void Main(){
} 
(not here)
```

when WRITING functions, they will be outside of Main(), but still within the Class.

When CALLING the function, that will still be inside of Main();

_____

### Exceptions

overflow exception - when the input is longer than expected

exception types =same as= exception class

catch(exception type/class here)

throw = “something went wrong.”

* throwing is how a program tells us something went wrong
* still requires a exception type

_____
