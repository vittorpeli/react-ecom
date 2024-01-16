import { Wrapper } from "../layouts/Wrapper/Wrapper"

export const Navbar = () => {
  return (
    <Wrapper>
      <nav className="mt-4 py-4 px-0">
        <a className="font-bold no-underline hover:underline focus:underline text-2xl" href="/">Logo</a>
      </nav>
    </Wrapper>
  )
}