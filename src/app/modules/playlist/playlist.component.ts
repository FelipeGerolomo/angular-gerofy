import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  defaultPlaylistImage = 'assets/images/default-playlist.png';

  idPlaylist: string;
  playlist: any;

  constructor(private actRoute: ActivatedRoute, private spotifyService: SpotifyService) {
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

}
