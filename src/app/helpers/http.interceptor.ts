import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const credentials = JSON.parse(localStorage.getItem('credentials'));
        console.log(credentials);
        const isLoggedIn = credentials.access_token;
        const isApiUrl = request.url.startsWith(environment.spotify_api);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${credentials.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}