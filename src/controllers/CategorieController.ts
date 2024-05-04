import { CategorieService } from "../services/CategorieService";
import { Response, Request } from 'express'

export class CategorieController {
    categorieService: CategorieService

    constructor(categorieService = new CategorieService()){
        this.categorieService = categorieService
    }

    createCategorie = async(request: Request, response: Response) => {

        const categorie = request.body

        if(!categorie.title || !categorie.description){
            return response.status(400).json({ message: 'Bad request! Todos os campos são obrigatórios'})
        }

        const responseCategorie = await this.categorieService.createCategorie(categorie.title, categorie.description)
        
        if(!responseCategorie){
            return response.status(400).json({ message: 'Categoria já criado'})
        }

        return response.status(201).json({message: 'Categoria Criada'})
    }

    getCategories = async(request: Request , response : Response ) => {
        const responseCategorie = await this.categorieService.getCategories()
        response.status(200).json(responseCategorie)
    }

    getCategorie = async(request: Request, response: Response) => {
        const { id } = request.params

        if(!id){
            return response.status(400).json({ message: 'Bad request! Id é obrigatório'})
        }

        const responseCategorie = await this.categorieService.getCategorie(id)

        response.status(200).json(responseCategorie)
    }
}