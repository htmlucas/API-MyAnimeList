import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'
import { UserAnimeList } from "./UserAnimeList";
import { Categories } from "./Categories";

@Entity('Anime')
export class Anime {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable:true})
    img!:string

    @Column({ nullable:false})
    title:string

    @Column({ nullable:false})
    description:string

    @OneToMany(() => UserAnimeList, userAnimeList => userAnimeList.anime)
    userLists!: UserAnimeList[];

    @ManyToMany(() => Categories, (categories) => categories.animes)
        @JoinTable({
            name: 'AnimeCategoria', // Nome da tabela intermediária
            joinColumn: { name: 'anime_id' }, // Coluna referente a esta entidade
            inverseJoinColumn: { name: 'categoria_id' }, // Coluna referente à outra entidade
        })
    categories!: Categories[];

    

    constructor(title:string, description:string){
        this.id = randomUUID()
        this.title = title
        this.description = description
    }
}