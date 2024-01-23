import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"
import { FormInput } from "./FormInput"

export const SignForm = () => {
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
              type="email"
              name="Email"
              placeholder="Email Address"
            />

            <FormInput 
              type="text"
              name="Password"
              placeholder="Password"
            />

            <Button type='submit'>Sign Up</Button>
          </Stack>
        </form>
      </Wrapper>
  )
}