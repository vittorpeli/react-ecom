import { useEffect, useState, useMemo } from "react"
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
import { Search } from "../components/ui/Search";

export const Dashboard = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: fetchedPhotos, error } = useFetch(API);
  const [storedPhotos, setStoredPhotos] = useStorage('sparrow-photography');

  const filteredPhotos = useMemo(() => Array.isArray(photos)
  ? photos.filter(photo => photo.name.toLowerCase().includes(searchTerm.toLowerCase()))
  : [], [photos, searchTerm]);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

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

  if (photos.length === 0) {
    return <div>Error: There was a problem fetching the photos.</div>;
  }

  return (
    <Wrapper className="mb-4">
      <Stack>

        <div>
          <Navbar owner={true}/>
        </div>

        <h2 className="font-bold mr-2">Dashboard</h2>

        
        <Search value={searchTerm} onChange={handleSearch}/>

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
          {Array.isArray(filteredPhotos) && filteredPhotos.map(photo => (
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