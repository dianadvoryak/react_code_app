import axios from "axios"

export class UsersService {
  static async GetCurrentUsers (users){
    const response = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${users}`)
    return response.data
  }
}




