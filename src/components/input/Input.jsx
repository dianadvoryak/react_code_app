import React from 'react'
import classes from './Input.module.scss'
import Search from '../../assets/Search.png'
import Tab from '../../assets/Tab.png'

export const Input = () => {

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Поиск</h1>
      <div className={classes.input_container}>
        <img src={Search} alt="" className={classes.img_search}/>
        <input 
          type='text' 
          placeholder='Введи имя, тег, почту...' 
          className={classes.input}
        />
        <img src={Tab} alt="" className={classes.img_tab}/>
      </div>
    </div>
  )
}