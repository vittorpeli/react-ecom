/* eslint-disable no-useless-catch */
import { getStorage, setStorage } from "./storage";

export async function getPhotos() {
  const photos = getStorage();
  if (photos) return photos;

  const API = "https://vanillajsacademy.com/api/photos.json";

  try {
    const response = await fetch(API);
    const photosData = await response.json();
    setStorage(photosData);
    return photosData;
  } catch (error){
    throw error;
  } 
}

export async function getSelectedPhoto(id) {
  try {
    const photosData = await getPhotos();
    const selectedPhoto = photosData.find((p) => p.id === id);

    if(selectedPhoto) {
      return selectedPhoto;
    }else {
      console.error("Photo not found");
      return null;
    } 
  } catch (error) {
    throw error;
  }
}