
import { AppDataSource } from '../database';
import { Anime } from '../entities/Anime';
import { AnimeRepository } from './../repositories/AnimeRepository';
import { CategorieRepository } from './../repositories/CategorieRepository';
export class AnimeService {

    private animeRepository: AnimeRepository;
    private categorieRepository: CategorieRepository;

    constructor(animeRepository = new AnimeRepository(AppDataSource.manager), categorieRepository = new CategorieRepository(AppDataSource.manager)){
        this.animeRepository = animeRepository;
        this.categorieRepository = categorieRepository
    }

    createAnime = async (title: string, description : string, categoryId: string): Promise<Anime | {error: string}> => {
        const anime = new Anime(title, description)
        const verifyAnime = await this.animeRepository.verifyAnimeAlreadyExists(anime)

        if(verifyAnime){
            return {error: 'Anime já criado'}
        }
        const getCategorie = await this.categorieRepository.getCategorie(categoryId)
        
        if (!getCategorie) {
            return {error: 'Categoria não existe'}
        }

        return await this.animeRepository.createAnime(anime,getCategorie)
        
    }

    getAnimes = async () => {
        return await this.animeRepository.getAnimes()
    }

    getAnime = async (id_anime: string): Promise<Anime | boolean> => {

        const responseAnime = await this.animeRepository.getAnime(id_anime)

        if(!responseAnime){
            return false
        }

        return responseAnime
    }

    searchAnimes = async(titulo: string): Promise<Anime[] | null> => {
        return this.animeRepository.searchAnimes(titulo)
    }

}