import { AppDataSource } from "../database";
import { Categories } from "../entities/Categories";
import { CategorieRepository } from "../repositories/CategorieRepository";


export class CategorieService {

    private categorieRepository: CategorieRepository;

    constructor(categorieRepository = new CategorieRepository(AppDataSource.manager)){
        this.categorieRepository = categorieRepository
    }

    createCategorie = async(title: string, description: string): Promise<Categories | boolean> => {
        const categorie = new Categories(title, description)

        const verifyCategorie = await this.categorieRepository.verifyCategorieAlreadyExists(categorie)

        if(verifyCategorie){
            return false
        }

        return this.categorieRepository.createCategorie(categorie)

    }

    getCategories = async () => {
        return await this.categorieRepository.getCategories()
    }

    getCategorie = async(id: string) => {
        return await this.categorieRepository.getCategorie(id)
    }
}