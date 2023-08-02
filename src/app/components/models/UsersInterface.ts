export interface UsersInterface {
  id:number,
  name:string,
  username: string,
  email:string,
  address:{
    city: string
  },
  company:{
    name: string
  }
  phone: number
  website: string
}
