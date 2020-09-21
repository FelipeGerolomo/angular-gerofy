import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import _ from 'lodash';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import { DialogPlaylistFormComponent } from '../dialog-playlist-form/dialog-playlist-form.component';

@Component({
  selector: 'app-cardPlaylist',
  templateUrl: './cardplaylist.component.html',
  styleUrls: ['./cardplaylist.component.sass']
})
export class CardPlaylistComponent implements OnInit {
  defaultPlaylistImage = 'assets/images/default-playlist.png';

  @Input('playlist') playlist: any;
  @Input('index') index: any;

  constructor(
    private router: Router,
    private spotifyService: SpotifyService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getPlayListImage() {
    return this.playlist.images.length > 0 ? _.head(this.playlist.images).url : this.defaultPlaylistImage;
  }

  goToPlaylist() {
    this.router.navigate(['/playlist', this.playlist.id]);
  }

  updatePlaylistDetails(body) {
    this.spotifyService.updatePlaylist(body, this.playlist.id).toPromise()
      .then(() => { 
        this.playlist.name = body.name;
        this.playlist.description = body.description;
        this.playlist.public = body.public;
      });
  }

  openDialogPlaylist(): void {
    const dialogRef = this.dialog.open(DialogPlaylistFormComponent, {
      width: '600px',
      data: this.playlist
    });

    dialogRef.afterClosed().subscribe(body => {
      if (!body) return;
      this.updatePlaylistDetails(body);
    });
  }

}
