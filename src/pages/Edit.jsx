import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getSelectedPhoto } from '../utils/api';
import { Wrapper } from '../components/layouts/Wrapper/Wrapper';
import { Stack } from '../components/layouts/Stack/Stack';
import { Navbar } from '../components/ui/Navbar';
import { Button } from '../components/ui/Button/Button';

export const Edit = () => {
  const { id } = useParams();
  
  const [photos, setPhotos] = useState([]);

  const fetchSelected = async () => {
    try {
      const selectedPhotos = await getSelectedPhoto(id);
      setPhotos(selectedPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    }
  }

  useEffect(() => {
    fetchSelected();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!photos) {
    return <div>Loading...</div>;
  }

  if (photos.length === 0) {
    return <div>Error: There was a problem fetching the photos.</div>;
  }

  return (
    <Wrapper className="mb-4">
      <Stack>
        <div>
          <Navbar/>
        </div>

        <h2>{photos.name}</h2>
        <figure>
          <Stack>
            <img className="max-h-screen max-w-screen rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={photos.url} alt={photos.name} />
          </Stack>
        </figure>

        <div className='w-full min-w-96 px-4'>
          <form>
            <Stack>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' value={photos.name}/>

              <label htmlFor="desc">Desc</label>
              <textarea type="text" name="desc" rows={4} cols={50}/>

              <label htmlFor="price">Price</label>
              <input type="number" name="price" />

              <Wrapper>
                <Button type='submit'>Update Photo</Button>
              </Wrapper> 
            </Stack>
          </form>
        </div>
        

      </Stack>
    </Wrapper>
  )
}