import { getPhotos, getSelectedPhoto, destroy, findByName, create, postUpdate} from "../repositories/PhotosRepository.js";

async function index (req, res) {
  const photos = await getPhotos();

  res.json(photos);
}

// async function indexAndSync(req, res) {
//   try {
//     await syncPhotosWithApi();

//     const photosFromDb = await getPhotos();

//     res.json({ photosFromDb });
//   } catch (error) {
//     console.error("Error in indexAndSync", error);
//     res.status(500).json({ error: "Internal Server Error"});
//   }
// }

async function show (req, res) {
  const { id } = req.params;

  const photo = await getSelectedPhoto(id);

  if(!photo) {
    return res.status(404).send("Photo not found!");
  }

  res.json(photo);
}

async function store (req, res) {
  const { id, name, url, description, price } = req.body;

  if (!name) {
    return res.status(400).json("Photo's name is required!");
  }

  const photoExists = await findByName(name);

  if(photoExists) {
    return res.status(409).json("Photo's name is already in use!");
  }

  if(!url) {
    return res.status(400).json("Photo's url is required!");
  }

  if (!price) {
    return res.status(400).json("Photo's price is required!");
  }

  const photo = await create({
    id, name, url, description, price
  })

  res.json(photo);
}

async function update(req, res) {
  const { id } = req.params;
  const { ID, name, url, description, price } = req.body;

  const photoExists = await getSelectedPhoto(id);
  if(!photoExists) {
    return res.status(404).json("Photo not found!");
  }

  const photo = await postUpdate({
    ID, name, url, description, price
  })

  res.json(photo);
}

async function del (req, res) {
  const { id } = req.params;

  await destroy(id);

  res.sendStatus(204);

}

export default {index , show, store, update, del };