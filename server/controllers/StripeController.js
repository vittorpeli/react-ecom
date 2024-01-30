/* eslint-disable no-useless-catch */
import Stripe from "stripe";
import "dotenv/config";
import { getPhotos } from "../repositories/PhotosRepository.js";

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-10-16",
})

async function getProducts(req, res) {
  const products = await stripe.products.list({
    limit: 3,
  });
  res.status(200).json({ products });
}

async function createProduct(req, res) {
  const { name, description, images, price } = req.body;
  
  if (!name || !description || !images || !price) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const product = await stripe.products.create({
    name: name,
    description: description,
    images: [images]
  })

  const priceData = {
    currency: 'usd',
    product: product.id,
    unit_amount: parseFloat(price) * 100,
  }

  const priceObj = await stripe.prices.create(priceData);

  res.status(201).json({ product, price: priceObj });
}

async function createSession (req, res) {
  try {
    const { cart } = req.body;
    const photos = await getPhotos();

    const lineItems = photos
      .filter((photo) => cart.includes(photo.id))
      .map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description,
            images: [item.url],
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/checkout",
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    });

    res.status(201).json({ sessionId: session.id, sessionURL: session.url, success_url: session.success_url, cancel_url: session.cancel_url, lineItems: lineItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default { createSession, getProducts, createProduct };