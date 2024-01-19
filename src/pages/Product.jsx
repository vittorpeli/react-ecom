import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { CartContext } from "../contexts/CartContext"
import { getSelectedPhoto } from "../utils/api";

//Layouts
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"

//Blocks
import { Footer } from "../components/ui/Footer"
import { Navbar } from "../components/ui/Navbar"
import { Button } from "../components/ui/Button/Button"

import { ArrowLeft } from "@phosphor-icons/react";

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, inCart } = useContext(CartContext);

  const [photos, setPhotos] = useState([]);

  const fetchSelected = async () => {
    try {
      const selectedPhotos = await getSelectedPhoto(id);
      setPhotos(selectedPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    }
  }

  useEffect(() => {
    fetchSelected();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleCart = () => {
    addToCart(photos.id);

    console.log(photos.id);
  }

  const handleBuy = () => {
    addToCart(photos.id);

    navigate("/checkout");
  }

  if (!photos) {
    return <div>Loading...</div>;
  }

  if (photos.length === 0) {
    return <div>Error: There was a problem fetching the photos.</div>;
  }

  return (
    <Wrapper>
      <Stack>
        <div>
          <Navbar />
        </div>

        {/* Content */}
        <h2>{photos.name}</h2>
        <figure>
          <Stack>
            <img className="max-h-screen max-w-screen rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]" src={photos.url} alt={photos.name} />
            <figcaption>
              <p>{photos.description}</p>
            </figcaption>
          </Stack>
        </figure>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="link">
              <span>
                <ArrowLeft color="#3b82f6"/>
              </span>
              Return
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            {inCart(photos.id) ? (
                <Link to="/checkout">
                  <span>{`"${photos.name}"`} added to cart</span>
                </Link>
              ) : (
                <Button onClick={handleCart}>
                  Add to Cart: ${photos.price}
                </Button>
            )}
            <Link to="/checkout">
              <Button className="ml-2" onClick={handleBuy}>
                Buy
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </Stack>
    </Wrapper>
  )
}
