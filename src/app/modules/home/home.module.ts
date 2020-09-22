import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardPlaylistComponent } from 'src/app/components/card-playlist/card-playlist.component';
import { SharedComponentsModule } from '../shared/shared-components.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardPlaylistComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ]
})
export class HomeModule { }
