import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';
import _ from 'lodash';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  user: any;
  userImage: any;
  defaultUserImage = 'assets/images/default-user.svg';

  constructor(private authenticationService: AuthenticationService) {
    this.getUser();
  }

  ngOnInit(): void {
    
  }

  getUser() {
    this.user = this.authenticationService.currentUserValue;
    this.userImage = _.head(this.user.images);
  }

}
