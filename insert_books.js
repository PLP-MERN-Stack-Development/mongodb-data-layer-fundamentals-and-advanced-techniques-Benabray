// insert_books.js
// This script inserts 10 book documents into the 'books' collection

const { MongoClient } = require("mongodb");

// Connection string for local MongoDB
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database and collection names
const dbName = "plp_bookstore";
const collectionName = "books";

// Sample book data
const books = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 15.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 11.99,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 13.99,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 17.99,
    in_stock: false,
    pages: 448,
    publisher: "Crown Publishing"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 14.99,
    in_stock: true,
    pages: 464,
    publisher: "Harper"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    published_year: 2012,
    price: 12.99,
    in_stock: false,
    pages: 371,
    publisher: "Random House"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    published_year: 1965,
    price: 9.99,
    in_stock: true,
    pages: 412,
    publisher: "Chilton Books"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 8.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 7.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  }
];

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(books);
    console.log(`📚 ${result.insertedCount} books inserted`);
  } catch (err) {
    console.error("❌ Error inserting books:", err);
  } finally {
    await client.close();
  }
}

run();


