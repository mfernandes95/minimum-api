import { RequestHandler } from 'express'
import UserEntity from '../../database/entities/user.entity'
import { Like } from 'typeorm';
import MyDataSource from '../../database/index'
import { Request, Response } from 'express';

const getUser: RequestHandler = async (req: Request, res: Response) => {
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

    const userRepository = MyDataSource.getRepository(UserEntity)
    const users = await userRepository.find({
        where: whereCondition,
      })
    res.status(200).send(users);
}

export default getUser