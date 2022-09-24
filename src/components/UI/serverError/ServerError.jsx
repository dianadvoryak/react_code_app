import React from 'react'
import Air from '../../../assets/Air.png'
import classes from './ServerError.module.scss'


export const ServerError = ({forceUpdate}) => {

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img src={Air} alt="" className={classes.img} />
        <h1 className={classes.title}>Какой-то сверхразум все сломал</h1>
        <p className={classes.text}>Постараемся быстро починить</p>
        <p className={classes.btn} onClick={() => window.location.reload()}>Попробовать снова</p>
      </div>
    </div>
  )
}