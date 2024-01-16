import { Box } from "../layouts/Box/Box"
import { Stack } from "../layouts/Stack/Stack"

export const Card = (props) => {
  return (
    <Box>
      <Stack>
        <figure>
          <img src={props.url} alt={props.title} />
          <figcaption>{props.title}</figcaption>
        </figure>
      </Stack>
    </Box>
  )
}