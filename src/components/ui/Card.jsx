import { Box } from "../layouts/Box/Box";
import { Stack } from "../layouts/Stack/Stack";
import { Button } from "./Button/Button";

import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <Box className="cursor-pointer hover:shadow-xl focus:shadow-xl">
      <div className="h-20">
          <img className="object-cover h-full w-full rounded-t-lg" src={props.url} alt={props.name} />
      </div>
      <Stack className="py-2 px-3 flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
        
        
        <div className="flex flex-col flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
          <h2>
            <a 
              className="focus:underline" 
              href={props.desc}
            >
              {props.name}
            </a>
          </h2>
          <p>{props.desc}</p>
          <span>By Jack Sparrow</span>
        </div>

        {/* <div> */}
        <Link to={`/photo/${props.id}`}>
          <Button variant="ghost">   
            Learn More
          </Button>
        </Link>
        {/* </div> */}
      </Stack>
    </Box>
  )
}