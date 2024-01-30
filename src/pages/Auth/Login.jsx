import { Stack } from "../../components/layouts/Stack/Stack"
import { Center } from "../../components/layouts/Center/Center"
import { Wrapper } from "../../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../../components/ui/Navbar"
import { Box } from "../../components/layouts/Box/Box"
import { AuthForm } from "../../components/ui/AuthForm"

export const Login = () => {
  async function handleSubmit() {

  }

  return (
    <Wrapper>
      <Stack>

        <div>
          <Navbar owner={true}/>
        </div>

        <Center>
          <Stack>
            <h1>Login</h1>
            <Box>  
              <AuthForm 
                login={true}
                btnLabel="Login"
                onSubmit={handleSubmit}
              />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}