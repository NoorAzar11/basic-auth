'use strict';


const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app);

describe('JS Testing Unites ', ()=> {   


    it('Testing 404 Error', async () => {

        const response = await request.post('/path');
        expect(response.status).toEqual(404);
    });



    it('Testing LogIn Routes', async () => {

        let LogInTest ={
            username:'Nooor',
            password:'As123'
        }

        const response = await request.post('/signin').send(LogInTest); 
        expect(response.status).toEqual(404);
    });

    
    it('Testing sigin up Routes', async () => {

        let regTestingpath ={
            username:'rrr',
            password:'456'
        }
        const response = await request.post('/signup').send(regTestingpath); 
        expect(response.status).toEqual(200);
    });

    it('Testing 404 Error Bad path', async () => {

        const response = await request.post('/');
        expect(response.status).toEqual(404);
    });

});