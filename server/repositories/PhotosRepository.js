import db from "../db/index.js";

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
  const row = await db.query(`SELECT * FROM photos WHERE name = $1`, [name]);
  return row;
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

// export async function syncPhotosWithApi() {
//   try {
//     const apiPhotos = await fetchPhotos();
//     const dbPhotos = await getPhotos();

//     for (const apiPhoto of apiPhotos) {
//       const existingDbPhoto = dbPhotos.find((dbPhoto) => dbPhoto.id === apiPhotos.id);

//       if(existingDbPhoto) {
//         await postUpdate(apiPhoto);
//       } else {
//         try {
//           await create(apiPhoto);
//         } catch(error) {
//           if (error.code === '23505') {
//             console.log("Photo already exists in database");
//           } else {
//             throw error;
//           }
//         }
//       }
//     }
//   } catch(error) {
//     console.error("Error syncing photos with API", error);
//     throw error;
//   }
// }