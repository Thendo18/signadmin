import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Signs } from '../Classes/signs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignsService {
  url: string ="https://sign-translate.herokuapp.com/word";

  constructor(private http: HttpClient) { }
    
    getAllWord(){
      return this.http.get(`${this.url}/status/true`);
    }

    getAllWords()
    {
      return this.http.get(`${this.url}/status/false`);
    }


  public getOne(id:any) {
  return this.http.get(`${this.url}/${id}`);
  }

  public addWord(word:any){
    return this.http.post<Signs>(`${this.url}/upload`,word);

  }

     public updateWord(id:any,body:any){
        return this.http.put<Signs>(`${this.url}/${id}`,body)


     }
    public deleteWord(id:number){
      // window.location.reload();
      return this.http.delete(`${this.url}/${id}`);
    

     }
     
     

}
