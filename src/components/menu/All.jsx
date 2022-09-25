import React, { useEffect, useState, useMemo } from 'react'
import { UsersService } from '../../services/Services'
import { ItemUser } from '../userItem/ItemUser'
import { Input } from '../UI/input/Input';
import { Users } from '../users/Users';
import { useFetching } from '../hooks/useFetching';
import { Loading } from '../UI/loading/Loading';
import { ServerError } from '../UI/serverError/ServerError';
import { NotFound } from '../UI/notFound/NotFound';

export const All = () => {

  const [users, setUsers] = useState([])
  const [fetchUsers, isUsersLoading, usersError] = useFetching( async () =>{
    const response = await UsersService.GetCurrentUsers('all')
    setUsers(response.items)
  })
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('alfabet')

  useEffect(() => {
    fetchUsers()
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onChangeFilter = (event) => {
    setFilter(event)
  }

  const sortedUsers = useMemo(() => {
    let sorted = []
    if(searchValue){
      sorted = [...users].filter(person => {
        const fullName = (person.firstName + ' ' + person.lastName).toLowerCase()
        return fullName.includes((searchValue).toLowerCase()) 
      }) 
      return sorted
    } 
    else if (filter === 'alfabet') {
      return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName))
    }
    else if (filter === 'birthday') {
      return [...users].sort((a, b) => a.birthday.localeCompare(b.birthday))
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
          sortedUsers.length !== 0
          ? sortedUsers.map(person => <ItemUser key={person.id + Math.floor(Math.random()*1000)} person={person} />)
          : <NotFound />
        )
      }
    </div>
  )
}