import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg"
      alt="Atomic Habits"
    />
  );
};

const Title = () => {
  return <h2>Atomic Habits</h2>;
};

const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
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
