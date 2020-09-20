import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { CardPlaylistComponent } from 'src/app/components/cardplaylist/cardplaylist.component';

@NgModule({
  declarations: [
    MainComponent,
    CardPlaylistComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedComponentsModule,
  ]
})
export class MainModule { }
