import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/components/app';
import BookListContainer from "../../src/components/bookList/BookListContainer";

describe('App Component', () => {
    it('should render a BookList with the correct retrieveBooks prop', () => {
       const app = shallow(<App />);
       expect(app).to.have.descendants(BookListContainer);
    });
});