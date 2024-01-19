import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { getPhotos } from '../utils/api'

import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { Table } from "../components/ui/Table"
import { TableHead } from '../components/ui/TableHead'
import { Button } from '../components/ui/Button/Button'


export const Cart = () => {
  const [photos, setPhotos] = useState([])
  const { getItemsInCart, removeFromCart } = useContext(CartContext);

  const fetchPhotos = async () => {
    try {
      const photosData = await getPhotos();
      setPhotos(photosData);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, [])

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
              {photosInCart.map((item) => (
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
          <Button variant="ghost" className="mb-4" href="https://buy.stripe.com/test_00gfZydn3a71bFSfYY">
            Finish Checkout
          </Button>
        </div>
      </Stack>
    </Wrapper>
  )
}