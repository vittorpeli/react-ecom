import { useEffect, useState } from "react"
import { useFetch } from "./useFetch";

export const useSelected = (id) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { data: photosData, error } = useFetch("photos");

  useEffect(() => {
    if (error) {
      console.log("Error fetching photos:", error);
      setSelectedPhoto(null);
      return;
    }

    if (Array.isArray(photosData)) {
      const selectedPhoto = photosData.find(photo => photo.id === id);
 
      if (selectedPhoto) {
        setSelectedPhoto(selectedPhoto);
      } else {
        console.error("Photo not found");
        setSelectedPhoto(null);
      }
    } else {
      console.error("Invalid data structure");
      setSelectedPhoto(null);
    }
  }, [id, photosData, error])

  return selectedPhoto;
}