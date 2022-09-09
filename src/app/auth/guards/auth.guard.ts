import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate  {

  constructor(private authService: AuthService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {

      console.log('Prueba', this.authService.verificaAutenticacion())

      return this.authService.verificaAutenticacion()
              .pipe(
                tap(estaAutenticado => {
                  if(!estaAutenticado){
                    this.router.navigate(['./auth/login'])
                  }
                })
              )

      // if (this.authService.auth.id) {
      //   return true;
      // }

      // console.log('Bloqueado por el authGuard - canActivate')
      // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {



      console.log('Prueba',this.authService.verificaAutenticacion())

      return this.authService.verificaAutenticacion()
        .pipe(
          tap(estaAutenticado => {
            if(!estaAutenticado){
              this.router.navigate(['./auth/login'])
            }
          })
        )


    // if (this.authService.auth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por el AuthGuard - canLoad')
    // return false;
   }
}
