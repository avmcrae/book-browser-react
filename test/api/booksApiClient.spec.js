import {expect} from 'chai';
import nock from 'nock';

import BookBuilder from "../support/builders/bookBuilder";
import {BooksApiClient} from "../../src/api/booksApiClient";

describe('Books API Client', () => {
    it('gets a list of books', () => {
        const apiKey = 'fakeApiKey';
        const booksBaseUrl = 'http://www.test.com';
        const booksResponse = {books: [new BookBuilder().build(), new BookBuilder().build()]};

        nock(booksBaseUrl)
            .get('/books/v1/volumes')
            .query({q: "\"\"", apiKey})
            .reply(200, booksResponse);

        return BooksApiClient(booksBaseUrl, apiKey)
            .loadBooks()
            .then(response => expect(response).to.eql(booksResponse));
    })
});