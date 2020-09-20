import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private credentialsSubject: BehaviorSubject<any>;
  public credentials: Observable<any>;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.getHashParams();
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getAuth() {
    const scopes = [
      'user-read-currently-playing',
      'user-read-playback-state',
      'user-library-read',
      'user-read-private',
      'user-read-email',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
    ];
    return `${environment.spotify_url}authorize?client_id=${environment.client_id}&redirect_uri=${encodeURIComponent(environment.redirect_url)}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
  }

  authentication() {
    window.location.href = this.getAuth();
  }

  public get currentCredentials(): any {
    return this.credentialsSubject.value;
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  getHashParams(): void {
    let hash = window.location.hash.substr(1);
    if (hash == "") return null;
    let result = hash.split('&').reduce(function (result, item) {
      let parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});
    this.storeCredentials(result);
  }

  storeCredentials(result) {
    localStorage.setItem('credentials', JSON.stringify(result));
    this.credentialsSubject = new BehaviorSubject<any>(result);
    this.credentials = this.credentialsSubject.asObservable();
    this.getUser();
  }

  getUser() {
    return this.http.get(environment.spotify_api + 'me')
      .toPromise().then((user: any) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject = new BehaviorSubject<any>(JSON.stringify(user));
        this.currentUser = this.currentUserSubject.asObservable();
        this.router.navigate(['/main']);
      });
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.currentCredentials.next(null);
    this.router.navigate(['/auth']);
  }
}
