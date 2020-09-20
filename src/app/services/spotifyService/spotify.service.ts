import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../AuthenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getUser() {
    return this.http.get(environment.spotify_api + 'me');
  }

  getPlaylists() {
    const endpoint = `users/${this.authenticationService.currentUserValue.id}/playlists`;
    return this.http.get(environment.spotify_api + endpoint);
  }
}
