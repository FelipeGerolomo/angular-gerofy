import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
@Component({
  selector: 'app-dialog-music-search',
  templateUrl: './dialog-music-search.component.html',
  styleUrls: ['./dialog-music-search.component.sass']
})
export class DialogMusicSearchComponent implements OnInit {

  formGroup = new FormGroup({
    search: new FormControl(null),
  });

  musics: any;

  selectedSongs: Array<any> = [];

  constructor(
    public dialogRef: MatDialogRef<DialogMusicSearchComponent>,
    private spotifyService: SpotifyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedSongs = data.songs;
  }

  searchTrack(search) {
    this.spotifyService.searchTrack(search).toPromise().then((search: any) => this.musics = search.tracks.items);
  }

  ngOnInit(): void {
    this.formGroup.get('search').valueChanges
      .subscribe((search: string) => {
        if (search && search.length > 2) this.searchTrack(search);
      });
  }

  isSelected = (song) => _.some(this.selectedSongs, { uri: song.uri });

  onSelectSong(song) {
    this.spotifyService.addSongsPlaylist(song.uri, this.data.playlist)
      .toPromise().then(() => this.selectedSongs.push(song));
  }

}
