import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplaylistComponent } from './cardplaylist.component';

describe('CardplaylistComponent', () => {
  let component: CardplaylistComponent;
  let fixture: ComponentFixture<CardplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
