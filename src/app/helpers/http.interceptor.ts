import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/AuthenticationService/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const credentials = this.authenticationService.currentCredentials;
        const isLoggedIn = credentials.access_token;
        const isApiUrl = request.url.startsWith(environment.spotify_api);
        if (isLoggedIn && isApiUrl && request.url.endsWith('me')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${credentials.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}