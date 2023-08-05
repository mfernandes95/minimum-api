import { RequestHandler } from 'express'
import UserEntity from '../../database/entities/user.entity'
import { getRepository } from 'typeorm/globals'
import { Like } from 'typeorm';

const getUser: RequestHandler = async (req, res) => {
    const searchQuery = req.query.q as string | undefined;
    let whereCondition = {};
    if (searchQuery) {
        whereCondition = [
          { name: Like(`%${searchQuery}%`) },
          { city: Like(`%${searchQuery}%`) },
          { country: Like(`%${searchQuery}%`) },
          { favorite_sport: Like(`%${searchQuery}%`) },
        ];
      }
    const users = await getRepository(UserEntity).find({
        where: whereCondition,
      })
    res.status(200).json(users);
}

export default getUser