import { createConnection } from "typeorm";
import app from './app'
import config from './config'

createConnection()
    .then(() => {
        app.listen(config.port, ()=>{
            console.log(`🚀 ${config.name} ${config.version} 🚀`)
            console.log(`🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`)
        })
    })
    .catch(err => console.log("TypeORM connection error: ", err))
