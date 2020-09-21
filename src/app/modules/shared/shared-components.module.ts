import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ImageFallbackDirective } from 'src/app/directives/image-fallback.directive';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DialogPlaylistFormComponent } from 'src/app/components/dialog-playlist-form/dialog-playlist-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ImageFallbackDirective,
    DialogPlaylistFormComponent
  ],
  entryComponents: [
    DialogPlaylistFormComponent
  ],
  exports: [
    MatButtonModule,
    MatRippleModule,
    ImageFallbackDirective,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedComponentsModule {
}
