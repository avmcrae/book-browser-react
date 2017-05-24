import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import {shallow} from 'enzyme';

import BookList from '../src/BookList';

describe('BookList Component', () => {
    chai.use(chaiEnzyme());
    it('renders a welcome message', () => {
        const bookList = shallow(<BookList />);
        expect(bookList).to.contain.text('Welcome');
    });
});