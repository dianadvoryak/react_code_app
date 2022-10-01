import React, { useState } from 'react'
import classes from './Modal.module.scss'
import Close from './../../../assets/Close.png'
import { useCheckedOneContext, useCheckedTwoContext, useChangeOneContext, useChangeTwoContext } from '../../context/ModalContext';

export const Modal = ({activeModal, onChangeFilter}) => {
  const checked1 = useCheckedOneContext()
  const checked2 = useCheckedTwoContext()
  const checkedChange1 = useChangeOneContext()
  const checkedChange2 = useChangeTwoContext()

  const closeModal = () => {
    setTimeout(() => {
      activeModal()
    }, 300)
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.module}>
        <div className={classes.wrapper_title}>
          <h1 className={classes.title}>Сортировка</h1>
          <img src={Close} alt="" onClick={activeModal} className={classes.img} />
        </div>
        <div className={classes.radio_block}>
          <div className={classes.wrapper_radio}>
            <input 
              onClick={() => (onChangeFilter('alfabet'), closeModal(), checkedChange1())}
              defaultChecked={checked1}
              name="sort" 
              type="radio" 
              id="choice1" 
              value="alphabet" 
              className={classes.first_radio}
            />
            <label htmlFor="choice3" className={classes.label}>По алфавиту</label>
          </div>
          <div className={classes.wrapper_radio}>
            <input 
              onClick={() => (onChangeFilter('birthday'), closeModal(), checkedChange2())}
              defaultChecked={checked2}
              name="sort" 
              type="radio" 
              id="choice1" 
              value="birthday" 
              className={classes.second_radio}
            />
            <label htmlFor="choice3" className={classes.label}>По дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  )
}