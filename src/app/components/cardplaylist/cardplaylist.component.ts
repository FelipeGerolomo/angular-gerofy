import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-cardPlaylist',
  templateUrl: './cardplaylist.component.html',
  styleUrls: ['./cardplaylist.component.sass']
})
export class CardPlaylistComponent implements OnInit {
  defaultPlaylistImage = 'assets/images/default-playlist.png';

  @Input('playlist') playlist: any;
  @Input('index') index: any;

  constructor() { }

  ngOnInit(): void {
  }

  getPlayListImage() {
    return this.playlist.images.length > 0 ? _.head(this.playlist.images).url : this.defaultPlaylistImage;
  }

}
