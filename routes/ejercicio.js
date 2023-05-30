import express from "express";
import ejercicios from "../controllers/ejercicios/create.js";
import oneE from '../controllers/ejercicios/get_one.js'
import destroyE from "../controllers/ejercicios/destroy.js";
import updateE from '../controllers/ejercicios/update.js'
import todos from '../controllers/ejercicios/get_public.js'
import passport from '../middlewares/passport.js'
import ejercicioSchema from '../schemas/ejercicios.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = ejercicios
const { getOne } = oneE
const { destroy } = destroyE
const { update } = updateE
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(ejercicioSchema), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
