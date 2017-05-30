import { fork } from 'redux-saga/effects';

import watchForLoadBooks from './loadBooks';

export default function* root() {
    yield [
        fork(watchForLoadBooks)
    ]
}