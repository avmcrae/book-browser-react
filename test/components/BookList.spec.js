import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import '../support/jsdom';
import BookList from '../../src/components/BookList';

describe('BookList Component', () => {
    chai.use(chaiEnzyme());
    chai.use(sinonChai);

    let props, loadBooksSpy;

    beforeEach(() => {
        loadBooksSpy = sinon.spy();
        props = {
           loadBooks: loadBooksSpy
        }
    });

    it('renders a welcome message', () => {
        const bookList = shallow(<BookList {...props} />);

        expect(bookList).to.contain.text('Welcome');
    });

    it('should call loadBooks on mount', () => {
      mount(<BookList {...props} />);

      expect(loadBooksSpy).to.have.been.called;
    });
});