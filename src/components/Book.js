import React from 'react'

const Book = (props) => {
  const { title, author, image, getBook, id, position } = props;
  
  return (
    <article className="book">
      <div className='number-wrapper'>
        <span>#{position}</span>
      </div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Show Title</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Book