import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
//import { connected } from "process";

const app = express();
mongoose.connect('mongodb://sukri:smknh2008@ac-8ibl7fj-shard-00-00.cbjpw3f.mongodb.net:27017,ac-8ibl7fj-shard-00-01.cbjpw3f.mongodb.net:27017,ac-8ibl7fj-shard-00-02.cbjpw3f.mongodb.net:27017/?ssl=true&replicaSet=atlas-9sgb1h-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=>console.log(error));
db.once('open', ()=>console.log('Database connected....'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(process.env.PORT || 5000, ()=>console.log('Server up and running...'));
