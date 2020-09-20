import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { CardMusicComponent } from 'src/app/components/card-music/card-music.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    CardMusicComponent,
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedComponentsModule
  ]
})
export class PlaylistModule { }
