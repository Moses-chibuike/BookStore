import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const { title, author, id } = book;
  return (
    <div>
      <h2>
        {title}
      </h2>
      <h2>
        {author}
      </h2>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(id));
        }}
      >
        Remove

      </button>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookItem;
