import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogPlaylistFormComponent } from 'src/app/components/dialog-playlist-form/dialog-playlist-form.component';
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
    private spotifyService: SpotifyService,
    public dialog: MatDialog
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

  openDialogPlaylist(): void {
    const dialogRef = this.dialog.open(DialogPlaylistFormComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.createPlaylist(result); 
    });
  }

  createPlaylist(body) {
    this.spotifyService.createPlaylist(body).toPromise().then(() => this.getPlaylists());
  }

  getPlaylists() {
    this.spotifyService.getPlaylists()
      .toPromise().then((playlists: any) => {
        this.playlists = playlists.items;
      });
  }

}
