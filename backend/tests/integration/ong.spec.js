const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connect');

describe('ONG', () =>{
    //Antes de executar o teste, crie os bancos de dados
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    //Depois de executar todos os testes
    afterAll(async () => {
        await connection.destroy();
    });

    //Teste 1
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name : "APAD",
	        email : "asdaj@email.com",
	        whatsapp : "00809890000",
	        city : "Quixas",
	        uf : "CE"
        });
       
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})