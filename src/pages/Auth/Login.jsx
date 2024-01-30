import { Stack } from "../../components/layouts/Stack/Stack"
import { Center } from "../../components/layouts/Center/Center"
import { Wrapper } from "../../components/layouts/Wrapper/Wrapper"
import { Navbar } from "../../components/ui/Navbar"
import { Box } from "../../components/layouts/Box/Box"
import { AuthForm } from "../../components/ui/AuthForm"

import { create } from "../../utils/http"
import endpoints  from "../../utils/endpoints"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const user = {
      name: formData.name,
      password: formData.password
    }

    const { authLogIn } = endpoints;

    const response = await create(authLogIn, user);
    console.log(response);

    navigate("/dashboard");
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