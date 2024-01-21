import { Center } from "../components/layouts/Center/Center"
import { Stack } from "../components/layouts/Stack/Stack"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"

export const SuccessPage = () => {
  return (
    <Wrapper>
      <Stack>
        <div>
          <Navbar />
        </div>

        <Center>
          <Stack>
            <h1>Checkout Complete</h1>
            <Center>
              <p>Thanks for your purchase!</p>
            </Center>
          </Stack>
        </Center>
      </Stack>
    </Wrapper>
  )
}