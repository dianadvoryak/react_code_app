import React, { useState } from 'react'
import classes from './Input.module.scss'
import Search from '../../../assets/Search.png'
import Tab from '../../../assets/Tab.png'
import { Modal } from '../modal/Modal';

export const Input = ({searchValue, onChangeSearchValue, sortUsers}) => {

  const [open, setOpen] = useState(false)

  const activeModal = () => {
    setOpen(!open)
  }

  return (
    <>
    {
      open && <Modal activeModal={activeModal} />
    }
      <div className={classes.container}>
        <h1 className={classes.h1}>Поиск</h1>
        <div className={classes.input_container}>
          <img src={Search} alt="" className={classes.img_search}/>
          <input 
            value={searchValue}
            onChange={onChangeSearchValue}
            type='text' 
            placeholder='Введи имя, тег, почту...' 
            className={classes.input}
          />
          <img src={Tab} alt="" onClick={activeModal} className={classes.img_tab}/>
        </div>
      </div>
    </>
  )
}