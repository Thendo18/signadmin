import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Signs } from '../Classes/signs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignsService {
  url: string ="http://localhost:3000/word";
  public isUpdated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
    
    getAllWord(){
      return this.http.get(this.url).pipe(
        map(response => response));
    }


  public getOne(id:any) {
  
 
  return this.http.get(`${this.url}/${id}`);
  }

  public addWord(word:any){
    return this.http.post(`${this.url}/upload`,word);

  }

     public updateWord(id:any,body:any){
        return this.http.put<Signs>(`${this.url}/${id}`,body)


     }
    public deleteWord(id:number){
      return this.http.delete(`${this.url}/${id}`);

     }
     
     

}
