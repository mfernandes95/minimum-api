import express from 'express'

import multer from 'multer';
import storage from '../config/multer'

import getUsers from '../controllers/user/getUsers'
import uploadFile from '../controllers/user/uploadFile'

const upload = multer(storage);
const route = express.Router()

route.get('/api/users', getUsers)
route.post('/api/files', upload.single('csvFile'), uploadFile)

export default route