import express from 'express';
import postRoutes from './routes/posts.js';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', postRoutes);

app.listen(8800)