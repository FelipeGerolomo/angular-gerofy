import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.sass']
})
export class CardMusicComponent implements OnInit {
  defaultMusicImage = 'assets/images/default-music.svg';

  @Input('music') music: any;
  @Input('index') index: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMusicImage() {
    return _.head(this.music.track.album.images).url;
    //return this.music.track.album.images > 0 ? _.head(this.music.track.album.images).url : this.defaultMusicImage;
  }

  getArtist() {
    return _.head(this.music.track.artists).name;
  }

}
