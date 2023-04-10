import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from 'mongoose';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb+srv://liamsmeraglia1225:QwpLGx97sODXfSwe@tuiter.saqu7yk.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);