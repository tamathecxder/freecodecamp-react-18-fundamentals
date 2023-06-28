import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
        alt="Atomic Habits"
      />
      <h2>Atomic Habits</h2>
      <h4>James Clear</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
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

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

export default App;
