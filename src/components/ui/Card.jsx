import { Box } from "../layouts/Box/Box";
import { Stack } from "../layouts/Stack/Stack";
import { Button } from "./Button";

export const Card = (props) => {
  return (
    <Box className="cursor-pointer py-2 px-3 hover:shadow-xl focus:shadow-xl">
      <Stack className="flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
        <div className="h-20">
          <img className="object-cover h-full w-full" src={props.url} alt={props.name} />
        </div>
        
        <div className="flex flex-col flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
          <h2>
            <a 
              className="focus:underline" 
              href={props.url}
            >
              {props.name}
            </a>
          </h2>
          <p>{props.title}</p>
          <span>By Jack Sparrow</span>
        </div>

        <div>
          <Button variant="ghost" href={props.url}>Buy Now</Button>
        </div>
      </Stack>
    </Box>
  )
}