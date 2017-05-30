import React from 'react';
import PropTypes from 'prop-types';

class BookList extends React.Component {
    componentWillMount() {
        this.props.loadBooks();
    }

    render() {
        return (
            <div>
                Welcome! Browse for books below.
                {this.props.books.map((book) => (
                    <div className='book' key={book.id}>{book.volumeInfo.title}</div>
                ))}
            </div>
        )
    }
}

BookList.propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array
};

export default BookList;