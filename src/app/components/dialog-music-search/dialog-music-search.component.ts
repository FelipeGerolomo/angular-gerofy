import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';

@Component({
  selector: 'app-dialog-music-search',
  templateUrl: './dialog-music-search.component.html',
  styleUrls: ['./dialog-music-search.component.sass']
})
export class DialogMusicSearchComponent implements OnInit {

  formGroup = new FormGroup({
    search: new FormControl(null),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogMusicSearchComponent>,
    private spotifyService: SpotifyService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  searchTrack(search) {
    this.spotifyService.searchTrack(search).toPromise().then((res) => console.log(res));
  }

  ngOnInit(): void {
    this.formGroup.get('search').valueChanges
      .subscribe((search: string) => {
        if (search && search.length > 4) this.searchTrack(search);
      });
  }

}
