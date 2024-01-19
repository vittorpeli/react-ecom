import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { Table } from "../components/ui/Table"
import { TableHead } from '../components/ui/TableHead'
import { Button } from '../components/ui/Button/Button'


export const Cart = () => {
  const [photos, setPhotos] = useState([])
  const [totalPrice, setTotalPrice] = useState("0")
  const { getCartItem } = useContext(CartContext);

  const calcTotalPrice = () => {
    if (photos) {
      const newTotalPrice = totalPrice + photos.price;
      setTotalPrice(newTotalPrice);
    }
  }

  const getPhotos = async () => {
    const API = "https://vanillajsacademy.com/api/photos.json";

    try {
      const response = await fetch(API);
      const photosData = await response.json();
      setPhotos(photosData);
    } catch (error){
      console.error('Error fetching photos:', error);
      setPhotos([]);
    } 
  }

  useEffect(() => {
    getPhotos();
    const cartItem = getCartItem();
    setPhotos(cartItem);
    calcTotalPrice()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCartItem])

  const handleDelete = (id) => {
    const removeItem = photos.filter((item) => item.id !== id);

    setPhotos(removeItem);
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
              {photos.map((item) => (
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
            Total Price: ${totalPrice}
          </span>
          <Button variant="ghost" className="mb-4">
            Finish Checkout
          </Button>
        </div>
      </Stack>
    </Wrapper>
  )
}