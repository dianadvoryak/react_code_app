import React, { useState } from 'react'
import classes from './Input.module.scss'
import Search from '../../../assets/Search.png'
import SearchBlack from '../../../assets/SearchBlack.png'
import Tab from '../../../assets/Tab.png'
import TabBlue from '../../../assets/TabBlue.png'
import { Modal } from '../modal/Modal';
import { useFilterContext } from '../../context/ModalContext';
import { useInputFieldContext } from '../../context/InputContext'

export const Input = ({searchValue, onChangeSearchValue, onChangeFilter}) => {

  const [open, setOpen] = useState(false)
  const activeTab = useFilterContext()
  const activeInput = useInputFieldContext()
  const activeModal = () => {
    setOpen(!open)
  }

  return (
    <>
    {
      open && <Modal activeModal={activeModal} onChangeFilter={onChangeFilter} />
    }
      <div className={classes.container}>
        <h1 className={classes.h1}>Поиск</h1>
        <div className={classes.input_container}>
          {
            activeInput
            ? <img src={SearchBlack} alt="" className={classes.img_search}/>
            : <img src={Search} alt="" className={classes.img_search}/>
          }
          
          <input 
            value={searchValue}
            onChange={onChangeSearchValue}
            type='text' 
            placeholder='Введи имя, тег, почту...' 
            className={classes.input}
          />
          {
            activeTab == 'birthday'
            ? <img src={TabBlue} alt="" onClick={activeModal} className={classes.img_tab}/>
            : <img src={Tab} alt="" onClick={activeModal} className={classes.img_tab}/>
          }
          
        </div>
      </div>
    </>
  )
}