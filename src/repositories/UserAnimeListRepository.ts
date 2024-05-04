import { EntityManager } from "typeorm";
import { UserAnimeList } from "../entities/UserAnimeList";

interface returnDelete{
    raw:[],
    affected:number
}

export class UserAnimeListRepository {
    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }


    create = async (useranimelist: UserAnimeList): Promise<UserAnimeList> => {
        return await this.manager.save(useranimelist);
    }

    delete = async (id_lists: string, id_anime: string): Promise<returnDelete> => {
        const deleteResult =  await this.manager.delete(UserAnimeList,{id_lists: id_lists, anime_id: id_anime})

        const returnObj: returnDelete = {
            raw: deleteResult.raw,
            affected: deleteResult.affected || 0, // Se affected for undefined, assume 0
        };
    
        return returnObj;
    }
}