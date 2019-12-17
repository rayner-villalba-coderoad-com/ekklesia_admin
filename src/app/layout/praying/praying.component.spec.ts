import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayingComponent } from './praying.component';

describe('PrayingComponent', () => {
  let component: PrayingComponent;
  let fixture: ComponentFixture<PrayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
