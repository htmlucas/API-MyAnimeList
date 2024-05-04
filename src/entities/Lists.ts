import { Column,CreateDateColumn,Entity,JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'
import { User } from './User';
import { UserAnimeList } from "./UserAnimeList";

@Entity('Lists')
export class Lists {
    @PrimaryGeneratedColumn('uuid')
    id_lists: string

    @Column({ nullable: false })
    user_id: string;

    @Column({ nullable: false})
    name: string

    @CreateDateColumn()
    created_at: Date;

    @OneToOne( () => User, user => user.lists, { cascade: true})
    @JoinColumn({name: "user_id"}) // O @JoinColumn é usado para indicar qual coluna na tabela UsersDetails será usada como chave estrangeira para se referir à tabela Users
    user!:User; // A exclamação (!) indica que a propriedade será inicializada

    @OneToMany(() => UserAnimeList, userAnimeList => userAnimeList.list)
    userAnimeList!: UserAnimeList[];

    constructor(user_id: string, name: string){
        this.id_lists = randomUUID()
        this.user_id = user_id
        this.name = name
        this.created_at = new Date()

    }
}