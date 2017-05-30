export default class {
    constructor() {
        this.id = Math.round(Math.random() * 100);
        this.volumeInfo = {
            title: 'A book title',
            subtitle: 'subtitle',
            authors: ['author'],
            publisher: 'publisher',
            publishedDate: '2010',
            description: 'a very detailed and useful description',
            industryIdentifiers: [
                {
                    type: "ISBN_13",
                    identifier: "9780838910382"
                },
                {
                    type: "ISBN_10",
                    identifier: "0838910386"
                }
            ],
            imageLinks: {
                smallThumbnail: "http://www.aSmallThumbnail.com",
                thumbnail: "http://www.aThumbnail.com"
            }
        }
    }

    build() {
        return {
            id: this.id,
            volumeInfo: this.volumeInfo
        }
    }
}