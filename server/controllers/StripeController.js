/* eslint-disable no-useless-catch */
import Stripe from "stripe";
import { stripeKey } from "../config.js";

const stripe = new Stripe(stripeKey, {
  apiVersion: "2023-10-16",
})

async function createCheckoutSession (req, res) {
  const { cart, success_url, cancel_url } = req.body;

  try {
    const photos = await getPhotosFromDatabase();

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
      }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url,
      cancel_url,
    });

    res.json({sessionId: session.id});
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Unable to create checkout session"});
  }
}

async function getPhotosFromDatabase () {
  const API = "https://vanillajsacademy.com/api/photos.json";

  try {
    const response = await fetch(API);
    const photosData = await response.json();
    return photosData;
  } catch (error){
    throw error;
  } 
}

export default { createCheckoutSession };