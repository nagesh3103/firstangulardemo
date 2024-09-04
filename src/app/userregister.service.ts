import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
 userNameBehaviourSubject = new BehaviorSubject<string>('Neoteric');

 emitName(name:any):void{
  this.userNameBehaviourSubject.next(name);
 }


  constructor(private http: HttpClient) { 
    console.log('from customer in userreisterservice')
  }
  learnSyncMethod(user:any):Object{
    console.log('in Service'+JSON.stringify(user));
    const httpHeaders = {
      headers: new HttpHeaders({
        'companyname' : 'Neoteric',
        'Content-Type' : 'application/json',
        'Accept':'application/json' 
      })
    };
    return this.http.post("http://localhost:8080/api/registerUser",user,httpHeaders);
  }

  learnObservable():Observable<String>{
    return new Observable<string>( observer => {        //observer is a function
      console.log("Observer executed");

      setTimeout(() =>observer.next('Neoteric'),6000)

      //observer.next('from customer observable');
    })
  }

  registerUser(user: any) : Observable<Object>{
    console.log('  in Service'+ JSON.stringify(user));
    // method
    // path
    // protocol
    // headers
    // body
    const httpHeaders = {
      headers: new HttpHeaders({
        'companyname' : 'Neoteric',
        'Content-Type' : 'application/json',
        'Accept':'application/json'
      })
    };
    return this.http.post("http://localhost:8080/api/registerUser",user,httpHeaders);
  }
}
