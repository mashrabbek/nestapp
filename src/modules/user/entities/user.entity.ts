import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity("User")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

}