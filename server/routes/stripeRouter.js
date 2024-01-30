import express from 'express';
import StripeController from '../controllers/StripeController.js';
const stripeRouter = express.Router();

stripeRouter.get('/products', StripeController.getProducts)
stripeRouter.post('/products', StripeController.createProduct)
stripeRouter.post('/', StripeController.createSession)

export default stripeRouter;