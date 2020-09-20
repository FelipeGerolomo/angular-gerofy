import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  defaultPlaylistImage = 'assets/images/default-playlist.png';
  constructor() { }

  ngOnInit(): void {
  }

}
