import React from 'react';

class BookList extends React.Component {
    componentWillMount() {
        this.props.loadBooks();
    }

    render() {
        return (
            <div>
                Welcome! Browse for books below.
            </div>
        )
    }
}

export default BookList;