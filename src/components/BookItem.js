import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ book }) {
  const { title, author } = book;
  return (
    <div>
      <h2>
        {title}
      </h2>
      <h2>
        {author}
      </h2>
      <button type="submit">Remove Book</button>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;
