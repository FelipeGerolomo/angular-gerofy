import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  user: any;
  userImage: any;
  defaultUserImage = 'assets/images/default-user.svg';
  defaultPlaylistImage = 'assets/images/default-playlist.svg';
  playlists: Array<any>;

  constructor(
    private authenticationService: AuthenticationService,
    private spotifyService: SpotifyService
  ) {
    this.getUser();
    this.getPlaylists();
  }

  ngOnInit(): void {

  }

  getUser() {
    this.user = this.authenticationService.currentUserValue;
    this.userImage = _.head(this.user.images);
  }

  getPlaylists() {
    this.spotifyService.getPlaylists()
      .toPromise().then((playlists: any) => {
        this.playlists = playlists.items;
        console.log(this.playlists);
      });
  }

}
