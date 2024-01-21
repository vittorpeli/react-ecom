import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"


export const LoginForm = () => {
  return (
      <Wrapper>
        <form>
          <Stack>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password"/>

            <Button type='submit'>Login</Button>

            <div role="status"></div>
          </Stack>
        </form>
      </Wrapper>
  )
}