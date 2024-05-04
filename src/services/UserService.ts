import { sign } from "jsonwebtoken";
import { AppDataSource } from "../database";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { UserDetails } from "../entities/UserDetails";


export class UserService {    
    private userRepository: UserRepository;

    constructor(userRepository = new UserRepository(AppDataSource.manager)){
        this.userRepository =  userRepository
    }

    createUser = async(nickname:string, email:string,password: string): Promise<User> => {
        const user = new User(nickname,email,password)        
        const userCreated = await this.userRepository.createUser(user)
        
        const userDetails = new UserDetails(userCreated.id_user)
        await this.userRepository.createUserDetail(userDetails)
        
        return userCreated
    }

    updateUserDetails = async(newData: Partial<UserDetails>): Promise<UserDetails | { error: string }> => {

        if (!newData.user_id) {
            return { error:'User ID is required' };
        }        
        const userDetail = await this.userRepository.getUserDetail(newData.user_id)

        if(!userDetail){
            return { error:'UserDetails not found' };
        }

        Object.assign(userDetail, newData);

        const updatedUserDetails = await this.userRepository.updateUserDetail(userDetail);

        return updatedUserDetails;
        
    }

    getUser = async(userId: string): Promise<User | null> => {
        return this.userRepository.getUser(userId)
    }
    
    getUserDetail = async(userId: string): Promise<UserDetails | null> => {
        return this.userRepository.getUserDetail(userId)
    }

    getAuthenticatedUser = async(email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPassword(email,password)
    }

    getToken = async(email: string, password: string): Promise<string> => {
        const user = await this.getAuthenticatedUser(email, password)

        if(!user){
            throw new Error('email/password invalid!')
        }

        const tokenData = {
            nickname: user?.nickname,
            email: user?.email
        }

        const tokenKey = '123456789'

        const tokenOptions = {
            subject: user?.id_user
        }

        const token = sign(tokenData,tokenKey,tokenOptions)

        return token
    }
}