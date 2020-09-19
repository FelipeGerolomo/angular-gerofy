import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { 
    this.getUser();
  }

  ngOnInit(): void {
  }

  getUser() {
    this.spotifyService.getUser()
    .toPromise().then((res: any) => console.log(res))
  }

}
