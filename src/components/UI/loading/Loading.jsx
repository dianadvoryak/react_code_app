import React from 'react'
import Skeleton from '../../../assets/Skeleton.png'
import classes from './Loading.module.scss'

export const Loading = () => {

  return (
    <div className={classes.container}>
      <img src={Skeleton} alt="" />
    </div>
  )
}