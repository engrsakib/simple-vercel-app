import z from "zod";
import express, { Request, Response } from "express";
import { Book } from "../Model/book.model";

export const bookRoutes = express.Router();

export const createBookSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  author: z.string({ required_error: "Author is required" }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      required_error: "Genre is required",
      invalid_type_error: "Invalid genre",
    }
  ),
  isbn: z.string({ required_error: "ISBN is required" }),
  description: z.string().optional(),
  copies: z
    .number({ required_error: "Copies are required" })
    .min(0, "Copies must be a non-negative integer"),
  available: z.boolean().optional(),
});

// Create a new Book
bookRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const zodBody = await createBookSchema.parseAsync(req.body);
    const book = await Book.create(zodBody);

    res.status(201).json({
      success: true,
      message: "Successfully created book!",
      data: book,
    });
  } catch (error: any) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong while creating the book.",
      error: error?.message || error,
    });
  }
});

// Get all books (with filters, sorting, limit)
bookRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const filter = req.query.filter as string;
    const sortBy = (req.query.sortBy as string) || "createdAt";
    const sortOrder = (req.query.sort as string) === "desc" ? -1 : 1;
    const limit = parseInt(req.query.limit as string) || 10;

    let query: any = {};

    if (filter) {
      query.genre = filter;
    }

    const books = await Book.find(query)
      .sort({ [sortBy]: sortOrder })
      .limit(limit);

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get books", error });
  }
});

// Get a specific book by ID
bookRoutes.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get book", error });
  }
});

// Update a book by ID
bookRoutes.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const body = await createBookSchema.parseAsync(req.body);

    const updatedDoc = await Book.findByIdAndUpdate(id, body, { new: true });

    if (!updatedDoc) {
      return res.status(404).json({
        success: false,
        message: "No book found to update.",
      });
    }

    res.json({
      success: true,
      message: "Book updated successfully",
      data: updatedDoc,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: error.errors,
      });
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong while updating the book.",
      error: error?.message || error,
    });
  }
});

// Delete a book by ID
bookRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found to delete.",
      });
    }

    res.json({
      success: true,
      message: `Book with id ${id} deleted successfully!`,
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete book", error });
  }
});