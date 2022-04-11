import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueDetailsComponent } from './colleague-details.component';

describe('ColleagueDetailsComponent', () => {
  let component: ColleagueDetailsComponent;
  let fixture: ComponentFixture<ColleagueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleagueDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
