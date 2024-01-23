const stripeURL = 'http://localhost:3001/api/create-checkout-session'

export const checkout = async (photos, success_url, cancel_url, remove) => {
  try {
    let cart = photos.map((photo) => photo.id);

    let sessionRequest = await fetch (stripeURL, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        cart,
        success_url,
        cancel_url,
      }),
    });
    if (!sessionRequest.ok) throw sessionRequest;
    
    let session = await sessionRequest.json();

    remove();

    window.location.href = session.url
  } catch (error) {
    throw new Error("Unable to checkout. Please try again");
  }
}