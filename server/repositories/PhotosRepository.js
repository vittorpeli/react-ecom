/* eslint-disable no-useless-catch */

// let photos = [
//   {
//     id: 'boat-at-midnight',
//     name: 'Boat at Midnight',
//     url: 'https://unsplash.com',
//     description: 'A boat at midnight',
//     price: 23,
//   }
// ];

export async function getPhotos() {

  const API = "https://vanillajsacademy.com/api/photos.json";

  try {
    const response = await fetch(API);
    const photosData = await response.json();
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

export async function destroy(id) {
  const photos = await getPhotos();
  const filteredPhoto = photos.filter((p) => p.id !== id);

  return filteredPhoto;
}

export async function findByName(name) {
  const photos = await getPhotos();
  const selectedPhoto = photos.find((p) => p.name === name);

  return selectedPhoto;
}

export async function create({ id, name, url, description, price }) {
  const photos = await getPhotos();

  const newPhoto = {
    id, name, url, description, price
  }

  photos.push(newPhoto);

  return newPhoto;
}

export async function postUpdate({ ID, name, url, description, price}) {
  const photos = await getPhotos();

  const updatedPhoto = {
    ID, name, url, description, price
  };

  photos.map((p) => p.id === ID ? updatedPhoto : p);

  return updatedPhoto;
}