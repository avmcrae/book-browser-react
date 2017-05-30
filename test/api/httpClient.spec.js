import {expect} from 'chai';
import nock from 'nock';

import {get, post} from '../../src/api/httpClient';

describe("Http client", () => {
    const baseUrl = 'http://test.local';
    let nockInstance;

    beforeEach(() => {
        nockInstance = nock(baseUrl);
    });

    describe('GET requests', () => {
        it("handles successful responses", () => {
            const expectedResponseBody = {foo: 'bar'};
            nockInstance
                .get('/foo')
                .reply(200, expectedResponseBody);

            return get(`${baseUrl}/foo`)
                .then(responseBody => expect(responseBody).to.eql(expectedResponseBody));
        });

        it("handles unsuccessful responses", () => {
            const expectedResponseBody = {errors: ['a client error']};

            nockInstance
                .get('/foo')
                .reply(400, expectedResponseBody);

            return get(`${baseUrl}/foo`)
                .catch(errorBody => expect(errorBody).to.eql({errors: ['a client error']}));
        });

        it('handles empty JSON body responses', () => {
            nockInstance
                .get('/foo')
                .reply(204);

            return get(`${baseUrl}/foo`, {foo: 'bar'})
                .then(responseBody => expect(responseBody).to.eql(null));
        });
    });

    describe('POST requests', () => {
        it("handles successful responses", () => {
            nockInstance
                .post('/foo', JSON.stringify({foo: 'bar'}))
                .reply(200, {success: 'baz'});

            return post(`${baseUrl}/foo`, {foo: 'bar'})
                .then(responseBody => expect(responseBody).to.eql({success: 'baz'}));
        });

        it("handles unsuccessful responses", () => {
            nockInstance
                .post('/foo', JSON.stringify({foo: 'bar'}))
                .reply(500, {errors: ['a server error']});

            return post(`${baseUrl}/foo`, {foo: 'bar'})
                .catch(errorBody => expect(errorBody).to.eql({errors: ['a server error']}));
        });

        it('handles empty JSON body responses', () => {
            nockInstance
                .post('/foo')
                .reply(204);

            return post(`${baseUrl}/foo`, {foo: 'bar'})
                .then(responseBody => expect(responseBody).to.eql(null));
        });
    });
});