import { useState } from 'react'
import { Stack } from "../layouts/Stack/Stack"
import { Wrapper } from "../layouts/Wrapper/Wrapper"
import { Button } from "./Button/Button"
import { FormInput } from "./FormInput"

import PropTypes from 'prop-types'

import useErrors from '../../hooks/useErrors'
import isValidEmail from '../../utils/isValidEmail';

export const SignForm = ({ error }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  const handleNameChange = e => {
    setName(e.target.value);

    if (!e.target.value && isValidEmail(e.target.value)) {
      setError({ field: 'name', message: 'Name is required' })
    } else {
      removeError('name')
    }
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);

    if(!e.target.value) {
      setError({ field: 'email', message: 'Email is required' })
    } else {
      removeError('email')
    }
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);

    if(!e.target.value) {
      setError({ field: 'password', message: 'Password is required' })
    } else {
      removeError('password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      name, email, password
    })
  }

  return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormInput 
              type="text"
              value={name}
              name="Username"
              placeholder="Name"
              onChange={handleNameChange}
              error={getErrorMessageByFieldName('name')}
            />
            {error && <small className="text-red-600 text-xs mt-2">{error}</small>}

            <FormInput 
              type="email"
              value={email}
              name="Email"
              placeholder="Email Address"
              onChange={handleEmailChange}
              error={getErrorMessageByFieldName('email')}
            />
            {error && <small className="text-red-600 text-xs mt-2">{error}</small>}

            <FormInput 
              type="text"
              value={password}
              name="Password"
              placeholder="Password"
              onChange={handlePasswordChange}
              error={getErrorMessageByFieldName('password')}
            />
            {error && <small className="text-red-600 text-xs mt-2">{error}</small>}

            <Button type='submit'>Sign Up</Button>
          </Stack>
        </form>
      </Wrapper>
  )
}

SignForm.propTypes = {
  nameError: PropTypes.string,
  emailError: PropTypes.string,
}

SignForm.defaultProps = {
  nameError: null,
  emailError: null
}