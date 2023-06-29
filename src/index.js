import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./components/Book";
import { books } from "./data/books";

import "./index.css";

const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const newBooks = books.map((book, index) => ({
  ...book,
  id: generateRandomString(9) + (index + 1),
  position: index + 1,
}));

const BookList = () => {
  const getBook = (id) => {
    const book = newBooks.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1 className="main-title">Amazon Best Seller</h1>
      <section className="booklist">
        {newBooks.map((book) => {
          return <Book {...book} getBook={getBook} key={book.id} />;
        })}
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <BookList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
