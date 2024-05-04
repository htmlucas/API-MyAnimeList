import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
import { verifyAuth } from './middleware/verifyAuth';
import { AnimeController } from './controllers/AnimeController';
import { CategorieController } from './controllers/CategorieController';
import { ListsController } from './controllers/ListsController';
import { UserAnimeListController } from './controllers/UserAnimeListController';

const userController = new UserController()

const loginController = new LoginController()

const animeController = new AnimeController()

const categorieController = new CategorieController()

const listController = new ListsController()

const useranimelistController = new UserAnimeListController()

export const router = Router()

// Login

    router.post('/login',loginController.login)

// User

    router.post('/user/create', userController.createUser) 

    router.get('/user/:userId', verifyAuth,userController.getUser)

    router.delete('/user',userController.deleteUser)
// User Details
    router.patch('/user/details/update',userController.updateUserDetails)

// Lists
    router.post('/list/create', listController.createList)
    router.get('/lists/:user_id',verifyAuth,listController.getAllLists)
    router.get('/list/:id_lists', listController.getList)
    router.patch('/list/name/update',listController.updateNameList)
    router.delete('/list/:id_lists',listController.deleteList)

// Anime

    router.post('/anime/create', animeController.createAnime) 
    router.get('/animes', animeController.getAnimes) 
    router.post('/animes/search',animeController.searchAnimes)
    router.get('/anime/:id_anime',animeController.getAnime)

// Categorie

    router.post('/categorie/create',categorieController.createCategorie) 
    router.get('/categories',categorieController.getCategories) 
    router.get('/categorie/:id',categorieController.getCategorie)

// UserAnimeList

    router.post('/useranimelist/create',useranimelistController.create)
    router.delete('/useranimelist/:id_lists/:id_anime',useranimelistController.deleteUserAnimeList)
