import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { Table } from "../components/ui/Table"
import { TableHead } from '../components/ui/TableHead'


export const Cart = () => {
  const [photos, setPhotos] = useState(null)
  const cartContext = useContext(CartContext);
  const { getCartItem } = cartContext;

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

    setPhotos(getCartItem());
  }, [getCartItem])

  const handleDelete = () => {
    console.log("Clicked")
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
                  onclick={handleDelete}
                />
              ))}
            </tbody>
          </TableHead>
              
        </Wrapper>
      </Stack>
    </Wrapper>
  )
}