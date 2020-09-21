import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { DialogMusicSearchComponent } from 'src/app/components/dialog-music-search/dialog-music-search.component';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  defaultPlaylistImage = 'assets/images/default-playlist.png';

  idPlaylist: string;
  playlist: any;

  constructor(private actRoute: ActivatedRoute, private spotifyService: SpotifyService, public dialog: MatDialog) {
    this.idPlaylist = this.actRoute.snapshot.params.id;
    this.getPlaylist();
  }

  ngOnInit(): void {
  }

  getPlaylist() {
    this.spotifyService.getPlaylist(this.idPlaylist)
      .toPromise().then((res) => {
        this.playlist = res;
      })
  }

  getPlayListImage() {
    return this.playlist && this.playlist.images.length > 0 ? _.head(this.playlist.images).url : this.defaultPlaylistImage;
  }

  openDialogMusics() {
    const dialogRef = this.dialog.open(DialogMusicSearchComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
    });
  }

}
