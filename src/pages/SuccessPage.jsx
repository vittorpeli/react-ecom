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

        <Wrapper>
          <h1>Checkout Complete</h1>
          <p>Thanks for your purchase!</p>
        </Wrapper>
      </Stack>
    </Wrapper>
  )
}