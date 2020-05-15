const supertest= require('supertest');
const server= require('../api/server.js');

describe('testing first endpoint', () => {

    test('GET /', async () => {
        // ARRANGE
        const endpoint= '/';
        const status= 200;
    
        // ACT
        const res= await supertest(server).get(endpoint);
        // this console.log allows us to see the different things
        // we can test against
        // console.log(res);
    
        // ASSERT
        expect(res.statusCode).toBe(status);
        expect(res.text).toBe(`<h4 align='center'>Welcome to my server! :)</h4>`)
        expect(res.type).toBe('text/html'); // res.type is shorthand for res.headers["content-type"]
    });

});
