// tests/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('GET /api/add', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(0, () => {
            done();
        });
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return the sum of two numbers', async () => {
        const response = await request(server).get('/api/add').query({ a: 1, b: 2 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(3);
    });

    it('should return 400 for invalid input', async () => {
        const response = await request(server).get('/api/add').query({ a: 'foo', b: 2 });
        expect(response.statusCode).toBe(400);
    });
});
