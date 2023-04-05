// action types
const ADD_BOOK = 'books/booksSlice/ADD_BOOK';
const REMOVE_BOOK = 'books/booksSlice/REMOVE_BOOK';

// reducer
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((item) => item.id !== action.id),
      ];
    default:
      return state;
  }
}

// action creator
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
