# File Manipulation / System IO

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

> **401**: [Home](https://bit.ly/3EcMrF6)
|
[PreWork](https://bit.ly/3jzkAa1)
|
[Reading](https://bit.ly/3b8DLDc)
|
[Class Notes](https://bit.ly/3Eglbpb)
|
[DSA Code Challenges](https://bit.ly/3GjNoNG)
>

---

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
