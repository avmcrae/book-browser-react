import {connect} from 'react-redux';

import BookList from './BookList';
import {getBooks} from '../../reducers/books';
import {loadBooks} from '../../actions/books';

const mapStateToProps = (state) => ({
   books: getBooks(state)
});

const mapDispatchToProps = {loadBooks};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);