import { Column,Entity,JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'
import { User } from './User';

@Entity('Users_Details')
export class UserDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    user_id: string;

    @Column({ nullable: true})
    cep?: string

    @Column({ nullable: true})
    cidade?: string

    @Column({ nullable: true})
    estado?: string

    @Column({ nullable: true})
    pais?: string

    @Column({ nullable: true})
    bio?: string

    @OneToOne( () => User, user => user.details, { cascade: true})
    @JoinColumn({name: "user_id"}) // O @JoinColumn é usado para indicar qual coluna na tabela UsersDetails será usada como chave estrangeira para se referir à tabela Users
    user!:User;

    constructor(user_id: string,cep?: string, cidade?: string, estado?: string, pais?: string, bio?: string){
        this.id = randomUUID()
        this.user_id = user_id
        this.cep = cep
        this.cidade = cidade
        this.estado = estado
        this.bio = bio
        this.pais = pais

    }
}