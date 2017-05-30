export const types = {
    BOOKS_REQUESTED: 'BOOKS_REQUESTED',
    BOOKS_RECEIVED: 'BOOKS_RECEIVED'
};

export const loadBooks = () => ({
    type: types.BOOKS_REQUESTED
});

export const booksReceived = (books) => ({
    type: types.BOOKS_RECEIVED,
    payload: {books}
});