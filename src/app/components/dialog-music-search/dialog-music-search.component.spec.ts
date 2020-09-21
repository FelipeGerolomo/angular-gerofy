import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMusicSearchComponent } from './dialog-music-search.component';

describe('DialogMusicSearchComponent', () => {
  let component: DialogMusicSearchComponent;
  let fixture: ComponentFixture<DialogMusicSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMusicSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMusicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
