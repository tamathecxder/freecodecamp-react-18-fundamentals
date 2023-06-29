import React from 'react'

const Book = (props) => {
  const { title, author, image, getBook, id } = props;
  
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Show Title</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Book