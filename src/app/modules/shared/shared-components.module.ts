import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ImageFallbackDirective } from 'src/app/directives/image-fallback.directive';

@NgModule({
  declarations: [
    ImageFallbackDirective
  ],
  exports: [
    MatButtonModule,
    MatRippleModule,
    ImageFallbackDirective
  ],
  imports: [
    MatButtonModule,
    MatRippleModule,
  ]
})
export class SharedComponentsModule {
}
