import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EpisodeGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(): boolean {
    if ( localStorage.getItem('rickAndMortyToken' )) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
