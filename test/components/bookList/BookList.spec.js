import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import {shallow} from 'enzyme';

import '../../support/jsdom';
import BookList from '../../../src/components/bookList/BookList';
import BookBuilder from '../../support/builders/bookBuilder';

describe('BookList Component', () => {
    chai.use(chaiEnzyme());

    let props;

    beforeEach(() => {
        props = {
           loadBooks: () => {},
           books: [new BookBuilder().build()]
        }
    });

    it('renders a welcome message', () => {
        const bookList = shallow(<BookList {...props} />);

        expect(bookList).to.contain.text('Welcome');
    });
});