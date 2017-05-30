/* global GOOGLE_BOOKS_API_KEY */
import nock from 'nock';

import BookBuilder from './builders/bookBuilder';

export const generateLoadBooksStub = () => {
    const books = [new BookBuilder().build(), new BookBuilder().build(), new BookBuilder().build()];
    nock('https://www.googleapis.com/')
        .get(`/books/v1/volumes?q=""&key=${GOOGLE_BOOKS_API_KEY}`)
        .reply(200, books);
};