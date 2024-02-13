import { useNavigate } from "react-router-dom"
import { create } from "../utils/http"
import endpoints  from "../utils/endpoints"

import { Box } from "../components/layouts/Box/Box"
import { Center } from "../components/layouts/Center/Center"
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { ProductForm } from "../components/ui/ProductForm"


export const Add = () => {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const photo = {
      id: formData.id,
      name: formData.name,
      url: formData.url,
      description: formData.desc,
      price: formData.price
    }

    const { photosURL } = endpoints;

    const response = await create(photosURL, photo);
    console.log(response);

    navigate("/dashboard")
  }

  return (
    <Wrapper className="mb-4">
      <Stack>

        <div>
          <Navbar owner={true}/>
        </div>

        <Center>
          <Stack>
            <h1>Add a Photo</h1>
            <Box>
              <ProductForm 
                onSubmit={handleSubmit}
                btnLabel="Add Photo"
                create={true}
                namePlaceholder="Name"
                urlPlaceholder="Photo URL"
                idPlaceholder="Photo ID"
                pricePlaceholder={0} 
              />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}