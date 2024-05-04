import { Response, Request } from 'express'
import { ListService } from './../services/ListsService';
import { Params } from 'express-serve-static-core';

export class ListsController {
    listService: ListService

    constructor(listService = new ListService()){
        this.listService = listService
    }

    createList = async(request: Request, response: Response) => {

        const list = request.body

        if(!list.name || !list.user_id){
            return response.status(400).json({ message: 'Bad request! Todos os campos são obrigatórios'})
        }

        const listResponsecreated = await this.listService.createList(list.user_id,list.name)

        return response.status(201).json(listResponsecreated)
    }

    getAllLists = async(request: Request , response:Response ) => {
        const { user_id } = request.params
        const responseLists = await this.listService.getAllLists(user_id)
        response.status(200).json(responseLists)
    }

    getList = async(request: Request, response: Response) => {
        const { id_lists } = request.params;
        const listDetails = await this.listService.getList(id_lists)
        const animesFromList = await this.listService.getAnimesfromList(id_lists)
        return response.status(200).json({
            listDetails,
            animesFromList
        })

    }

    updateNameList = async (request: Request, response: Response) => {
        const list = request.body

        if(!list.id_lists || !list.name){
            return response.status(400).json({ message: 'Bad request ! ID da lista e nome é obrigatorio'})
        }

        try{
            const updatedList = await this.listService.updateNameList(list)

            if('error' in updatedList){
                return response.status(400).json({ message: updatedList.error });
            }

            return response.status(201).json(updatedList)
        } catch( error) {
            return response.status(500).json({ message: 'Error on process'})
        }
        

    }

    deleteList = async ( request: Request, response: Response) => {
        const {id_lists} = request.params

        if(!id_lists){
            return response.status(400).json({ message: 'Bad request ! ID da lista é obrigatório'})
        }

        const responseDelete = await this.listService.deleteList(id_lists)

        return response.status(200).json(responseDelete)
    }
}