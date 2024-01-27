import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Wrapper } from '../components/layouts/Wrapper/Wrapper';
import { Stack } from '../components/layouts/Stack/Stack';
import { Navbar } from '../components/ui/Navbar';
import { useSelected } from '../hooks/useSelected';
import { ProductForm } from '../components/ui/ProductForm';

export const Edit = () => {
  const { id } = useParams();
  const selectedPhoto = useSelected(id);
  const [selectedPhotoData, setSelectedPhotoData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    if (selectedPhoto && Object.keys(selectedPhoto).length > 0) {
      setSelectedPhotoData(selectedPhoto);
    }
  }, [selectedPhoto]);

  return (
    <Wrapper className="mb-4">
      <Stack>
        <div>
          <Navbar owner={true}/>
        </div>

        <h2>{selectedPhotoData.name}</h2>
        <figure>
          <Stack>
            <img className="max-h-screen max-w-screen rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={selectedPhotoData.url} alt={selectedPhotoData.name} />
          </Stack>
        </figure>

        <div className='w-full min-w-96 px-4'>
          <ProductForm 
            btnLabel="Update Photo"
            namePlaceholder={selectedPhotoData.name}
            urlPlaceholder={selectedPhotoData.url}
            id={selectedPhotoData.id}
            descPlaceholder={selectedPhotoData.description}
            pricePlaceholder={selectedPhotoData.price} 
          />
        </div>
        

      </Stack>
    </Wrapper>
  )
}