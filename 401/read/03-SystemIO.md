# System.I.O

## File & Stream I/O

**File** = A file is an ordered and named collection of bytes that has persistent storage. File provides static methods for creating, copying, deleting, moving, and opening files, and helps to create a FileStream object.

_____

**Stream** = A stream is a sequence of bytes that you can use to read from & write to a backing store. The abstract base class Stream supports reading and writing bytes.

All classes that represent streams inherit from the Stream class. Provides a common view of data sources and repositories.

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

_____

[Write to a file](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-write-text-to-a-file)

* StreamWriter
* File
* Path

_____

[Read to a file](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-read-and-write-to-a-newly-created-data-file)

* BinaryReader
* BinaryWriter

_____

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/)

_____
