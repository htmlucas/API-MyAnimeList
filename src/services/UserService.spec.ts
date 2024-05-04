import { UserService } from "./UserService"
import * as jwt from 'jsonwebtoken'

jest.mock('../repositories/UserRepository')
jest.mock('../database',() => {
    initialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {

    const userService = new UserService(mockUserRepository)
    const mockUser = {
        id_user : '12345',
        name: 'lucas',
        email:'lucas@gmail.com',
        password: '12345'
    }


    it('Deve adicionar um novo usuario', async() => {
        mockUserRepository.createUser = jest.fn().mockImplementation( () => Promise.resolve(mockUser))
        const response = await userService.createUser('lucas','lucas@gmail.com','12345')
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '12345',
            name: 'lucas',
            email:'lucas@gmail.com',
            password: '12345'
        })
    })

    it('Deve retornar um token de usuario', async() => {

        jest.spyOn(userService,'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('lucas@gmail.com','123456')
        expect(token).toBe('token')
    })

    it('Deve retornar um erro caso nao encontro um usuario', async() => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('invalid@teste.com','123456')).rejects.toThrowError(new Error('email/password invalid!'))
    })

})