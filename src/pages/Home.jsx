//  React
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useStorage } from "../hooks/useStorage";
import { API } from "../utils/api";

// Layouts
import { Wrapper } from "../components/layouts/Wrapper/Wrapper";
import { Stack } from "../components/layouts/Stack/Stack";
import { Grid } from "../components/layouts/Grid/Grid";

// Blocks
import { Card } from "../components/ui/Card";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

export const Home = () => {
  const [photos, setPhotos] = useState([]);
  const { data: fetchedPhotos, error, loading } = useFetch(API);
  const [storedPhotos, setStoredPhotos] = useStorage('sparrow-photography');

  useEffect(() => {
    if (fetchedPhotos) {
      setPhotos(fetchedPhotos);
      setStoredPhotos(fetchedPhotos);
    } else if (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
    } else if (storedPhotos) {
      setPhotos(storedPhotos);
    } else {
      return;
    }
  }, [fetchedPhotos, error, storedPhotos, setStoredPhotos])

  if (loading) {
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

        <section className="overflow-x-auto w-full min-w-96">
          <Grid className="overflow-x-auto w-full min-w-96">
            {Array.isArray(photos) && photos.map(photo => (
              <Card 
                key={photo.id}
                url={photo.url}
                desc={photo.description}
                name={photo.name}
                id={photo.id}
                btn="Learn More"
              />
            ))}
          </Grid>
        </section>
        
        <div>
          <Footer />  
        </div>
      </Stack>
    </Wrapper>
  )
}