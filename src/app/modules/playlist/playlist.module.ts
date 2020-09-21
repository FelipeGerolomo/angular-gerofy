import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { CardMusicComponent } from 'src/app/components/card-music/card-music.component';
import { DialogMusicSearchComponent } from 'src/app/components/dialog-music-search/dialog-music-search.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    CardMusicComponent,
    DialogMusicSearchComponent
  ],
  entryComponents: [
    DialogMusicSearchComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedComponentsModule
  ]
})
export class PlaylistModule { }
