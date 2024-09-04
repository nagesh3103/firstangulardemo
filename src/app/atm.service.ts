import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  constructor(private http:HttpClient) { }
  createAtm(atm:any):Observable<any>{
    console.log('in service'+JSON.stringify(atm));
    const httpHeaders={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json'
      })
    };
    return this.http.post("http://localhost:8080/api/createAtm",atm,httpHeaders);
  }
}
