import React, { useEffect, useState, useMemo } from 'react'
import { UsersService } from '../../services/Services'
import { ItemUser } from '../userItem/ItemUser'
import { Input } from '../UI/input/Input';
import { Users } from '../users/Users';
import { useFetching } from '../hooks/useFetching';
import { Loading } from '../UI/loading/Loading';
import { ServerError } from '../UI/serverError/ServerError';

export const All = () => {

  const [users, setUsers] = useState([])
  const [fetchUsers, isUsersLoading, usersError] = useFetching( async () =>{
    const response = await UsersService.GetCurrentUsers('all')
    setUsers(response.items)
  })
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }




  const sortedPosts = useMemo(() => {
    console.log(1)
    if(searchValue){
      [...users].filter(person => {
        const fullName = (person.firstName + ' ' + person.lastName).toLowerCase()
        return fullName.includes((searchValue).toLowerCase()) 
      })
    }
  }, [users])

console.log(sortedPosts)


  const sortUsers = () => {
    setUsers([...users].filter(person => {
        const fullName = (person.firstName + ' ' + person.lastName).toLowerCase()
        return fullName.includes((searchValue).toLowerCase()) 
      })
    )
  }

  return (
    <div>
      <Input 
        searchValue={searchValue} 
        onChangeSearchValue={onChangeSearchValue} 
        sortUsers={sortUsers}
      />
      <Users />
      {
        usersError && <ServerError />
      }
      {
        isUsersLoading
        ? <Loading />
        : (
          users
            // .filter(person => {
            //   const fullName = (person.firstName + ' ' + person.lastName).toLowerCase()
            //   return fullName.includes((searchValue).toLowerCase()) 
            // })
            .map(person => (
              person
              ? <ItemUser key={person.id + Math.floor(Math.random()*1000)} person={person} />
              : <h1>no</h1>
            )) 
        )
      }
    </div>
  )
}