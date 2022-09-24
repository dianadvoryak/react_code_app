import React from 'react'
import classes from './Modal.module.scss'
import Close from './../../../assets/Close.png'

export const Modal = ({activeModal}) => {

  return (
    <div className={classes.overlay}>
      <div className={classes.module}>
        <div className={classes.wrapper_title}>
          <h1 className={classes.title}>Сортировка</h1>
          <img src={Close} alt="" onClick={activeModal} className={classes.img} />
        </div>
        <div className={classes.radio_block}>
          <div className={classes.wrapper_radio}>
            <input name="sort" type="radio" id="choice1" value="alphabet" className={classes.first_radio}></input>
            <label htmlFor="choice3" className={classes.label}>По алфавиту</label>
          </div>
          <div className={classes.wrapper_radio}>
            <input name="sort" type="radio" id="choice1" value="birthday" className={classes.second_radio}></input>
            <label htmlFor="choice3" className={classes.label}>По дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  )
}