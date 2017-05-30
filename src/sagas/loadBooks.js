import {call, put, takeEvery} from 'redux-saga/effects';

import BooksApi from '../api/booksApiClient';
import {booksReceived, types} from '../actions/books';

export function* loadBooks() {
    const response = yield call(BooksApi.loadBooks);
    const books = response.items;
    yield put(booksReceived(books));
}

function* watchForLoadBooks() {
    yield takeEvery(types.BOOKS_REQUESTED, loadBooks);
}

export default watchForLoadBooks;