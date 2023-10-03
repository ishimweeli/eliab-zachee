import express from 'express';
import { DataSource } from 'typeorm';

const app = express();
let port = 4000;
app.use(express.json());
// configure the data base 
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "auth_db",
    synchronize: true,
    logging: true,
    // entities: [],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize().then(async()=>{
// logic of db connected
console.log('DB is initiated !!!!')
// table names 
const tableNames = AppDataSource.entityMetadatas.map((metadata) => metadata.tableName);
// calling the API 
app.get('/',(req,res)=>{
    res.send('Welcome to home page...')
});


// app.use(registerRouter);
// app.use(loginRouter);

app.listen(port,()=>console.log(`The app is running on port ${port}`));
}).catch((error)=>console.log('error'))
             





