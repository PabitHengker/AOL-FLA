# Smart Book System

A Java-based console application that simulates a digital book management system. This project demonstrates the implementation of structural and creational **Design Patterns** to build a scalable and decoupled software architecture.

## 🚀 Features

- **Create Book:** Dynamic book creation (Comics, Magazines, and Novels) using the **Factory Method Pattern**.
- **Read Book:** Controlled book access with simulated database fetching and access validation using the **Proxy Pattern**.
- **Console-Based Menu:** An interactive and user-friendly command-line interface with safe input handling.

---

## 🛠️ Design Patterns Implemented

### 1. Creational Pattern: Factory Method
Used to instantiate different types of books (`Comic`, `Magazine`, `Novel`) without exposing the creation logic to the client (`Main.java`).
- **`BookFactory`**: The abstract creator class.
- **`ComicFactory`, `MagazineFactory`, `NovelFactory`**: Concrete creators that override the factory method to return specific book instances.

### 2. Structural Pattern: Proxy
Used to provide a placeholder or surrogate for the real book object to control access to it.
- **`BookProxy`**: Intercepts requests to read a book, performing "Proxy Validation" and "Access DB" logging before delegating the call to the actual book object.
- **`ReadContent`**: The common interface implemented by both the real book classes and the proxy class.

---

## 📂 Project Structure

```text
src/
├── factory/
│   ├── BookFactory.java
│   ├── ComicFactory.java
│   ├── MagazineFactory.java
│   └── NovelFactory.java
├── model/
│   ├── ReadContent.java
│   ├── Comic.java
│   ├── Magazine.java
│   └── Novel.java
├── proxy/
│   └── BookProxy.java
└── main/
    └── Main.java
