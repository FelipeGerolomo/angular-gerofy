import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

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

  getUser() {
    return this.http.get(environment.spotify_api + 'me');
  }
}
