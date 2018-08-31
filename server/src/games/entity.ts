//..batchs/entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity()
export default class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("text", { nullable: false })
  ships: string;
}
