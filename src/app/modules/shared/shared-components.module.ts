import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatRippleModule
  ],
  imports: [
    MatButtonModule,
    MatRippleModule
  ]
})
export class SharedComponentsModule {
}
