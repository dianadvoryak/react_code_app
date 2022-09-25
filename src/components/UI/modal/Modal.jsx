import React, { useState } from 'react'
import classes from './Modal.module.scss'
import Close from './../../../assets/Close.png'

export const Modal = ({activeModal, onChangeFilter}) => {
const [checked1, setChecked1] = useState(false)
const [checked2, setChecked2] = useState(false)

  const closeModal = () => {
    setTimeout(() => {
      activeModal()
    }, 300)
  }

  const checkedChange1 = () => {
    setChecked1(!checked1)
  }

  const checkedChange2 = () => {
    setChecked2(!checked2)
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
              checked={checked1}
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
              checked={checked2}
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