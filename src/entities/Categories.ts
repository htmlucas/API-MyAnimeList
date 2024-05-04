import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'
import { Anime } from "./Anime";

@Entity('Categories')
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable:false})
    title:string

    @Column({ nullable:false})
    description:string

    @ManyToMany(() => Anime, (anime) => anime.categories)
    @JoinTable({
        name: 'AnimeCategoria', // Nome da tabela intermediária
        joinColumn: { name: 'categoria_id' }, // Coluna referente a esta entidade
        inverseJoinColumn: { name: 'anime_id' }, // Coluna referente à outra entidade
    })
    animes!: Anime[];


    constructor(title: string, description:string){
        this.id = randomUUID()
        this.title = title,
        this.description = description
    }
}