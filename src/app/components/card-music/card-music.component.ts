import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-music',
  templateUrl: './card-music.component.html',
  styleUrls: ['./card-music.component.sass']
})
export class CardMusicComponent implements OnInit {
  defaultMusicImage = 'assets/images/default-music.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
