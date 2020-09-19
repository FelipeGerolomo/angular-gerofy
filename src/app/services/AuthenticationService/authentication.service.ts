import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpotifyService } from '../spotifyService/spotify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private credentialsSubject: BehaviorSubject<any>;
  public credentials: Observable<any>;

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.getHashParams();
    this.credentialsSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('credentials')));
    this.credentials = this.credentialsSubject.asObservable();
  }

  authentication() {
    window.location.href = this.spotifyService.getAuth();
  }

  public get currentCredentials(): any {
    return this.credentialsSubject.value;
  }

  getHashParams() {
    let hash = window.location.hash.substr(1);
    if (hash == "") return null;
    let result = hash.split('&').reduce(function (result, item) {
      let parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});
    localStorage.setItem('credentials', JSON.stringify(result));
    this.router.navigate(['/main']);
    return result;
  }
}
