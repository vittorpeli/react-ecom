import { useNavigate, useParams } from "react-router-dom";
import { useSelected } from '../hooks/useSelected';

import { Wrapper } from '../components/layouts/Wrapper/Wrapper';
import { Stack } from '../components/layouts/Stack/Stack';
import { Navbar } from '../components/ui/Navbar';
import { ProductForm } from '../components/ui/ProductForm';
import { edit } from "../utils/http";
import endpoints  from "../utils/endpoints";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedPhoto = useSelected(id);

  async function handleSubmit(formData) {
    const photos = {
      ID: formData.id,
      name: formData.name, 
      url: formData.url, 
      description: formData.description, 
      price: formData.price
    }

    const { photosURL } = endpoints;

    const response = await edit(photosURL, photos, id);
    console.log(response);

    navigate("/dashboard");
  }

  if (!selectedPhoto) {
    return <div>Loading...</div>;
  }

  if (selectedPhoto.length === 0) {
    return <div>Error: There was a problem fetching the photos.</div>;
  }

  return (
    <Wrapper className="mb-4">
      <Stack>
        <div>
          <Navbar owner={true}/>
        </div>

        <h2>{selectedPhoto.name}</h2>
        <figure>
          <Stack>
            <img className="max-h-screen max-w-screen rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={selectedPhoto.url} alt={selectedPhoto.name} />
          </Stack>
        </figure>

        <div className='w-full min-w-96 px-4'>
          <ProductForm 
            onSubmit={handleSubmit}
            btnLabel="Update Photo"
            namePlaceholder={selectedPhoto.name}
            urlPlaceholder={selectedPhoto.url}
            id={selectedPhoto.id}
            descPlaceholder={selectedPhoto.description}
            pricePlaceholder={selectedPhoto.price} 
          />
        </div>
        

      </Stack>
    </Wrapper>
  )
}