# Read 29 - Azure Blobs

## 🏡 [**Home**](https://mistidinzy.github.io/ReadingNotes/) | [**401 Home**](https://bit.ly/3EcMrF6)

---

## Reading Links

[Intro to Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)

[Blob Storage Quickstart](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-dotnet?tabs=windows)

[Azure Storage Doc](https://docs.microsoft.com/en-us/azure/storage/)

---

## About Blob Storage

Azure Blob storage is Microsoft's object storage solution for the cloud.

Blob storage is optimized for storing massive amounts of unstructured data.

Unstructured data is data that doesn't adhere to a particular data model or definition, such as text or binary data.

Users or client applications can access objects in Blob storage via HTTP/HTTPS, from anywhere in the world.

---

### Storage accounts

A storage account provides a unique namespace in Azure for your data.

Every object that you store in Azure Storage has an address that includes your unique account name.

The combination of the account name and the Azure Storage blob endpoint forms the base address for the objects in your storage account.

---

## Containers

A container organizes a set of blobs.

A container name must be lowercase.

---

## Blobs

Azure supports three types of blobs.

1. Block blobs
2. Append blobs
3. Page blobs

---

![Blob Relationship](/401/images/blob1.png)

---
