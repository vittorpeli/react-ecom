import { Stack } from "../components/layouts/Stack/Stack"
import { Center } from "../components/layouts/Center/Center"
import { Wrapper } from "../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../components/ui/Navbar"
import { LoginForm } from "../components/ui/LoginForm"
import { Box } from "../components/layouts/Box/Box"

export const Login = () => {
  return (
    <Wrapper>
      <Stack>

        <div>
          <Navbar />
        </div>

        <Center>
          <Stack>
            <h1>Login</h1>
            <Box>  
              <LoginForm />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}