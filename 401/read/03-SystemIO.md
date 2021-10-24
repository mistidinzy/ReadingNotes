# System.I.O

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

## File & Stream I/O

**File** = A file is an ordered and named collection of bytes that has persistent storage. File provides static methods for creating, copying, deleting, moving, and opening files, and helps to create a FileStream object.

---

**Stream** = A stream is a sequence of bytes that you can use to read from & write to a backing store. The abstract base class Stream supports reading and writing bytes.

All classes that represent streams inherit from the Stream class. Provides a common view of data sources and repositories.

![stream classes](https://i.imgur.com/nJoL1QY.png)

Streams involve three fundamental operations:

* Reading
  * stream--{data}-->data structure
* Writing
  * stream--{data}-->data source
* Seeking
  * ? ↔ {s.t.r.e.a.m} <br>
  ↓
  * {s.t.r.e.a.m}-->{st.r..e.a.m}

**Backing store** can be one of several storage mediums.

**Storage medium** = Disks or Memory.

**I/O** = Input/Output

## Files & Directories

---

[Write to a file](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-write-text-to-a-file)

* StreamWriter
* File
* Path

---

[Read to a file](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-read-and-write-to-a-newly-created-data-file)

* BinaryReader
* BinaryWriter

---
