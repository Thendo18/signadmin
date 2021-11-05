import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Users } from '../Classes/users';

@Injectable({
  providedIn: 'root'
})
export class RequestedService {
  url: string ="https://sign-translate.herokuapp.com/word/";

  constructor(private http: HttpClient) {}




  public getOne(id:any) {
  
  return this.http.get(`${this.url}/${id}`);
  }


  public updateUsers(details: Users){
    return this.http.put<Users>(`${this.url}/${details._id}`, details);
  }

  public deleteUsers(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
