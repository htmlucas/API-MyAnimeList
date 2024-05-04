import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { UserDetails } from "../entities/UserDetails"
import { Anime } from "../entities/Anime"
import { UserAnimeList } from "../entities/UserAnimeList"
import { Categories } from "../entities/Categories"
import { Lists } from "../entities/Lists"
import { AnimeCategoria } from "../entities/AnimeCategoria"

export const AppDataSource = new DataSource({
    type:"sqlite",
    database: "src/database/db.sqlite",
    entities:[
        User,
        UserDetails,
        Anime,
        UserAnimeList,
        Categories,
        Lists,
        AnimeCategoria
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado")
    })
    .catch((error) => {
        console.error(error)
    })