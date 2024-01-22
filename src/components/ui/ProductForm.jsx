import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"


export const ProductForm = () => {
  return (
    <Wrapper>
      <form>
        <Stack>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>

          <label htmlFor="url">Photo URL</label>
          <input type="text" name="url" />

          <label htmlFor="id">Photo ID</label>
          <input type="text" name="id"/>

          <label htmlFor="desc">Description</label>
          <textarea type="text" name="desc" rows={4} cols={50}/>

          <label htmlFor="price">Price</label>
          <input type="text" name="price" />

          <Button type='submit'>Add Product</Button>

        </Stack>
      </form>
    </Wrapper>
  )
}