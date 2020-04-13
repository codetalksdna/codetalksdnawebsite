import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthPassService {

  constructor() { }
  public password: any;
  public username: any;

 
 x:any;
  authenticate(password: any, username: any) {
    this.password = password
    this.username = username
    sessionStorage.setItem('password', JSON.stringify(this.password))
    sessionStorage.setItem('username', JSON.stringify(this.username))
    
  }
  
 
}