import React, { useState, useContext, createContext } from 'react'

const InputFieldContext = createContext()
const ChangeInputFieldContext = createContext()

export const useInputFieldContext = () => {
  return useContext(InputFieldContext)
}
export const useChangeInputFieldContext = () => {
  return useContext(ChangeInputFieldContext)
}

export const InputContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <InputFieldContext.Provider value={searchValue}>
      <ChangeInputFieldContext.Provider value={onChangeSearchValue}>
        { children }
      </ChangeInputFieldContext.Provider>
    </InputFieldContext.Provider>
  )
}