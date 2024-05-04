import { EntityManager } from "typeorm";
import { User } from "../entities/User";
import { UserDetails } from "../entities/UserDetails";


export class UserRepository {
    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }

    createUser = async(user:User): Promise<User> => {
        return this.manager.save(user)
    }

    createUserDetail = async(userDetails: UserDetails): Promise<UserDetails> => {
        return this.manager.save(userDetails)
    }

    updateUserDetail = async(userDetail: UserDetails): Promise<UserDetails> => {
        return this.manager.save(userDetail)
    }

    getUser = async(userId: string): Promise<User | null> => {
        return this.manager.findOne(User,{
            where:{
                id_user:userId
            }
        })
    }

    getUserDetail = async(userId: string): Promise<UserDetails | null> => {
        return this.manager.findOne(UserDetails,{
            where:{
                user_id:userId
            }
        })
    }

    getUserByEmailAndPassword = async(email: string, password: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where:{
                email,
                password
            }
        })
    }
}