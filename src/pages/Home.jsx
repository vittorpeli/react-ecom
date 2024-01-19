//  React
import { useEffect, useState } from "react";
import { getPhotos } from "../utils/api";

// Layouts
import { Wrapper } from "../components/layouts/Wrapper/Wrapper";
import { Stack } from "../components/layouts/Stack/Stack";
import { Grid } from "../components/layouts/Grid/Grid";

// Blocks
import { Card } from "../components/ui/Card";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

export const Home = () => {
  const [photos, setPhotos] = useState(null);
  // const [loading, setLoading] = useState(true);

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
          <Navbar/>
        </div>
        

        <Wrapper>
          <h3>Sparrow Photography</h3>
        </Wrapper>

        <Grid>
          {photos.map(photo => (
            <Card 
              key={photo.id}
              url={photo.url}
              desc={photo.description}
              name={photo.name}
              id={photo.id}
            />
          ))}
        </Grid>

        <div>
          <Footer />  
        </div>
      </Stack>
    </Wrapper>
  )
}