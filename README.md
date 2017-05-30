# Book Browser

A simple application to browse books retrieved from the Google Books API.

## Dependencies

- nodejs v6.3.1
- yarn v0.24.4

## Project set up
Note: a [Google API Key](https://console.developers.google.com/projectselector/apis/credentials) is required by the application

1. Clone the repository
2. `$ cd book-browser-react`
3. `$ yarn install`

## Running the application
```
    $ export GOOGLE_BOOKS_API_KEY=${insert-api-key}
    $ yarn build
    $ yarn start
```

## Local Development

For hot reloading, run `$ yarn build:watch` and run `$ yarn start` in a separate tab.

To run the tests once:
`$ yarn test`  

To run the tests with a watch:
`$ yarn test:watch`