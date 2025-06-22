# 📚 Library Management API

A RESTful API for managing library books, built with **Express.js**, **TypeScript**, and **MongoDB**.

This API enables easy management of a library system, including adding, updating, borrowing books, and tracking borrow records. All book-related operations are supported via standard CRUD functionalities.

---

## 🚀 Features

- **Add Books:** Create new book entries with title, author, genre, ISBN, and copies.
- **View Books:** List all books with optional filtering, sorting, and limiting.
- **View Single Book:** Retrieve a specific book's details by its ID.
- **Update Books:** Edit book information using its ID.
- **Delete Books:** Remove books from the library by ID.
- **Borrow Books:** Borrow specified copies of a book with due date tracking.
- **Borrow Summary:** View how many times each book was borrowed (admin report).

---

## 🛠️ API Endpoints

### 1. **Create Book**
- **Description:** Add a new book to the library.
- **Request:**  
  - Fields: `title`, `author`, `genre`, `isbn`, `copies`
- **Validation:** 
  - Shows an error if any field is missing or invalid.
  - Saves the book if data is valid.

---

### 2. **Get All Books**
- **Description:** Retrieve all books from the database.
- **Features:** 
  - Filtering, sorting, and limiting supported via query parameters.
- **Response:**  
  - Returns all book data with a success message.

---

### 3. **Get Single Book**
- **Description:** Fetch a book by its ID.
- **Response:** 
  - Returns book details if found.
  - Shows an error if not found.

---

### 4. **Update Book**
- **Description:** Update a book's information using its ID.
- **Request:** 
  - Fields to update (e.g., title, author, copies).
- **Response:** 
  - Returns updated book data if successful.
  - Shows error if book not found.

---

### 5. **Delete Book**
- **Description:** Delete a book using its ID.
- **Response:** 
  - Returns a success message if deleted.
  - Shows error if book not found.

---

### 6. **Borrow Book**
- **Description:** Borrow a book from the library.
- **Request:** 
  - Fields: `bookId`, `quantity`, `dueDate`
- **Validation:** 
  - Error if not enough copies are available.
  - Saves borrow info if valid.

---

### 7. **Borrow Summary**
- **Description:** View a summary report of all borrowed books.
- **Features:** 
  - Displays how many times each book was borrowed.
  - Uses MongoDB aggregation for statistics.
  - Useful for admins.

---

## 📦 Assignment Submission

- **GitHub Repo:** [Add your repo link here]
- **Vercel Deployment:** [Add your Vercel live link here]
- **Video Explanation:** [Add your video link here]
- **API Testing:** All APIs are tested using [Postman](https://www.postman.com/)

---

## 📝 How to Use

1. **Clone the repository**
2. **Install dependencies:**  
   ```bash
   npm install
   ```
3. **Configure environment variables** in `.env` file
4. **Run the server:**  
   ```bash
   npm run dev
   ```
5. **Use Postman or any REST client to test the API endpoints**

---

## 💡 Tech Stack

- **Backend:** Express.js, Node.js
- **Language:** TypeScript
- **Database:** MongoDB (with Mongoose)
- **Validation:** Zod

---

## 🙏 Thank you!

Feel free to contribute, raise issues, or fork the repository!
