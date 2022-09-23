import React, { useEffect, useState } from 'react'
import { UsersService } from '../../services/Services'
import { ItemUser } from '../userItem/ItemUser'
import { Input } from '../input/Input';
import { Users } from '../users/Users';


export const Ios = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    UsersService.GetCurrentUsers('ios').then(data => setUsers(data.items))
  }, [users])
  

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