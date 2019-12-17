import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayingNumbersComponent } from './praying-numbers.component';

describe('PrayingNumbersComponent', () => {
  let component: PrayingNumbersComponent;
  let fixture: ComponentFixture<PrayingNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayingNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayingNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
