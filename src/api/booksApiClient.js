/* global GOOGLE_BOOKS_API_KEY */
import {get} from "./httpClient";
import getEnvProperty from "../../config/getEnvProperty";

export const BooksApiClient = (rootUrl, apiKey) => ({
    loadBooks: () => (get(`${rootUrl}/books/v1/volumes?q=""&apiKey=${apiKey}`))
});

export default new BooksApiClient(getEnvProperty('GOOGLE_BOOKS_API_URL'), GOOGLE_BOOKS_API_KEY);