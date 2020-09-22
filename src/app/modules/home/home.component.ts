import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogPlaylistFormComponent } from 'src/app/components/dialog-playlist-form/dialog-playlist-form.component';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private user: any;
  private userImage: any;
  private defaultUserImage = 'assets/images/default-user.svg';
  public playlists: Array<any>;

  constructor(
    private authenticationService: AuthenticationService,
    private spotifyService: SpotifyService,
    public dialog: MatDialog,
    private snackBarService: SnackBarService
  ) {
    this.getCurrentUser();
    this.getPlaylists();
  }

  ngOnInit(): void {

  }

  getUser() {
    return this.user;
  }

  getCurrentUser() {
    this.user = this.authenticationService.currentUserValue;
    this.userImage = _.head(this.user.images);
  }

  openDialogPlaylist(): void {
    const dialogRef = this.dialog.open(DialogPlaylistFormComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.createPlaylist(result);
    });
  }

  createPlaylist(body) {
    this.spotifyService.createPlaylist(body).toPromise()
      .then(() => this.snackBarService.openSnackBarSuccess('🤩 ' + 'Successfully created Playlist'))
      .then(() => this.getPlaylists())
  }

  getPlaylists() {
    this.spotifyService.getPlaylists()
      .toPromise().then((playlists: any) => {
        this.playlists = playlists.items;
      });
  }

  getUserImage() {
    return this.userImage.url || this.defaultUserImage;
  }

}
