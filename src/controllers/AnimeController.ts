
import { Anime } from '../entities/Anime';
import { AnimeService } from './../services/AnimeService';
import { Request, Response } from 'express'

export class AnimeController {

    animeService: AnimeService

    constructor(animeService = new AnimeService()){
        this.animeService = animeService
    }

    createAnime = async(request: Request, response: Response) => {
        const anime = request.body

        if(!anime.title || !anime.description || !anime.categoryId){
            return response.status(400).json({ message: 'Bad request! Todos os campos são obrigatórios'})
        }

        const responseAnime = await this.animeService.createAnime(anime.title, anime.description,anime.categoryId)

        if('error' in responseAnime){
            return response.status(400).json({ message: responseAnime.error });
        }

        return response.status(201).json({ message: 'Anime criado'})
    }

    getAnimes = async(request: Request , response : Response ) => {
        const responseAnime = await this.animeService.getAnimes()
        return response.status(200).json(responseAnime)
    }


    getAnime = async(request: Request, response: Response) => {
        const { id_anime } = request.params

        const responseAnime = await this.animeService.getAnime(id_anime)

        if(!responseAnime){
            return response.status(201).json({ message: 'Nenhum anime encontrado'})
        }

        return response.status(200).json(responseAnime)
    }

    searchAnimes = async(request: Request, response: Response) => {
        const anime = request.body

        if(!anime.titulo){
            return response.status(400).json({ message: 'Bad request! Necessário alguma palavra'})
        }

        const responseAnimes = await this.animeService.searchAnimes(anime.titulo)

        return response.status(200).json(responseAnimes)
    }

}