import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/AuthenticationService/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error = err.error.error;
            
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/auth']);
            }

            this.snackBar.open('😓 ' + (error.message || error.statusText), null, { panelClass: 'error-dialog', verticalPosition: 'bottom' });
            return throwError(error);
        }))
    }
}