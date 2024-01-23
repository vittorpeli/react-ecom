import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"
import { FormInput } from "./FormInput"


export const ProductForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <form>
        <Stack>
          <FormInput 
            type="text"
            name="Name"
            placeholder="Name"
          />

          <FormInput 
            type="text"
            name="Photo URL"
            placeholder="URL"
          />

          <FormInput 
            type="text"
            name="Photo ID"
            placeholder="ID"
          />

          <label htmlFor="desc" className="font-semibold">Description</label>
          <textarea type="text" name="desc" rows={4} cols={50} className="w-full p-2.5 rounded outline-none border-none shadow-lg focus:border-solid focus:border-2 focus:border-blue-400"/>

          <FormInput 
            type="number"
            name="Price"
          />
          
          <Button type='submit' onClick={handleSubmit}>Add Photo</Button>
          
        </Stack>
      </form>
    </Wrapper>
  )
}