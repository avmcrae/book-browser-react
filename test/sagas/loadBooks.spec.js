import { testSaga } from 'redux-saga-test-plan';

import watchForLoadBooks, {loadBooks} from '../../src/sagas/loadBooks';
import BooksApi from '../../src/api/booksApiClient';
import BookBuilder from '../support/builders/bookBuilder';
import {booksReceived, types} from '../../src/actions/books';

describe('loadBooks Saga', () => {
   it('should watch for loadBooks action', () => {
       testSaga(watchForLoadBooks)
           .next()
           .takeEveryEffect(types.BOOKS_REQUESTED, loadBooks)
           .finish()
           .isDone();
   });

   it('should dispatch booksReceived action when books are loaded', () => {
       const bookList = [new BookBuilder().build()];
       const booksApiResponse = {items: bookList};

       testSaga(loadBooks)
           .next()
           .call(BooksApi.loadBooks)
           .next(booksApiResponse)
           .put(booksReceived(bookList))
           .next()
           .isDone();
   });
});