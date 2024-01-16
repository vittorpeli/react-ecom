import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Layouts
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"

//Blocks
import { Footer } from "../components/ui/Footer"
import { Navbar } from "../components/ui/Navbar"
import { Button } from "../components/ui/Button/Button"

export const Product = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState(null);

  const getPhotos = async () => {
    const API = "https://vanillajsacademy.com/api/photos.json";

    try {
      const response = await fetch(API);
      const photosData = await response.json();
      const selectedPhoto = photosData.find((p) => p.id === id);
      
      if(selectedPhoto) {
        setPhotos(selectedPhoto);
      } else {
        console.error("Photo not found");
        setPhotos(null);
      }
    } catch (error){
      console.error('Error fetching photos:', error);
      setPhotos(null);
    } 
  }

  useEffect(() => {
    getPhotos();
    console.log(id);
  }, [id]);

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

        {/* Content */}
        <h2>{photos.name}</h2>
        <figure>
          <img src={photos.url} alt={photos.name} />
          <figcaption>
            <p>{photos.description}</p>
          </figcaption>
        </figure>
        <div>
        <Button variant="link" href="/">
          Return
        </Button>
        <div>
          <Button href="/">
            Add to Cart
          </Button>
          <Button href="/">
            Buy
          </Button>
        </div>
        </div>

        <div>
          <Footer />
        </div>
      </Stack>
    </Wrapper>
  )
}