import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let head: HttpHeaders = req.headers;
        head = head.append('Access-Control-Allow-Origin', '*');
        const authToken = this.authService.getToken();
        if (authToken) {
          head = head.set('Authorization', 'Bearer ' + authToken);
        }
        const cloned = req.clone({
            headers: head
        });
        return next.handle(cloned);
    }
}
