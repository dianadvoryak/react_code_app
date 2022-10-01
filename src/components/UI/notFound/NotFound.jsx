import React from 'react'
import classes from './NotFound.module.scss'
import Find from '../../../assets/Find.png'

export const NotFound = () => {

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img src={Find} alt="" className={classes.img} />
        <h1 className={classes.title}>Мы никого не нашли</h1>
        <p className={classes.text}>Попробуй скорректировать запрос</p>
      </div>
    </div>
  )
}