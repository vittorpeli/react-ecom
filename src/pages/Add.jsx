import { Box } from "../components/layouts/Box/Box"
import { Center } from "../components/layouts/Center/Center"
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { ProductForm } from "../components/ui/ProductForm"

export const Add = () => {
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
              <ProductForm />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}