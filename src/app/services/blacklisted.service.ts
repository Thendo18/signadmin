import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Users } from '../Classes/users';

@Injectable({
  providedIn: 'root'
})
export class BlacklistedService {
  url: string ="http://localhost:3000/auth/status/true";
  

  constructor(private http: HttpClient) {}

  getAllUsers() {
  
    console.log(Response);
    return this.http.get(this.url).pipe(
      map(response => response)

  );
 
  }

  public getOne(id:any) {
  
  //   return this.http.get(`${this.url}/${id}`).pipe(
  //     map(response => response)
  // );
 
  return this.http.get(`${this.url}/${id}`);
  }



  public AddUsers(details: Users){
    return this.http.post<Users>(`${this.url}`,details);
  }

  public updateUsers(details: Users){
    return this.http.put<Users>(`${this.url}/${details._id}`, details);
  }

  public deleteUsers(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
