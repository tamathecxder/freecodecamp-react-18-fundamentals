import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Book = (props) => {
  const title = props.title;
  const author = props.author;
  const image = props.image;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const BookList = () => {
  const firstBook = {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
  };

  const secondBook = {
    title: "Iron Flame",
    author: "Rebecca Yaros",
    image: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL600_SR600,400_.jpg"
  };

  const thirdBook = {
    title: "The Covenant Of Water",
    author: "Abraham Verghese",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL600_SR600,400_.jpg"
  };
  
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        image={thirdBook.image}
      />
    </section>
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

root.render(<App />);

export default App;
