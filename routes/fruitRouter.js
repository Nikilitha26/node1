import express from 'express'
import {getFruits, getFruit, insertFruit, deleteFruit, updateFruit, addToCart} from '../controller/fruitController.js'
import { verifyAToken } from '../middleware/authenticate.js'
import { addToCart } from '../model/fruitDb.js'

const router = express.Router()

router.post('/cart',verifyAToken, addToCart, (req,res)=>{
    console.log(req.body)
    res.json({message:"item added to cart"})
})

router.
    route('/')
        .get(verifyAToken,getFruits)
        .post(insertFruit)
router.
    route('/:id')
        .get(getFruit)
        .delete(deleteFruit)
        .patch(updateFruit)
export default router
