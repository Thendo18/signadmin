import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Users } from '../Classes/users';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{

    url: string ="https://sign-translate.herokuapp.com/auth/";
    signUp:string="https://sign-translate.herokuapp.com/auth/signup"; 
    signIn:string="https://sign-translate.herokuapp.com/auth/signin"; 

    constructor( private httpClient:HttpClient) { }

    get_All_Users()
    {
      return this.httpClient.get(`${this.url}status/false`)
  
    }

    get_One_User(id:any)
    {
      return this.httpClient.get(`${this.url}`+id)
    }

    public add_User(details: Users)
    {
      return this.httpClient.post<Users>(`${this.signUp}`,details);
    }

    update_user(id: string, body:any)
    {
        return this.httpClient.put(`${this.url}${id}`,body)
    }

    delete_user(id:any)
    {
      return this.httpClient.delete(`${this.url}${id}`)
  }



  signInUser(details:Users)
  {

    return this.httpClient.post<Users>(`${this.signIn}`,details);
  }


  //Kat's code
  user()
  {
    return this.httpClient.get('https://sign-translate.herokuapp.com/auth/users')
  }

  
}
