import supertest from 'supertest'
import app from '..'

const req = supertest(app)

describe('Test the base end point', () => {
    it('Get the / endpoint', async () => {
        const res = await req.get('/')
        expect(res.status).toBe(200)
    })
})
