import express from 'express'

import multer from 'multer';
import storage from '../config/multer'

import getUsers from '../controllers/user/getUsers'
import uploadFile from '../controllers/user/uploadFile'

const upload = multer(storage);
const user = express.Router()

user.get('/api/users', getUsers)
user.post('/api/files', upload.single('csvFile'), uploadFile)

export default user