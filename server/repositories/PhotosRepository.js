import db from "../db/index.js";
// import { fetchPhotos } from "../services/photoAPI.js";

export async function getPhotos(orderBy = 'ASC') {
  const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
  const rows = await db.query(`SELECT * FROM photos ORDER BY name ${direction}`);
  return rows;
}

export async function getSelectedPhoto(id) {
  const row = await db.query(`SELECT * FROM photos WHERE id = $1`, [id]);
  return row;
}

export async function findByName(name) {
  const photos = await getPhotos();
  const selectedPhoto = photos.find((p) => p.name === name);

  return selectedPhoto;
}

export async function create({ id, name, url, description, price }) {
  const [row] = await db.query(`
  INSERT INTO photos(id, name, url, description, price) 
  VALUES($1, $2, $3, $4, $5)
  RETURNING *
  `,[id, name, url, description, price]);

  return row;
}

export async function postUpdate({ ID, name, url, description, price}) {
  const row = await db.query(`
  UPDATE photos
  SET name = $2, url = $3, description = $4, price = $5
  WHERE id = $1
  RETURNING *
  `, [ID, name, url, description, price]);

  return row;
}

export async function destroy(id) {
  const deleteOp = await db.query('DELETE FROM photos WHERE id = $1', [id]);
  return deleteOp;
}