# File Manipulation / System. IO

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](401home.md)
|
[PreWork](401/preworkRM.md)
|
[Reading](401/ReadingRM.md)
|
[Class Notes](401/ClassRM.md)
|
[DSA Code Challenges](https://mistidinzy.github.io/data-structures-and-algorithms/)

_____

## System IO Library

* What is it?
* Why do we use it?

### Writing a file

    string myInfo = "I want to write all of this to a file";
    File.WriteAllText("/path/to/file.txt", myInfo);
    
    string[] myArray = new string[2];
    myArray[0] = "My first line of information";
    myArray[1] = "My second line of information";
    File.WriteAllText("/path/to/file.txt",myArray);

### Reading a file

    string[] myFile = File.ReadAllLines("/path/to/file.txt");
    string myFile = File.ReadAllText("/path/to/file.txt");

### Creating a file

(Check out the demo. There are 2 different ways to achieve this!)

### Deleting a file

To delete a file, just tell the library to delete the location by inputting the path.

    File.Delete(path);

_____

## File Stream

* What is a stream?
* StreamReader
* StreamWriter

## File Types

* CSV
* Text
* Binary

_____

## 🏡 [**Home**](0-classhome.md)
