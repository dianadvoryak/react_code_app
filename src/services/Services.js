import axios from "axios"

export class UsersService {
  static GetCurrentUsers (users){
    try{
      return axios.get(
        `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${users}`,
      ).then(response => response.data)
    }catch(e){
      console.log('ServerError')
    }
    
  }
}




