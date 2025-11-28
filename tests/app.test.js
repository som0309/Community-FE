const request = require('supertest');
const app = require('../app');

describe('GET /post/:postId', () => {
    it('should return post.html', async () => {
        const res = await request(app).get('/post/1');
        expect(res.statusCode).toBe(200);
    });
});

describe('GET /edit/:postId', () => {
    it('should return edit-post.html', async () => {
        const res = await request(app).get('/edit/1');
        expect(res.statusCode).toBe(200);
    });
});