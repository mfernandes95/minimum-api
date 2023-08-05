import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  favorite_sport: string;
}

export default UserEntity;
