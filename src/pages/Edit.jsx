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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
              <input className='pl-2' type="text" name='name' value={photos.name} onChange={handleChange}/>

              <label htmlFor="desc">Desc</label>
              <textarea className='pl-2' type="text" name="desc" rows={4} cols={50} onChange={handleChange}>
                {photos.description}
              </textarea>

              <label htmlFor="price">Price</label>
              <input className='pl-2' type="number" name="price" value={photos.price} onChange={handleChange}/>

              <Wrapper>
                <Button type='submit' onClick={handleSubmit}>Update Photo</Button>
              </Wrapper> 
            </Stack>
          </form>
        </div>
        

      </Stack>
    </Wrapper>
  )
}