import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  // //creamo una variable para obtener la cookie
  // const cookieService = inject(CookieService);
  
  // //creamos una variable para poder logout al que se quiere meter por las url sin log
  // const authService = inject(AuthService);

  // //variable para el ruteo
  // const router = inject(Router);

  // //chekeamos si tiene jwt
  // let token = cookieService.get('Authorization');

  // if(token) {
  //   token = token.replace('Bearer ', '');
  //   const decodedToken = jwt_decode(token);
  // }else{    
  //   //logout
  //   authService.logout();
  //   return router.createUrlTree(['/login', { queryParams : { returnUrl: state.url}}]);
  // }
return true;


};


