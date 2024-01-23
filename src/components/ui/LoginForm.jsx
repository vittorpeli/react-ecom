import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"
import { FormInput } from "./FormInput"


export const LoginForm = () => {
  return (
      <Wrapper>
        <form>
          <Stack>
            <FormInput 
              type="text"
              name="Username"
              placeholder="Name"
            />

            <FormInput 
              type="text"
              name="Password"
              placeholder="Password"
            />

            <Button type='submit'>Login</Button>
            <Button variant="link" type='button' href="/signup">Sign Up</Button>
          </Stack>
        </form>
      </Wrapper>
  )
}