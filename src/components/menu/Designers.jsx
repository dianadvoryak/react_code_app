import React, { useEffect, useState, useMemo } from 'react'
import { UsersService } from '../../services/Services'
import { ItemUser } from '../userItem/ItemUser'
import { Input } from '../UI/input/Input';
import { Users } from '../users/Users';
import { useFetching } from '../hooks/useFetching';
import { Loading } from '../UI/loading/Loading';
import { ServerError } from '../UI/serverError/ServerError';
import { NotFound } from '../UI/notFound/NotFound';
import { useInputFieldContext, useChangeInputFieldContext } from '../context/InputContext';
import { UserItemBirthday } from '../userItemBirthday/UserItemBirthday';
import { useChangeFilterContext, useFilterContext } from '../context/ModalContext';
import './styles.scss';

export const Designers = () => {

  const [users, setUsers] = useState([])
  const [fetchUsers, isUsersLoading, usersError] = useFetching( async () =>{
    const response = await UsersService.GetCurrentUsers('design')
    setUsers(response.items)
  })
  const searchValue = useInputFieldContext()
  const onChangeSearchValue = useChangeInputFieldContext()

  const filter = useFilterContext()
  useEffect(() => {
    fetchUsers()
  }, [])

  const onChangeFilter = useChangeFilterContext()
 
  const sortedUsers = useMemo(() => {
    let sorted = []
    if(searchValue){
      sorted = [...users].filter(person => {
        const fullName = (person.firstName + ' ' + person.lastName).toLowerCase()
        return (fullName.includes((searchValue).toLowerCase()) 
        || person.userTag.includes((searchValue).toLowerCase()))
      }) 
      return sorted
    } 
    else if (filter === 'alfabet') {
      return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName))
    }
    else if (filter === 'birthday') {
      return [...users].sort((a, b) => a.birthday.substr(-4) < b.birthday.substr(-4) ? -1 : 1)
    }
    else return users
  }, [searchValue, users, filter])



  return (
    <div>
      <Input 
        searchValue={searchValue} 
        onChangeFilter={onChangeFilter}
        onChangeSearchValue={onChangeSearchValue} 
        onChange={() => (sortedUsers())}
      />
      <Users />
      {
        usersError && <ServerError />
      }
      {
        isUsersLoading
        ? <Loading />
        : 
        (
          filter === 'birthday' 
          ?
          (
            sortedUsers.length !== 0
            ? 
            (
            <>
              {
                 sortedUsers
                 .filter(person => (person.birthday.substr(5, 2) > ((new Date()).getMonth())))
                 .map(person => <UserItemBirthday key={person.id + Math.floor(Math.random()*1000)} person={person} />)
              }
               
               <div className='container'><div className='data'>{(new Date()).getFullYear()+1}</div></div>
              
              {
                sortedUsers
                .filter(person => (person.birthday.substr(5, 2) < ((new Date()).getMonth())))
                .map(person => <UserItemBirthday key={person.id + Math.floor(Math.random()*1000)} person={person} />)
              }
            </>
            )
            : <NotFound />
          )
          : 
          (
            sortedUsers.length !== 0
            ? sortedUsers.map(person => <ItemUser key={person.id + Math.floor(Math.random()*1000)} person={person} />)
            : <NotFound />
          )
        )
      }
    </div>
  )
}