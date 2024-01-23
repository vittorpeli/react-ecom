import { Box } from "../../components/layouts/Box/Box"
import { Center } from "../../components/layouts/Center/Center"
import { Stack } from "../../components/layouts/Stack/Stack"
import { Wrapper } from "../../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../../components/ui/Navbar"
import { SignForm } from "../../components/ui/SignForm"

export const Signup = () => {
  return (
    <Wrapper>
      <Stack>

        <div>
          <Navbar owner={true}/>
        </div>

        <Center>
          <Stack>
            <h1>Sign Up</h1>
            <Box>  
              <SignForm />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}