import { Trash } from "@phosphor-icons/react"
import { Button } from "./Button/Button"


export const Table = ({ img, desc, name, price, onclick}) => {

  return (
    <tr>
      <td className="h-1/2 w-1/2 max-h-1/2 max-w-1/2">
        <img className="h-full w-full rounded" src={img} alt={desc} />
      </td>
      <td className="text-left h-1/2 max-h-1/2 max-w-1/2">{name}</td>
      <td className="text-left font-semibold h-1/2 max-h-1/2 max-w-1/2">${price}</td>
      <td className="h-1/2 max-h-1/2 max-w-1/2">
        <Button variant="ghost" onClick={onclick}>
          <Trash />
        </Button>
      </td>
    </tr>
  )
}