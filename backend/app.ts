import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import homeRoutes from './routes/home';
import authRoutes from './routes/auth';
import photosRoutes from './routes/photos';

require('dotenv').config();

const port = process.env.API_PORT || 8000;

const mongoDb: any = process.env.MONGO_URL;
mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/photos', photosRoutes);

app.listen(port, () => console.log('api works'))