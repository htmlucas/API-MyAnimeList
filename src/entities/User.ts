import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'
import { UserDetails } from "./UserDetails";
import { UserAnimeList } from "./UserAnimeList";
import { Lists } from "./Lists";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string

    @Column({ nullable:true})
    img!:string

    @Column({ nullable:false})
    nickname:string

    @Column({ nullable:false})
    email:string

    @Column({ nullable:false})
    password:string

    @OneToOne( () => UserDetails, userDetails => userDetails.user)
    @JoinColumn({ name: "id_user" })
    details!: UserDetails;

    @OneToMany(() => Lists, lists => lists.user)
    lists!: Lists[];

    constructor(nickname:string, email:string, password:string){
        this.id_user = randomUUID()
        this.nickname = nickname
        this.email = email,
        this.password = password
    }
}