import { Trash } from "@phosphor-icons/react"
import { Button } from "./Button/Button"


export const Table = (props) => {

  return (
    <tr>
      <td><img className="rounded" src={props.img} alt={props.desc} /></td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>
        <Button variant="ghost" onClick={props.onclick}>
          <Trash />
        </Button>
      </td>
    </tr>
  )
}