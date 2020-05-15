const supertest= require('supertest');
const server= require('../api/server.js');

// call this hook to refresh seed data
// especially when making a POST req
beforeEach(async () => {
    await db.seed.run();
});

// this stops from keeping knex connected to db
// while testing and stops showing the error in console
afterAll(async () => {
    await db.destroy();
});

describe('characters integration tests', () => {
    it('GET /api/characters', async () => {
        // - Does it return the expected status code?
        // - Does it return the expected data format?
        // - Does it return the expected data?

        const res= await supertest(server).get('/api/characters');
        console.log(res);
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe('application/json'); // shorthand for res.headers['content-type]
        expect(res.body).toHaveLength(4); // Arr with 4 objects inside
        expect(res.body[0].name).toBe('Michael Scott'); 
        // check in the res.body which is an Arr, at index 0 to === Michael Scott
    });

    it('GET /api/characters/:id', async () => {
        const res= await supertest(server).get('/api/characters/2');
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body.name).toBe('Dwight Schrute');
    });

    it('POST /api/characters', async () => {
        const payload= {
            name: 'Pamela Beasly',
            department: 'Front Desk/Sales'
        };
        const res= await supertest(server).post('/api/characters').send(payload);
        expect(res.statusCode).toBe(201);
        expect(res.type).toBe('application/json');
        expect(res.body.name).toBe('Pamela Beasly');
    });

    it('DELETE /api/characters/:id', async () => {
        const res= await supertest(server).delete('/api/characters/4');
        expect(res.statusCode).toBe(204);
    });
});