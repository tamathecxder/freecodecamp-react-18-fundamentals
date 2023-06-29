import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Book = (props) => {
  const { title, author, image, children } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const EventExamples = () => {
  const handleFormInput = (event) => {
    // 
  };

  const handleButtonClick = () => {
    alert("Hi, Mom!");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Form is submitted");
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Input</h2>
        <input
          type="text"
          name="example"
          id="example"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        />
        <button type="submit">
          Submit
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" onClick={handleButtonClick}>
            Click 1
          </button>
          <button type="button" onClick={() => console.log("Arrow function callback")}>
            Click 2
          </button>
        </div>
      </form>
    </section>
  );
};

const BookList = () => {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "Iron Flame",
      author: "Rebecca Yaros",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL600_SR600,400_.jpg",
    },
    {
      title: "The Covenant Of Water",
      author: "Abraham Verghese",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL600_SR600,400_.jpg",
    },
  ];

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
  }));

  return (
    <section className="booklist">
      <EventExamples />
      {newBooks.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
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

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
