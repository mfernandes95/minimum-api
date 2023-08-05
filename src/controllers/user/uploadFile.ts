import { RequestHandler } from 'express'
import UserEntity from '../../database/entities/user.entity'
import fs from 'fs'
import { parse } from 'csv-parse'
import { resolve } from 'path';
import MyDataSource from '../../database/index'
import { Request, Response } from 'express';

const uploadFile : RequestHandler = async (req: Request, res: Response) => {

  const file = req.file;
  if (!file) {
    res.status(400).send({ error: 'No CSV file uploaded.' });
  } else {

    const csvData : UserEntity[] = []

    fs.createReadStream(resolve(__dirname, '..', '..', '..', file.path))
        .pipe(parse({columns: true}))
        .on('data', (data) => csvData.push(data))
        .on('end', async () => {
            for(const p in csvData) {
                const name = csvData[p].name
                const city = csvData[p].city
                const country = csvData[p].country
                const favorite_sport = csvData[p].favorite_sport

                const data = {
                    name, city, country, favorite_sport
                }

                const userRepository = MyDataSource.getRepository(UserEntity)

                const user = userRepository.create(data)
                await userRepository.save(user)

            }
        })
    res.status(201).send()
  }
}

export default uploadFile