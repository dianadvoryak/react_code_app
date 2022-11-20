import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Users.module.scss'
import './styles.scss';

export const Users = () => {

  return (
    <>
      <div className={classes.container}>
        <NavLink exact="true" end to='/react_kode_dev' className={classes.item}>All</NavLink>
        <NavLink to='/designers' className={classes.item}>Designers</NavLink>
        <NavLink to='/analysts' className={classes.item}>Analysts</NavLink>
        <NavLink to='/managers' className={classes.item}>Managers</NavLink>
        <NavLink to='/ios' className={classes.item}>iOS</NavLink>
        <NavLink to='/android' className={classes.item}>Android</NavLink>
      </div>
      <div className={classes.line}></div>
    </>
  )
}