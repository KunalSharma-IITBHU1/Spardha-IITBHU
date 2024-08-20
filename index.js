import express from 'express'
import cors from 'cors'
import connectMongoDb from "./connections/connection.js" ;
import userRouter from './router/user.router.js' 


const app = express();


app.use(express.json());
app.use(cors());

connectMongoDb();

app.use("/spardha" , userRouter);


app.listen(2005, () => console.log('server started successfully'));
