import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryListDetailsComponent } from './pastry-list-details.component';

describe('PastryListDetailsComponent', () => {
  let component: PastryListDetailsComponent;
  let fixture: ComponentFixture<PastryListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
