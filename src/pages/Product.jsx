import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Layouts
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"

//Blocks
import { Footer } from "../components/ui/Footer"
import { Navbar } from "../components/ui/Navbar"
import { Button } from "../components/ui/Button/Button"

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Stack>
            <img className="rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={photos.url} alt={photos.name} />
            <figcaption>
              <p>{photos.description}</p>
            </figcaption>
          </Stack>
        </figure>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="link">
              <span>
                <ArrowLeft color="#3b82f6"/>
              </span>
              Return
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <Button>
              Add to Cart
            </Button>
            <Button className="ml-2">
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