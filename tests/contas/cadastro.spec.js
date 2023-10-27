const app = require('../../src/servidor')
const request = require('supertest')

describe('Cadastro de Contas', () => {
    // geracao de token para alunos estudarem metodo beforeAll()
    // beforeAll = async () => {
    //     let token = await request(app).post('/login')
    //     .set('Authorization', 'Bearer tokenoaskdosakdosakd')
    //     .send({
    //         email: 'victor.torres@cubos.academy',
    //         senha: '123456'
    //     })
    // }
    test('Cadastrar conta informado corpo da requisicao vazio', async () => {
        const response = await request(app).post('/contas').send({})

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade nome', async () => {
        const response = await request(app).post('/contas')
        .send({
            email: 'victor.torres@cubos.academy',
            cpf: '11111111111',
            data_nascimento: '27/10/2023',
            telefone: '11987654321',
            senha: '123456'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade email', async () => {
        const response = await request(app).post('/contas')
        .send({
            nome: 'Victor',
            cpf: '11111111111',
            data_nascimento: '27/10/2023',
            telefone: '11987654321',
            senha: '123456'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade cpf', async () => {
        const response = await request(app).post('/contas')
        .send({
            nome: 'Victor',
            email: 'victor.torres@cubos.academy',
            data_nascimento: '27/10/2023',
            telefone: '11987654321',
            senha: '123456'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade data_nascimento', async () => {
        const response = await request(app).post('/contas')
        .send({
            nome: 'Victor',
            email: 'victor.torres@cubos.academy',
            cpf: '11111111111',
            telefone: '11987654321',
            senha: '123456'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade telefone', async () => {
        const response = await request(app).post('/contas')
        .send({
            nome: 'Victor',
            email: 'victor.torres@cubos.academy',
            data_nascimento: '27/10/2023',
            cpf: '11111111111',
            senha: '123456'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta sem informar a propriedade senha', async () => {
        const response = await request(app).post('/contas')
        .send({
            nome: 'Victor',
            email: 'victor.torres@cubos.academy',
            data_nascimento: '27/10/2023',
            telefone: '11987654321',
            cpf: '11111111111'
        })
        
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta informando e-mail duplicado/existente', async () => {
        await request(app).post('/contas')
            .send({
                nome: 'Victor Torres',
                email: 'victor.torres@cubos.academy',
                cpf: '11111111111',
                data_nascimento: '27/10/2023',
                telefone: '11987654321',
                senha: '123456'
            })

        const response = await request(app).post('/contas')
            .send({
                nome: 'Tiago Antunes',
                email: 'victor.torres@cubos.academy',
                cpf: '22222222222',
                data_nascimento: '20/10/2000',
                telefone: '11912345678',
                senha: '654321'
            })

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta informando cpf duplicado/existente', async () => {
        await request(app).post('/contas')
            .send({
                nome: 'Victor Torres',
                email: 'victor.torres.teste@cubos.academy',
                cpf: '11111111111',
                data_nascimento: '27/10/2023',
                telefone: '11987654321',
                senha: '123456'
            })

        const response = await request(app).post('/contas')
            .send({
                nome: 'Tiago Antunes',
                email: 'tiago.antunes@cubos.academy',
                cpf: '11111111111',
                data_nascimento: '20/10/2010',
                telefone: '11912345678',
                senha: '654321'
            })

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            expect.objectContaining({
                mensagem: expect.any(String)
            })
        )
    })

    test('Cadastrar conta informando corpo da requisicao completo e valido', async () => {
        const response = await request(app).post('/contas')
            .send({
                nome: 'Usuario 1',
                email: 'usuario1@cubos.academy',
                cpf: '12345678909',
                data_nascimento: '20/10/2001',
                telefone: '11912345678',
                senha: '654321'
            })
        
        expect(response.statusCode).toBe(201)
    })
})