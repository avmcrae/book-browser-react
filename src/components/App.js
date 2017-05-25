import React from 'react';

import {loadBooks} from "../actions/books";
import BookList from './BookList';

const App = () => (
    <BookList loadBooks={loadBooks} />
);

export default App;