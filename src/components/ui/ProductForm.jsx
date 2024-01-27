import { useState } from 'react'
import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"
import { FormInput } from "./FormInput"


export const ProductForm = ({ 
  namePlaceholder, 
  urlPlaceholder, 
  idPlaceholder, 
  pricePlaceholder, 
  descPlaceholder, 
  create = false, 
  btnLabel,
  onSubmit
}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [id, setId] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleUrlChange(e) {
    setUrl(e.target.value);
  }

  function handleIdChange(e) {
    setId(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({id, name, url, desc, price});
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Stack>
          <FormInput 
            type="text"
            name="Name"
            value={name}
            placeholder={namePlaceholder}
            onChange={handleNameChange}
          />

          <FormInput 
            type="text"
            name="Photo URL"
            value={url}
            placeholder={urlPlaceholder}
            onChange={handleUrlChange}
          />

          {create ? 
            <FormInput 
            type="text"
            name="Photo ID"
            value={id}
            placeholder={idPlaceholder}
            onChange={handleIdChange}
          />
          :
          ""
          }

          <label 
            htmlFor="desc" 
            className="font-semibold"
          >
            Description
          </label>
          <textarea 
            type="text" 
            name="desc" 
            rows={4} 
            cols={50} 
            value={desc}
            placeholder={descPlaceholder}
            onChange={handleDescChange}
            className="w-full p-2.5 rounded outline-none border-none shadow-lg focus:border-solid focus:border-2 focus:border-blue-400"
          />

          <FormInput 
            type="number"
            name="Price"
            value={price}
            onChange={handlePriceChange}
            placeholder={pricePlaceholder}
          />
          
          <Button type='submit'>{btnLabel}</Button>

          {create ?
            ""
            :
            <button 
              type="submit" 
              className="text-sm font-medium cursor pointer bg-transparent text-red-500 border-none underline hover:text-opacity-60 focus:text-opacity-60"
            >
              Delete
            </button>
          }
          
        </Stack>
      </form>
    </Wrapper>
  )
}