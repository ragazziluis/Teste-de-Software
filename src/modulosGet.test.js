const supertest = require('supertest');
import { app } from '../main';

test('getModulos', async () => {
    const response = await supertest((await app).getHttpServer()).get('/modulos');
    expect(response.statusCode).toEqual(100);
});