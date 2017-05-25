import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/components/app';
import BookList from '../../src/components/BookList';
import {loadBooks} from '../../src/actions/books';

describe('App Component', () => {
    it('should render a BookList with the correct retrieveBooks prop', () => {
       const app = shallow(<App />);
       expect(app.find(BookList)).to.have.prop('loadBooks', loadBooks);
    });
});