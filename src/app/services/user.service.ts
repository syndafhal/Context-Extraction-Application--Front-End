import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient ) { }


  Contextextraction(text: any):Observable <any>{
    return this.http.post<any>('http://localhost:8000/context/lda',text)
  }

  
}
