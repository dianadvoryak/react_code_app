import React, { useEffect, useState, useMemo } from 'react'
import { UsersService } from '../../services/Services'
import { useParams } from 'react-router-dom'
import Arrow from '../../assets/Arrow.png'
import Phone from '../../assets/Phone.png'
import Star from '../../assets/Star.png'
import classes from './PersonPage.module.scss'

export const PersonPage = () => {
  const {id} = useParams()
  const [findPerson, setPerson] = useState({})
  const [found, setfound] = useState([])
  const [prepared, setprepared] = useState([])

  const re = /(\d{4})-(\d{2})-(\d{2})/

  useEffect(() => {
    UsersService.GetCurrentUsers('all')
      .then(data => data.items)
      .then(data => data.find(user => user.id === id))
      .then(data => setPerson(data))
      .then(data => {
        setfound(data.birthday.match(re))
      })
  }, [])
  
  
    const func = useMemo(() => {
      if(findPerson){
        // setfound(findPerson.birthday.match(re))
        console.log(found)
        const year = found[1]
        const mounth = found[2]
        const day = found[3]
        const date = new Date(Date(year, mounth, day));
        let options1 = { year: 'numeric' };
        let options2 = { month: 'long', day: 'numeric' };
        setprepared(new Intl.DateTimeFormat('ru-US', options2).format(date) + ' ' + new Intl.DateTimeFormat('ru-US', options1).format(date) )
        console.log(prepared)  
        return prepared
      }
    
  }, [findPerson])

  func()


  // console.log(new Date().getDate())
  // const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) //Текущaя дата без времени
  // const dob = new Date(year, mounth, day, 0, 0, 0) //Дата рождения
  // const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) //ДР в текущем году
  // // const age = 0 //Возраст 

  // //Возраст = текущий год - год рождения
  // const age = today.getFullYear() - dob.getFullYear();
  // //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  // if (today < dobnow) {
  //   age = age-1;
  // }

  // console.log(`Возраст: ${age}`);




  return (
    <>
      <div className={classes.field}>
        <div className={classes.container}>
          <div>
            <div><img src={Arrow} alt="" className={classes.arrow}/></div>
            <div className={classes.wrapper}>
              <div className={classes.inner}>
                <img src={findPerson.avatarUrl} alt="" className={classes.logo}/>
                <div className={classes.name_group}>
                  <h2 className={classes.name}>{findPerson.firstName}</h2>&nbsp;
                  <h2 className={classes.name}>{findPerson.lastName}</h2>
                </div>
                <h3 className={classes.position}>{findPerson.position}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.info_wrapper}>
          <div className={classes.info_block}>
            <img src={Star} alt="" className={classes.img}/>
            {/* <p>{prepared}</p> */}
          </div>
          <div className={classes.line}></div>
          <div className={classes.info_block}>
            <img src={Phone} alt="" className={classes.img}/>
            <a href={`tel:${findPerson.phone}`} className={classes.phone}>{findPerson.phone}</a>
          </div>
        </div>
      </div>
    </>
  )
}


