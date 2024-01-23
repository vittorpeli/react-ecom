import { useEffect, useState } from "react"
import { API } from "../utils/api"
import { useFetch } from "../hooks/useFetch";
import { useStorage } from "../hooks/useStorage";
// import '../global.css';

import { Grid } from "../components/layouts/Grid/Grid"
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"

import { Button } from "../components/ui/Button/Button"
import { Navbar } from "../components/ui/Navbar"
import { Card } from "../components/ui/Card"
import { Link } from "react-router-dom";

export const Dashboard = () => {
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
          <Navbar owner={true}/>
        </div>

        <h2 className="font-bold mr-2">Dashboard</h2>

        <Wrapper>
          <div className="flex items-center">
            <aside className="flex flex-wrap gap-2">
              <span className="mr-2">Click on a photo to edit, or</span>
              <Link to="/add">
                <Button variant="ghost">Add a New One</Button>
              </Link>
            </aside>
          </div>
        </Wrapper>

        <Grid>
          {Array.isArray(photos) && photos.map(photo => (
              <Card
                key={photo.id}
                url={photo.url}
                desc={photo.description}
                name={photo.name}
                id={photo.id}
                editMode={true}
                btn="Edit"
              />
            ))}
        </Grid>

      </Stack>
    </Wrapper>
  )
}