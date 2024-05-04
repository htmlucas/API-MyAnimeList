import { Response, Request } from 'express'
import { UserAnimeListService } from '../services/UserAnimeListService';

export class UserAnimeListController {
    useranimelistService: UserAnimeListService

    constructor(useranimelistService = new UserAnimeListService()){
        this.useranimelistService = useranimelistService
    }

    create = async(request: Request, response: Response) => {

        const newUserAnimeList = request.body

        if(!newUserAnimeList.id_lists || !newUserAnimeList.anime_id || !newUserAnimeList.date_add || !newUserAnimeList.rating){
            return response.status(400).json({ message: 'Bad request! Todos os campos são obrigatórios'})
        }
        const useranimelistResponsecreated = await this.useranimelistService.create(newUserAnimeList.id_lists,newUserAnimeList.anime_id, newUserAnimeList.date_add, newUserAnimeList.rating)

        return response.status(201).json(useranimelistResponsecreated)
    }

    deleteUserAnimeList = async(request: Request, response: Response) => {
        const { id_lists,id_anime } = request.params

        if(!id_anime || !id_lists ){
            return response.status(400).json({ message: 'Bad request! Todos os campos são obrigatórios'})
        }

        const responseDelete = await this.useranimelistService.delete(id_lists, id_anime)

        return response.status(200).json(responseDelete)
    }
}