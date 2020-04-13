import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "1247" && password === "Abc@1234") {
      sessionStorage.setItem('username', username)
      return true;

    } else {
      return alert('Invalid Login Credentials');
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    localStorage.setItem('loggedIn', 'true')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    
  }
}
