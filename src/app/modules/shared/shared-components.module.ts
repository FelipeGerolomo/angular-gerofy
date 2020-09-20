import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ImageFallbackDirective } from 'src/app/directives/image-fallback.directive';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ImageFallbackDirective
  ],
  exports: [
    MatButtonModule,
    MatRippleModule,
    ImageFallbackDirective,
    MatMenuModule,
    MatIconModule,
  ],
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class SharedComponentsModule {
}
