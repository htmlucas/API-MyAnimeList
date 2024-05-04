import { EntityManager } from "typeorm";
import { Categories } from "../entities/Categories";


export class CategorieRepository {
    private manager: EntityManager

    constructor(manager:EntityManager){
        this.manager = manager
    }


    createCategorie = async (categorie: Categories): Promise<Categories> => {
        return this.manager.save(categorie)
    }

    verifyCategorieAlreadyExists = async (categorie: Categories): Promise<Categories | null> => {
        return await this.manager.findOne(Categories,{
            where: {
                title:categorie.title,
            }
        })
    }

    getCategories = async (): Promise<Categories[]| null> => {
        return await this.manager.find(Categories)
    }

    getCategorie = async (categoryId: string): Promise<Categories | null> => {
        return await this.manager.findOne(Categories,{
            where:{
                id: categoryId
            },
            relations: ['animes'] // Carrega os animes relacionados à categoria
        })
    }
}