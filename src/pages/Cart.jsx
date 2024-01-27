import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
// import { useNavigate } from 'react-router-dom'
import { checkout } from '../utils/checkout'

import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { Table } from "../components/ui/Table"
import { TableHead } from '../components/ui/TableHead'
import { Button } from '../components/ui/Button/Button'
import { useFetch } from '../hooks/useFetch'
import { useStorage } from '../hooks/useStorage'

export const Cart = () => {
  // const navigate = useNavigate();
  const [photos, setPhotos] = useState([])
  const { getItemsInCart, removeFromCart, clearCart } = useContext(CartContext);
  const { data: fetchedPhotos, error} = useFetch("photos");
  const [storedPhotos, setStoredPhotos] = useStorage('sparrow-photography');

  const handleCheckout = async () => {
    try {
      const photosInCart = await getItemsInCart(photos);
      const success_url = 'http://localhost:8000/success';
      const cancel_url = 'http://localhost:8000/cancel';

      await checkout(photosInCart, success_url, cancel_url, clearCart);
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

  if (!photosInCart) {
    return <p>You have no photos in your cart</p>
  }

  if (!photos) {
    return <div>Loading...</div>;
  }

  if (photos.length === 0) {
    return <div>Error: There was a problem fetching the photos.</div>;
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
            Total Price: ${photosInCart.reduce((total, item) => total + item.price, 0)}
          </span>
          <Button variant="ghost" className="mb-4" onClick={() => handleCheckout()}>
            Finish Checkout
          </Button>
        </div>
      </Stack>
    </Wrapper>
  )
}