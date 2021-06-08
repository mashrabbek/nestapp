import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("User")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

}