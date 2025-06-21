
       <!-- Project Name -->
    <!--  Libary Management API   -->


This project is a Library Management RESTful API, developed using Express.js, TypeScript, and MongoDB.
The application allows easy management of library books, such as adding new books, updating book details, borrowing books, and keeping records of borrowed books.
All book-related operations can be managed through standard CRUD functionalities.



-------- Developed API Functionality------------------


1. Book Create API:

Add a new book to the library.
It takes title, author, genre, ISBN, and copies.
If any field is wrong, it shows an error.
Saves the book if everything is okay



2. Get All Books API:

Shows all books from the database.
You can filter, sort, or limit the list.
Useful to see all books in the library.
Returns book data with success message.


3. Get Single Book API:

Shows one book using its ID.
If the book is found, it returns details.
If not found, it shows an error message.
Used for viewing one book's info.


4.  Update Book API:

Update book info using book ID.
You can change fields like copies or title.
If book not found, shows error.
Returns updated book data.

5. Delete Book API:

Delete a book using its ID.
If book exists, it gets removed.
If not, it shows an error.
Returns a delete success message.

6.  Borrow Book API:

User can borrow a book.
It needs book ID, quantity, and due date.
If not enough copies, shows error.
Saves borrow info if valid.

7.  Borrow Summary API:

Shows report of borrowed books.
Displays how many times each book was borrowed.
Uses MongoDB aggregation to get results.
Helpful for library admins.





-------- Assignment Submission ----------------


1.  GitHub Repo Link = 

2.  Vercel Deployment Link =

3. Video Explainations Link =

4. All API Working  (Using Postman Application)








