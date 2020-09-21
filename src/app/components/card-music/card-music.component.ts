import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input('selectMode') selectMode = false;
  @Input('isSelected') isSelected = false;
  @Output('onSelectSong') onSelectSong = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.onSelectSong.emit
  }

  getMusicImage() {
    return _.head(this.music.album.images).url;
  }

  getArtist() {
    return _.head(this.music.artists).name;
  }

}
