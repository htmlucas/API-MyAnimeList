import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User'; // Certifique-se de importar corretamente a classe User
import { Anime } from './Anime'; // Certifique-se de importar corretamente a classe Anime
import { randomUUID } from 'crypto';
import { Lists } from './Lists';

@Entity('UserAnimeList')
export class UserAnimeList {
    @PrimaryGeneratedColumn('uuid')
    id_useranimelist: string;

    @Column()
    id_lists: string; // Chave estrangeira referenciando a coluna id_lists na tabela Lists

    @Column()
    anime_id: string;

    @ManyToOne(() => Anime, anime => anime.userLists)
    @JoinColumn({ name: 'anime_id' }) // Coluna que referencia a tabela Anime
    anime!: Anime;

    @ManyToOne(() => Lists, lists => lists.userAnimeList, { cascade: true })
    @JoinColumn({ name: 'id_lists' })
    list!: Lists;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    date_added: Date;

    @Column({ type: 'integer', nullable: true })
    rating: number | null;

    constructor(id_list: string, anime_id: string, date_added: Date, rating: number){
        this.id_useranimelist = randomUUID()
        this.id_lists = id_list
        this.anime_id = anime_id
        this.date_added = date_added
        this.rating = rating
    }
}
