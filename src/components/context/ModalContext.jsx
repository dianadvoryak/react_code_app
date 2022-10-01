import React, { useState, useContext, createContext} from 'react'

const CheckedOneContext = createContext()
const CheckedTwoContext = createContext()
const ChangeOneContext = createContext()
const ChangeTwoContext = createContext()
const FilterContext = createContext()
const ChangeFilterContext = createContext()

export const useCheckedOneContext = () => {
  return useContext(CheckedOneContext)
}
export const useCheckedTwoContext = () => {
  return useContext(CheckedTwoContext)
}
export const useChangeOneContext = () => {
  return useContext(ChangeOneContext)
}
export const useChangeTwoContext = () => {
  return useContext(ChangeTwoContext)
}
export const useFilterContext = () => {
  return useContext(FilterContext)
}
export const useChangeFilterContext = () => {
  return useContext(ChangeFilterContext)
}

export const ModalContext = ({ children }) => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [filter, setFilter] = useState('alfabet')


  const checkedChange1 = () => {
    if(checked1 == false){
      setChecked1(!checked1)
      setChecked2(!checked2)
    }
  }

  const checkedChange2 = () => {
    if(checked2 == false){
      setChecked2(!checked2)
      setChecked1(!checked1)
    }
  }

  const onChangeFilter = (event) => {
    setFilter(event)
  }

  return (
    <CheckedOneContext.Provider value={checked1}>
      <CheckedTwoContext.Provider value={checked2}>
        <ChangeOneContext.Provider value={checkedChange1}>
          <ChangeTwoContext.Provider value={checkedChange2}>
            <FilterContext.Provider value={filter}>
              <ChangeFilterContext.Provider value={onChangeFilter}>
                { children }
              </ChangeFilterContext.Provider>
            </FilterContext.Provider>
          </ChangeTwoContext.Provider>
        </ChangeOneContext.Provider>
      </CheckedTwoContext.Provider>
    </CheckedOneContext.Provider>
  )
}