import userRouter from './users.js'
import ejercicio from './ejercicio.js'
import commentsRouter from './comments.js';


import express from 'express'
let router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/ejercicios', ejercicio)
router.use("/comments", commentsRouter);


export default router