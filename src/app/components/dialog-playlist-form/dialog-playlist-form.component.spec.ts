import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlaylistFormComponent } from './dialog-playlist-form.component';

describe('DialogPlaylistFormComponent', () => {
  let component: DialogPlaylistFormComponent;
  let fixture: ComponentFixture<DialogPlaylistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPlaylistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlaylistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
