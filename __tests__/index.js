const supertest= require('supertest');
const server= require('../api/server.js');

test('GET /', async () => {
    // ARRANGE
    const endpoint= '/';
    const status= 200;

    // ACT
    const res= await supertest(server).get(endpoint);
    console.log(res);

    // ASSERT
    expect(res.statusCode).toBe(status);
    expect(res.text).toBe(`<h4 align='center'>Welcome to my server! :)</h4>`)
    expect(res.type).toBe('text/html'); // res.type is shorthand for res.headers["content-type"]
});