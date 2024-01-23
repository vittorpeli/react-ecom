import { Box } from "../layouts/Box/Box";
import { Stack } from "../layouts/Stack/Stack";
import { Button } from "./Button/Button";

import { Link } from "react-router-dom";

export const Card = ({ url, desc, id, name, editMode = false, btn}) => {
  const linkPath = editMode ? `/edit/${id}` : `/photo/${id}`;

  return (
    <Box className="cursor-pointer hover:shadow-xl focus:shadow-xl">
      <div className="h-20">
          <img className="object-cover h-full w-full rounded-lg" src={url} alt={desc} />
      </div>
      <Stack className="py-2 px-3 flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
        
        
        <div className="flex flex-col flex-grow last:mt-auto [&>*:nth-last-child(2)]:mb-3">
          <h2>
            <a
              className="focus:underline" 
              href={linkPath}
            >
              {name}
            </a> 
          </h2>
          <p>{desc}</p>
          <span>By Jack Sparrow</span>
        </div>

        {/* <div> */}
        <Link to={linkPath}>
          <Button variant="ghost">   
            {btn}
          </Button>
        </Link>
        {/* </div> */}
      </Stack>
    </Box>
  )
}