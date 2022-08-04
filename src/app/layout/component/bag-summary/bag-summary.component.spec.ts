import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagSummaryComponent } from './bag-summary.component';

describe('BagSummaryComponent', () => {
  let component: BagSummaryComponent;
  let fixture: ComponentFixture<BagSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
