import { EntityManager, In } from "typeorm";
import { Lists } from "../entities/Lists";
import { UserAnimeList } from "../entities/UserAnimeList";
import { Anime } from "../entities/Anime";

interface returnDelete{
    raw:[],
    affected:number
}

export class ListRepository {
    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }


    createList = async (list: Lists): Promise<Lists> => {
        return await this.manager.save(list);
    }

    getAllLists = async (user_id: string): Promise<Lists[]| null> => {
        return await this.manager.find(Lists,{
            where:{
                user_id: user_id
            }
        })
    }

    getList = async(id_lists: string): Promise<Lists | null> => {
        return await this.manager.findOne(Lists,{
            where:{
                id_lists: id_lists
            }
        })
    }

    getAnimesfromList = async(id_lists: string): Promise<UserAnimeList[] | null> => {
        return await this.manager.find(UserAnimeList,{
            where:{
                id_lists:id_lists
            }
        })
    }

    getAnimesfromArray = async (animes_id: string[]): Promise<Anime[] | null> => {
        return await this.manager.findBy(Anime,{
            id:In(animes_id)
        })
    }

    updateNameList = async(list: Lists): Promise<Lists> => {
        return await this.manager.save(list)
    }

    deleteList = async (id_lists: string):Promise<returnDelete> => {
        const deleteResult =  await this.manager.delete(Lists,{id_lists: id_lists})

        const returnObj: returnDelete = {
            raw: deleteResult.raw,
            affected: deleteResult.affected || 0, // Se affected for undefined, assume 0
        };
    
        return returnObj;
    }
}