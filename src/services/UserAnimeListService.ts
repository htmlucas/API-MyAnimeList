import { AppDataSource } from "../database";
import { UserAnimeList } from "../entities/UserAnimeList";
import { UserAnimeListRepository } from "../repositories/UserAnimeListRepository";


export class UserAnimeListService {

    private useranimelistRepository: UserAnimeListRepository;

    constructor(useranimelistRepository = new UserAnimeListRepository(AppDataSource.manager)){
        this.useranimelistRepository = useranimelistRepository
    }

    create = async(id_lists: string,anime_id: string,date_added:Date,rating:number ): Promise<UserAnimeList> => {
        const newUserAnimeList = new UserAnimeList(id_lists, anime_id, date_added, rating)        
        return this.useranimelistRepository.create(newUserAnimeList)

    }

    delete = async(id_lists: string, id_anime: string) => {
        const deleteList = await this.useranimelistRepository.delete(id_lists, id_anime)
        if (deleteList.affected > 0) {
            return { message: `${deleteList.affected} Registro(s) excluido(s) com sucesso.`}
        }else{
            return { message: "Nenhum registro encontrado para a exclusao."}
        }
    }
}