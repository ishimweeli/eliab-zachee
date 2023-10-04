import express from 'express';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

const app = express();
let port = 4000;
dotenv.config();


app.use(express.json());
// configure the data base 
export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: true,
});

AppDataSource.initialize().then(async()=>{
// logic of db connected
console.log('DB is initiated !!!!')
const tableNames = AppDataSource.entityMetadatas.map((metadata) => metadata.tableName);
// calling the API 
app.get('/',(req,res)=>{
    res.send('Welcome to home page...')
});


app.listen(port,()=>console.log(`The app is running on port ${port}`));
}).catch((error)=>console.log('error'))
             





