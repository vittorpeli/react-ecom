import { useRef } from 'react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import endpoints from '../utils/endpoints'
import { create } from '../utils/http'

import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { Table } from "../components/ui/Table"
import { TableHead } from '../components/ui/TableHead'
import { Button } from '../components/ui/Button/Button'
import { useFetch } from '../hooks/useFetch'
import { useStorage } from '../hooks/useStorage'

export const Cart = () => {
  const [photos, setPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const sessionRef = useRef(null);

  const { getItemsInCart, removeFromCart } = useContext(CartContext);

  const { data: fetchedPhotos, error, loading} = useFetch("photos");
  const [storedPhotos, setStoredPhotos] = useStorage('sparrow-photography');

  async function handleCheckout () {
    try {
      const photosInCart = await getItemsInCart(photos);
    
      const { stripeURL } = endpoints;
    
      const sessionBody = {
        cart: photosInCart.map(photo => photo.id),
      }

      const response = await fetch(stripeURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sessionBody),
      });

      if (!response.ok) {
        throw new Error('Failed to create session');
      }
    
      const session = await create(stripeURL, sessionBody)
      console.log(session);
      console.log(session.sessionURL);

      sessionRef.current = session;
      // console.log(sessionRef.current.url);

      setRedirect(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (fetchedPhotos) {
      setPhotos(fetchedPhotos);
      setStoredPhotos(fetchedPhotos);
    } else if (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
    } else if (storedPhotos) {
      setPhotos(storedPhotos);
    } else {
      return;
    }
  }, [fetchedPhotos, error, storedPhotos, setStoredPhotos])

  const handleDelete = (id) => {
    removeFromCart(id);

    setPhotos((prevPhotos) => prevPhotos.filter((item) => item.id !== id));
  }

  const photosInCart = getItemsInCart(photos);

  if (!Array.isArray(photosInCart) || photosInCart.length === 0) {
    return <p>You have no photos in your cart</p>
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: There was a problem fetching the photos.</div>;
  }

  let formattedPrice;

  if (Array.isArray(photosInCart)) {
    let totalPrice = 0;

    for (const photo of photosInCart) {
      const photoPrice = parseFloat(photo.price);
      if (!isNaN(photoPrice)) {
        totalPrice += photoPrice;
      }
    }
  
    formattedPrice = totalPrice.toFixed(2);
  }

  return (
    <Wrapper>
      <Stack>
        <div>
          <Navbar />
        </div>

        <h1 className="ml-6">Checkout</h1>

        <Wrapper>
          <TableHead>
            <tbody>
              {Array.isArray(photosInCart) && photosInCart.map((item) => (
                <Table
                  key={item.id}
                  img={item.url}
                  desc={item.description}
                  name={item.name}
                  price={item.price}
                  onclick={() => handleDelete(item.id)}
                />
              ))}
            </tbody>
          </TableHead>
              
        </Wrapper>

        

        <div className="flex flex-row  items-center ml-auto mr-4">
          <span className='font-semibold mr-4 mb-4'>
            Total Price: ${formattedPrice}
          </span>
          <Button 
            variant="ghost" 
            className="mb-4" 
            onClick={() => handleCheckout()}
            href={redirect ? sessionRef.current.sessionURL : undefined}
          >
            {redirect ? "Go to Stripe" : "Finish Checkout"}
          </Button>
        </div>
      </Stack>
    </Wrapper>
  )
}

