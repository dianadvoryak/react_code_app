import React, { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './UserItemBirthday.module.scss'

export const UserItemBirthday = ({person}) => {
  const re1 = /(\d{4})-(\d{2})-(\d{2})/
  const re2 = /\d{1,2}\s.{4}/ 
  const foundReg = person.birthday.match(re1)
  
  const countDate = useMemo(() => {
    if(foundReg.length !== 0){
      const year = foundReg[1]
      const mounth = foundReg[2]
      const day = foundReg[3]
      const date = new Date(year, mounth, day);
      const options1 = { year: 'numeric' };
      const options2 = { month: 'long', day: 'numeric' };
      return (new Intl.DateTimeFormat('ru-US', options2).format(date)).match(re2)
    }
    return ''
  }, [foundReg])
  

  return (
    <div className={classes.container}>
      <NavLink to={`/${person.id}`} className={classes.link}>
        <div className={classes.wrapper}>
          <div className={classes.block}>
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
          <div className={classes.birthday}>
            {countDate}
          </div>
        </div>
      </NavLink>
    </div>
  )
}