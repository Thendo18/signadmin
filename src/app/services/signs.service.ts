import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Signs } from '../Classes/signs';

@Injectable({
  providedIn: 'root'
})
export class SignsService {
  url: string ="http://localhost:3000/word";

  constructor(private http: HttpClient) { }
    
    getAllWord(){
      console.log(Response);
      return this.http.get(this.url).pipe(
        map(response => response));
    }


  public getOne(id:any) {
  
 
  return this.http.get(`${this.url}/${id}`);
  }

  public addWord(word:Signs){
    return this.http.post<Signs>(`${this.url}`,word);

  }

     public updateWord(word:Signs){
        return this.http.put<Signs>(`${this.url}/${word._id}`,word)


     }
    public deleteWord(id:number){
      return this.http.delete(`${this.url}/${id}`);

     }
     
     

}
