export async function fetchPhotos() {
  const API = "https://vanillajsacademy.com/api/photos.json";

  try {
    const response = await fetch(API);
    const photosData = await response.json();
    return photosData;
  } catch (error) {
    console.error("Error fetching photos from API:", error);
    throw error;
  }   
}