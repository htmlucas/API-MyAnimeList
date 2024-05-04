import { EntityManager } from "typeorm"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

describe('UserRepository', () => {
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        id_user: '12345',
        name: 'Lucas',
        email: 'lucas@gmail.com',
        password: 'password'
    }

    beforeAll(async() => {
        const managerMock = await getMockEntityManager({})
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('Deve cadastrar um novo usuario no banco de dados', async() => {
        await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
    })
})
