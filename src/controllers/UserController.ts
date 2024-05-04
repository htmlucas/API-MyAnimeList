import { Request, Response } from 'express'
import { UserService } from './../services/UserService';
import { UserDetails } from '../entities/UserDetails';

export class UserController {

    userService: UserService

    constructor(userService = new UserService()){
        this.userService = userService
    }

    createUser = (request :Request, response :Response) => {
        const user = request.body
        
        if(!user.nickname || !user.email || !user.password){
            return response.status(400).json({message:'Bad request! todos os campos são obrigatorios'})
        }
        
        this.userService.createUser(user.nickname, user.email, user.password)
        return response.status(201).json({message: 'Usuario criado'})
    }

    updateUserDetails = async (request: Request, response: Response) => {
        const userDetails = request.body

        if(!userDetails.user_id){
            return response.status(400).json({ message: 'Bad request ! ID do usuário é obrigatorio'})
        }

        try{
            const updateUserDetails = await this.userService.updateUserDetails(userDetails)

            if ('error' in updateUserDetails) {
                return response.status(400).json({ message: updateUserDetails.error });
            }

            return response.status(201).json({ message: 'Detalhes do usuário atualizados', updateUserDetails });
        } catch (error) {
            return response.status(500).json({ message: 'Erro ao processar a requisição' });
        }
        
    }

    getUser = async(request: Request, response: Response) => {
        const { userId } = request.params
        const user = await this.userService.getUser(userId)
        const userDetail = await this.userService.getUserDetail(userId)
        return response.status(200).json({
            userId:user?.id_user,
            nickname: user?.nickname,
            email: user?.email,
            cep: userDetail?.cep,
            cidade: userDetail?.cidade,
            estado: userDetail?.estado,
            pais: userDetail?.pais,
            bio: userDetail?.bio
        })
    }

    deleteUser = (request:Request, response:Response) => {
        const user = request.body        
        return response.status(200).json({message:'Usuario Deletado'})
    }
}