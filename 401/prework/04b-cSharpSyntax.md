# C\# Syntax Explained

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](/401home.md)
|
[PreWork](/401/PreworkRM.md)
|
[Reading](/401/ReadingRM.md)
|
[Class Notes](/401/ClassRM.md)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)
>

_____

[w3 schools - C# Syntax](https://www.w3schools.com/cs/cs_syntax.php)

```C#
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}
```

**Line 1**: using System means that we can use classes from the System namespace.

**Line 2**: A blank line. C# ignores white space. However, multiple lines makes the code more readable.

**Line 3**: namespace is a used to organize your code, and it is a container for classes and other namespaces.

**Line 4**: The curly braces {} marks the beginning and the end of a block of code.

**Line 5**: class is a container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class. In our example, we named the class Program.

**Line 7**: Another thing that always appear in a C# program, is the Main method. Any code inside its curly brackets {} will be executed.

**Line 9**: Console is a class of the System namespace, which has a WriteLine() method that is used to output/print text. In our example it will output "Hello World!".

**Notes**:

* If you omit the using System line, you would have to write System.Console.WriteLine() to print/output text.

* Every C# statement ends with a semicolon ;

* C# is case-sensitive: "MyClass" and "myclass" has different meaning.

_____
