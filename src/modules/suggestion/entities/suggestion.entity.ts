import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('suggestion')
export class SuggestionEntity {
  @PrimaryGeneratedColumn()
  id_suggestion: number;

  @Column()
  dsEmail: string;

  @Column({ type: 'varchar', length: 500 })
  dsDescription: string;

  @Column({ type: 'varchar', length: 50 })
  dsTitle: string;

  @CreateDateColumn()
  createdAt: Date;
}
