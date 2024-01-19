import { Trash } from "@phosphor-icons/react"
import { Button } from "./Button/Button"


export const Table = ({ img, desc, name, price, onclick}) => {

  return (
    <tr>
      <td>
        <img className="max-h-full max-w-full rounded" src={img} alt={desc} />
      </td>
      <td>{name}</td>
      <td className="font-semibold">${price}</td>
      <td>
        <Button variant="ghost" onClick={onclick}>
          <Trash />
        </Button>
      </td>
    </tr>
  )
}