import "reflect-metadata";
import { DataSource } from "typeorm"
import UserEntity from "./entities/user.entity"

const myDataSource = new DataSource({
    type: "sqlite",
    database: "../database/database.sqlite",
    entities: [UserEntity],
    synchronize: true,
})

myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default myDataSource;