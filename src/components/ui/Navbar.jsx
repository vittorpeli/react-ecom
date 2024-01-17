import { Link } from "react-router-dom"
import { Wrapper } from "../layouts/Wrapper/Wrapper"

import { Anchor, ShoppingCart } from "@phosphor-icons/react"
import { Button } from "./Button/Button"

export const Navbar = () => {
  return (
    <Wrapper>
      <nav className="flex mt-4 py-4 px-0 items-center justify-between">
        <Link to="/" className="hover:underline focus:underline text-2xl"><Anchor size={36} color="#3b82f6"/></Link>
        <Button variant="link">
          <ShoppingCart size={24}/>
        </Button>
      </nav>
    </Wrapper>
  )
}