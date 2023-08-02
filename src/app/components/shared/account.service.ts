import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  async login(user: any): Promise<boolean> {


    if (user.email === 'admin@admin' && user.password === 'admin') {
      window.localStorage.setItem('token', 'meu-token');
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return !!token;
  }
}
