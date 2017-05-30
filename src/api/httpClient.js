import fetch from 'isomorphic-fetch';

export const get = (path, headers = {}) =>
    fetch(encodeURI(path), {
        method: 'GET',
        headers: {...headers, 'content-type': 'application/json'}
    }).then(filterByStatus);

export const post = (path, body = {}, headers = {}) =>
    fetch(encodeURI(path), {
        method: 'post',
        headers: {...headers, 'content-type': 'application/json'},
        body: JSON.stringify(body)
    }).then(filterByStatus);

const filterByStatus = (response) => (response.status === 204) ? null : response.json();