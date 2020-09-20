import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getPlayListImage() {
    return this.playlist.images.length > 0 ? _.head(this.playlist.images).url : this.defaultPlaylistImage;
  }

  goToPlaylist() {
    this.router.navigate(['/playlist',this.playlist.id]);
  }

}
