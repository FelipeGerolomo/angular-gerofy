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

  getPlaylist(id) {
    const endpoint = `users/${this.authenticationService.currentUserValue.id}/playlists/${id}`;
    return this.http.get(environment.spotify_api + endpoint);
  }

  createPlaylist(body) {
    const endpoint = `users/${this.authenticationService.currentUserValue.id}/playlists`;
    return this.http.post(environment.spotify_api + endpoint, body);
  }

  updatePlaylist(body, id) {
    const endpoint = `playlists/${id}`;
    return this.http.put(environment.spotify_api + endpoint, body);
  }

  searchTrack(search) {
    const endpoint = `search?q=${encodeURI(search)}&type=track`;
    return this.http.get(environment.spotify_api + endpoint);
  }
}
