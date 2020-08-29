import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Fake User
  private user: User = {
    email: 'rick@morty.com',
    password: 'ImRickAndYouAreMorty'
  };

  // Fake token
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9yJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';

  public isLogin = new BehaviorSubject<boolean>(null);

  constructor() { }

  public getObservable(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

  public login(user: User): boolean {
    // Here will be post to backend login
    // In this case we use a fake user
    const { email, password } = user;
    if (this.user.email === email && this.user.password === password) {
      this.saveToken();
      this.isLogin.next(true);
      return true;
    } else {
      this.isLogin.next(false);
      return false;
    }
  }

  private saveToken(): void {
    localStorage.setItem('rickAndMortyToken', this.token);
  }

  public logout(): void {
    localStorage.removeItem('rickAndMortyToken');
    this.isLogin.next(false);
  }

  public isLoginFunction(): boolean {
    return !!localStorage.getItem('rickAndMortyToken');
  }
}
