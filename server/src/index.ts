import express from 'express';
import router from '../src/routes/routes'
const app = express();

app.use(router)
app.listen({port: 3000});

