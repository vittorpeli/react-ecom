/* eslint-disable no-useless-catch */
import Stripe from "stripe";
import "dotenv/config";
import { getPhotos } from "../repositories/PhotosRepository";

console.log("Key:", process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-10-16",
})

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

    res.status(201).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default { createSession };