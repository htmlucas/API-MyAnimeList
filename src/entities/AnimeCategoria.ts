import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { randomUUID } from 'crypto';

@Entity('AnimeCategoria')
export class AnimeCategoria {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    categoria_id: string;

    @Column({ nullable: false })
    anime_id: string;

    constructor(categoria_id: string, anime_id: string){
        this.id = randomUUID()
        this.categoria_id = categoria_id
        this.anime_id = anime_id
    }
}
