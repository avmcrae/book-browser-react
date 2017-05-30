import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import {mount} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {createWaitForElement} from 'enzyme-wait';

import '../../support/jsdom';
import reducers from '../../../src/reducers/index';
import BookListContainer from '../../../src/components/bookList/BookListContainer';
import {generateLoadBooksStub} from '../../support/apiStubs';

describe('BookList Container', () => {
    chai.use(chaiEnzyme());

    it('should display books loaded on mount', () => {
        const waitForBooks = createWaitForElement('.book');
        const store = createStore(reducers);
        const books = generateLoadBooksStub();

        const bookList = mount(<Provider store={store}><BookListContainer /></Provider>);

        waitForBooks(bookList).then((bookList) => {
            expect(bookList.find('.book')).to.have.length(books.length);
            books.forEach((book) => (
                expect(bookList.text()).to.contain(book.volumeInfo.title)
            ));
        });
    });
});