# 📚 Book List API - Backend System

A simple and modular RESTful API built with **Node.js** and **Express** to manage a list of books.

![Book List API Screenshot](https://raw.githubusercontent.com/duduBmoon21/wtm-bookListApi/main/static/GET.png)

---

## 📚 Table of Contents

* [🗂 Project Structure](#-project-structure)
* [✨ Features](#-features)
* [🌐 API Endpoints](#-api-endpoints)
* [🔧 Installation](#-installation)
* [▶️ Usage Examples](#️-usage-examples)
* [🖼 Screenshots](#-screenshots)

---

## 🗂 Project Structure

```
book-list-api/
├── app/
│   ├── controllers/         # Route controllers
│   │   └── bookController.js
│   ├── routes/              # API route definitions
│   │   └── bookRoutes.js
│   ├── services/            # Business logic
│   │   └── bookService.js
│   ├── app.js               # Express application setup
│   └── server.js            # Server entry point
├── tests/                   # Test files
├── static/                  # Static assets (e.g., screenshots)
│   └── GET.png
├── package.json
└── README.md
```

---

## ✨ Features

* 📆 RESTful API structure
* 📝 Full CRUD operations for managing books
* 🧠 In-memory data storage
* 🛡 Error handling middleware
* ✅ Request validation
* 🧹 Clean and modular codebase

---

## 🌐 API Endpoints

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/api/books`     | Create a new book        |
| GET    | `/api/books`     | Retrieve all books       |
| GET    | `/api/books/:id` | Retrieve a specific book |
| PUT    | `/api/books/:id` | Full update of a book    |
| PATCH  | `/api/books/:id` | Partial update of a book |
| DELETE | `/api/books/:id` | Delete a book            |

---

## 🔧 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/duduBmoon21/wtm-bookListApi.git
cd wtm-bookListApi
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Server**

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

---

## ▶️ Usage Examples

### ✅ Create a Book

```http
POST /api/books
Content-Type: application/json

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018
}
```

### 📚 Get All Books

```http
GET /api/books
```

### 🔍 Get Book by ID

```http
GET /api/books/1
```

---

## 🗜 Screenshots

### GET all books

![GET Example](https://raw.githubusercontent.com/duduBmoon21/wtm-bookListApi/main/static/GET.png)

---

## 📬 Contact

Built with ❤️ by [Eleanor Tefera](https://github.com/duduBmoon21)
Feel free to open issues or contribute!
