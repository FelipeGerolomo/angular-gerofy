import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  message(message: string, panelClass: Array<string>, duration = 3000): void {
    this.snackBar.open(message, null, {
      duration,
      verticalPosition: 'bottom',
      panelClass
    });
  }

  openSnackBarError(message: string, duration = 3000): void {
    this.message(message, ['error-dialog'], duration);
  }

  openSnackBarWarning(message: string, duration = 3000): void {
    this.message(message, ['warning-dialog'], duration);
  }

  openSnackBarSuccess(message: string, duration = 3000): void {
    this.message(message, ['success-dialog'], duration);
  }
}
