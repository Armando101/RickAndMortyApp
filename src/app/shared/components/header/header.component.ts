import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogin = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginService.getObservable().subscribe((response: boolean) => {
      this.isLogin = response;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/home');
  }
}
