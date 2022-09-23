import React, { useEffect, useState } from 'react'
import { UsersService } from '../../services/Services'
import { ItemUser } from '../userItem/ItemUser'
import { Input } from '../input/Input';
import { Users } from '../users/Users';


export const All = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    UsersService.GetCurrentUsers('all').then(data => setUsers(data.items))
  }, [])

  // console.log(users)

  return (
    <div>
      <Input />
      <Users />
      {
        users 
        ? users.map(person => <ItemUser person={person} />) 
        : <h1>no users</h1>
        
      }
    </div>
  )
}