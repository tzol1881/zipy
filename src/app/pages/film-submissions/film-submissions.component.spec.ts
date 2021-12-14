import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSubmissionsComponent } from './film-submissions.component';

describe('FilmSubmissionsComponent', () => {
  let component: FilmSubmissionsComponent;
  let fixture: ComponentFixture<FilmSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
