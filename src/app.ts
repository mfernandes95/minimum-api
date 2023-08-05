import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import './database/index'
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import route from './routes/user';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    // @ts-ignore
    origin: config.clientOrigins[config.nodeEnv]
}))
app.use(helmet())
app.use(morgan('tiny'))

app.use('/', route)

app.use(fourOhFour)
app.use(errorHandler)

export default app