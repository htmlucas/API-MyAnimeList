
import { makeMockRequest } from '../__mocks__/MockRequest.mock';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { UserController } from './UserController';

const mockUserService = {
    createUser:jest.fn(),
    getUser:jest.fn()
}

jest.mock('../services/UserService',() =>{
    return {
        UserService:jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {
    const userController = new UserController();
    const mockResponse = makeMockResponse()

    it('Deve retornar o usuario com o userId informado', () =>{
        const mockRequest = makeMockRequest({
            params:{
                userId: '123456',
            }
        })

        userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('123456')
        expect(mockResponse.state.status).toBe(200)
    })
})