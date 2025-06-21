import express, { Application } from 'express';
import cors from 'cors';
import { bookRoutes } from './MVC/Controller/book.controller';
import { borrowRoutes } from './MVC/Controller/borrow.controller';

const app:Application = express();

app.use(cors());
app.use(express.json())

// BooksRoutes Middleware 
  app.use("/api/books", bookRoutes);
  // Borrows Middleware
  app.use('/api/borrow', borrowRoutes)


app.get('/', (req, res) => {
    res.send("Libary management project Created")
})


export default app;