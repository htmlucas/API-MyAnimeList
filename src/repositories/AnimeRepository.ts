import { EntityManager } from "typeorm";
import { Anime } from "../entities/Anime";
import { Categories } from "../entities/Categories";
import { AnimeCategoria } from "../entities/AnimeCategoria";


export class AnimeRepository {
    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }

    createAnime = async (anime: Anime, categorie: Categories): Promise<Anime> => {        
        const newAnime =  await this.manager.save(anime);

        const animeCategoria = new AnimeCategoria(categorie.id,newAnime.id);
        await this.manager.save(animeCategoria)
        
        return newAnime
    }

    verifyAnimeAlreadyExists = async (anime: Anime): Promise<Anime | null> => {
        return await this.manager.findOne(Anime,{
            where: {
                title:anime.title,
            }
        })
    }

    getAnimes = async (): Promise<Anime[]| null> => {
        return await this.manager.find(Anime)
    }

    getAnime = async (id_anime : string): Promise<Anime | null> => {
        return await this.manager.findOne(Anime,{
            where:{
                id:id_anime
            }
        })
    }

    searchAnimes = async(titulo: string): Promise<Anime[] | null> => {
        return await this.manager.createQueryBuilder(Anime,"anime")
        .where("anime.title LIKE :titulo",{titulo: `%${titulo}%`})
        .getMany();
    }
}