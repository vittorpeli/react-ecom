//JS
import { useEffect, useState } from "react";

// Layouts
import { Wrapper } from "./components/layouts/Wrapper/Wrapper";
import { Stack } from "./components/layouts/Stack/Stack";
import { Grid } from "./components/layouts/Grid/Grid";

// Blocks
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { Card } from "./components/ui/Card";


function App() {
  const [photos, setPhotos] = useState(null);
  // const [loading, setLoading] = useState(true);

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
        <Navbar/>

        <Wrapper>
          <h3>Sparrow Photography</h3>
        </Wrapper>

        <Grid>
          {photos.map(photo => (
            <Card 
              key={photo.id}
              url={photo.url}
              title={photo.title}
            />
          ))}
        </Grid>

        <Footer />
      </Stack>
    </Wrapper>
  )
}

export default App
