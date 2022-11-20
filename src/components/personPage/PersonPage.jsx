import React, { useEffect, useState, useMemo } from 'react'
import { UsersService } from '../../services/Services'
import { useParams } from 'react-router-dom'
import Arrow from '../../assets/Arrow.png'
import Phone from '../../assets/Phone.png'
import Star from '../../assets/Star.png'
import classes from './PersonPage.module.scss'

export const PersonPage = () => {
  const {id} = useParams()
  const [findPerson, setFindPerson] = useState({})
  const [foundReg, setFoundReg] = useState('')

  const re = /(\d{4})-(\d{2})-(\d{2})/

  useEffect(() => {
    UsersService.GetCurrentUsers('all')
      .then(data => data.items)
      .then(data => data.find(user => user.id === id))
      .then(data => {
        setFindPerson(data)
        setFoundReg(data.birthday.match(re))
      })
  }, [])
  
  
  const countDate = useMemo(() => {
    if(foundReg.length !== 0){
      const year = foundReg[1]
      const mounth = foundReg[2]
      const day = foundReg[3]
      const date = new Date(year, mounth, day);
      const options1 = { year: 'numeric' };
      const options2 = { month: 'long', day: 'numeric' };
      const prepared = new Intl.DateTimeFormat('ru-US', options2).format(date) + ' ' + new Intl.DateTimeFormat('ru-US', options1).format(date)

      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) //Текущaя дата без времени
      const dob = new Date(year, mounth, day, 0, 0, 0) //Дата рождения
      const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) //ДР в текущем году
      let age = today.getFullYear() - dob.getFullYear() // Возраст = текущий год - год рождения
      if (today < dobnow) { //Если ДР в этом году ещё предстоит, то вычитаем из age один год
        age = age-1;
      }
      return [prepared, age]
    }
    return [0,0]
  }, [findPerson, foundReg])



  return (
    <>
      <div className={classes.field}>
        <div className={classes.container}>
          <div>
            <div>
              <img 
                onClick={() => window.history.back()}
                src={Arrow} 
                alt="" 
                className={classes.arrow}
              />
              </div>
            <div className={classes.wrapper}>
              <div className={classes.inner}>
                {
                  findPerson && 
                  <>
                    <img src={findPerson.avatarUrl} alt="" className={classes.logo}/>
                    <div className={classes.name_group}>
                      <h2 className={classes.name}>{findPerson.firstName}</h2>&nbsp;
                      <h2 className={classes.name}>{findPerson.lastName}</h2>&nbsp;
                      <span className={classes.userTag}>{findPerson.userTag}</span>
                    </div>
                    <h3 className={classes.position}>{findPerson.position}</h3>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.info_wrapper}>
          <div className={classes.info_block_1}>
            {
              foundReg && 
              <>
                <div className={classes.birthday}>
                  <img src={Star} alt="" className={classes.img}/>
                  <p>{countDate[0]}</p>
                </div>
                <p className={classes.span}>{countDate[1]}&nbsp;года</p>
              </>
            }
          </div>
          <div className={classes.line}></div>
          <div className={classes.info_block_2}>
            <img src={Phone} alt="" className={classes.img}/>
            <a href={`tel:${findPerson.phone}`} className={classes.phone}>{findPerson.phone}</a>
          </div>
        </div>
      </div>
    </>
  )
}


