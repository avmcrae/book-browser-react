import {types} from "../actions/books";
const initialState = {
    all: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.BOOKS_RECEIVED:
            return {
                ...state,
                all: action.payload.books
            };
        default:
            return state;
    }
}

export const getBooks = (state) => (state.books.all || []);