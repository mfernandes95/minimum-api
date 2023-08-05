import multer from 'multer';
import { resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'uploads/'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
