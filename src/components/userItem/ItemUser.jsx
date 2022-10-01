import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ItemUser.module.scss'

export const ItemUser = ({person}) => {

  return (
    <div className={classes.container}>
      <NavLink to={`/${person.id}`} className={classes.link}>
        <div className={classes.wrapper}>
          <img src={person.avatarUrl} alt="" className={classes.img}/>
          <div>
            <div className={classes.name_group}>
              <h2 className={classes.name}>{person.firstName}</h2>&nbsp;
              <h2 className={classes.name}>{person.lastName}</h2>&nbsp;
              <span className={classes.userTag}>{person.userTag}</span>
            </div>
            <h3 className={classes.position}>{person.position}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  )
}