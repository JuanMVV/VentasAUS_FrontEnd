import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //cuando la ruta tenga el pedido de auth, mandamos el token
    if(this.shouldInterceptRequest(request)){
      const authRequest = request.clone({
        setHeaders: {
          'Authorization': this.cookieService.get('Authorization')
        }
      });   
      return next.handle(authRequest);
    }

    //si no tienen el pedido de auth, mandamos normal
    return next.handle(request);
  }


  private shouldInterceptRequest(request: HttpRequest<any>):boolean {
    return request.urlWithParams.indexOf('addAuth=true', 0) > -1? true: false;
  }







}
