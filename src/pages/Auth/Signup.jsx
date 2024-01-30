import { Box } from "../../components/layouts/Box/Box"
import { Center } from "../../components/layouts/Center/Center"
import { Stack } from "../../components/layouts/Stack/Stack"
import { Wrapper } from "../../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../../components/ui/Navbar"
import { AuthForm } from "../../components/ui/AuthForm"

import { create } from "../../utils/http"
import endpoints  from "../../utils/endpoints"

export const Signup = () => {
  async function handleSubmit(formData) {
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    const { authSignUp } = endpoints;

    const response = await create(authSignUp, user);
    console.log(response);
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