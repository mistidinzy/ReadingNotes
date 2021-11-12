# Read 30: Hash Tables

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

### Reading Links

[Intro to Hash Tables](https://bit.ly/3qubKPj)

[Video - What is a hash table?](https://www.youtube.com/watch?v=MfhjkfocRR0)

[Basics of Hash Tables](https://bit.ly/3c6pDdV)

[Hash Table Wiki](https://bit.ly/3Ccclay)

---

![@girlie_mac Hash Table Sketch Notes](https://pbs.twimg.com/media/ESAn-X3U8AEI7DU?format=jpg&name=4096x4096)

---

## What is a Hash Table?

‼️ Hash Table is the same thing as a Hash Map.

## Hash

A **hash** is the result of some algorithm taking an incoming string or array, etc. and converting it into a value that could be used for security or other purposes.

A **hash** is the ability to encode the key that will eventually map to a specific location in the data structure.

In hash tables, a hash is used to determine the index of the array.

## Buckets

A bucket is what is contained in each index of the array of the hashtable.

Each index is a bucket.

An index could potentially contain multiple key/value pairs if a collision occurs.

The more buckets you have, the more space you're using, even with empty buckets.

## Collisions

A collision is what happens when more than one key gets hashed to the same location of the hashtable

---

### Hashtables utilize key-value pairs

This means every Node or Bucket has both a key and a value.

---

## Big O

Since we are able to hash our key and determine the exact location where our value is stored,

we can do a lookup in an O(1) time complexity.

This is ideal when quick lookups are required.

---

## Hashtable Operations

### **Add()**

When adding a new key/value pair to a hashtable.

1. Send the key to the GetHash method.
2. Once you determine the index of where it should be placed, go to that index
3. Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
4. If something does exist, add the new key/value pair to the data structure within that bucket.

### **Find()**

The Find takes in a key, gets the Hash, and goes to the index location specified.

Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

### **Contains()**

The Contains method with accept a key, and a return a bool on if that key exists inside the hashtable.

The best way to do this is to have the contains call the GetHash and check the table.

### **GetHash()**

The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

---
