import { Box } from "../../components/layouts/Box/Box"
import { Center } from "../../components/layouts/Center/Center"
import { Stack } from "../../components/layouts/Stack/Stack"
import { Wrapper } from "../../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../../components/ui/Navbar"
import { AuthForm } from "../../components/ui/AuthForm"

export const Signup = () => {
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
            <h1>Sign Up</h1>
            <Box>  
              <AuthForm 
                btnLabel="Sign Up"
                onSubmit={handleSubmit}
              />
            </Box>
          </Stack>
        </Center>

      </Stack>
    </Wrapper>
  )
}