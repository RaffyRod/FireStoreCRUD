import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap,map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/*
1. importamos el Router de angular/router.
2. importamos los observables tap,map, take de rxjs
3. importamos nuestro authService que es el que posee los metodos de logueo.a
4. inyectamos las dependencias en el constructor private router: Router y private authService : AuthService.
5. luego hacemos un return del metodo afAuth desde el authService ej: return this.authService.afAuth.authState
.pipe(
  take(1),
       map( authState => !! authState), // puedo solo pasar un pipe y encadenar operadores con coma
          tap(logado => {
          if(!logado){
            this.router.navigate(['/login']);
          }
)  tomando en cuenta que dentro del pipe se pueden encadenar los operadores usando comas (,)
NOTA: el guard se inserta en el app module como un provider
*/

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService

  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.afAuth.authState
    .pipe(
      take(1),
       map( authState => !! authState), // puedo solo pasar un pipe y encadenar operadores con coma
          tap(logado => {
          if(!logado){
            this.router.navigate(['/login']);
          }
      })
    )
  }
}
