import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { DialogMusicSearchComponent } from 'src/app/components/dialog-music-search/dialog-music-search.component';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 425px)');
  defaultPlaylistImage = 'assets/images/default-playlist.png';

  idPlaylist: string;
  playlist: any;

  constructor(
    private actRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private snackBarService: SnackBarService
  ) {
    this.idPlaylist = this.actRoute.snapshot.params.id;
    this.getPlaylist();
  }

  ngOnInit(): void {
  }

  getPlaylist() {
    this.spotifyService.getPlaylist(this.idPlaylist)
      .toPromise().then((playlist) => {
        this.playlist = playlist;
      })
  }

  getPlayListImage() {
    return this.playlist && this.playlist.images.length > 0 ? _.head(this.playlist.images).url : this.defaultPlaylistImage;
  }

  onRemoveSong(song) {
    const body = { tracks: [song] };
    this.spotifyService.removeSongsPlaylist(body, this.idPlaylist).toPromise()
    .then(() => this.snackBarService.openSnackBarSuccess('🤩 ' + 'Successfully removed Song'))
    .then(() => this.getPlaylist());
  }

  openDialogMusics() {
    const dialogRef = this.dialog.open(DialogMusicSearchComponent, {
      minWidth: this.isSmallScreen ? '100%' : '600px',
      maxWidth: this.isSmallScreen ? '100%' : '600px',
      maxHeight: '600px',
      data: {
        songs: this.playlist.tracks.items.map((item) => { return item.track }),
        playlist: this.idPlaylist
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPlaylist();
    });
  }

}
