import { AppDataSource } from "../database";
import { Anime } from "../entities/Anime";
import { Lists } from "../entities/Lists";
import { UserAnimeList } from "../entities/UserAnimeList";
import { ListRepository } from './../repositories/ListRepository';

export class ListService {

    private listRepository: ListRepository;

    constructor(listRepository = new ListRepository(AppDataSource.manager)){
        this.listRepository = listRepository
    }

    createList = async(user_id: string,name: string, ): Promise<Lists> => {
        const list = new Lists(user_id, name)
        return this.listRepository.createList(list)

    }

    getAllLists = async (user_id: string) => {
        return await this.listRepository.getAllLists(user_id)
    }

    getList = async(id_lists: string) => {
        return await this.listRepository.getList(id_lists)
    }

    getAnimesfromList = async(id_lists: string): Promise<Anime[] | null> => {
        
        const userAnimeList =  await this.listRepository.getAnimesfromList(id_lists)

        const arrayAnimes: string[] = []

        if(userAnimeList){
            userAnimeList.map( (content) => {
                return arrayAnimes.push(content.anime_id)
            })
            
        }

        const animes = await this.listRepository.getAnimesfromArray(arrayAnimes)

        return animes
        
    }

    updateNameList = async(listUpdate: Partial<Lists>): Promise<Lists | { error: string}> => {

        if (!listUpdate.id_lists) {
            return { error:'List ID is required' };
        }

        const getList = await this.listRepository.getList(listUpdate.id_lists)

        if(!getList){
            return { error:'List not found' };
        }

        Object.assign(getList,listUpdate)
        
        return await this.listRepository.updateNameList(getList)

    }

    deleteList = async (id_lists: string) => {
        const deleteList = await this.listRepository.deleteList(id_lists)
        if (deleteList.affected > 0) {
            return { message: `${deleteList.affected} Registro(s) excluido(s) com sucesso.`}
        }else{
            return { message: "Nenhum registro encontrado para a exclusao."}
        }        
    }
}