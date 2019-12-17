import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPageComponent } from './teaching-page.component';

describe('TeachingPageComponent', () => {
  let component: TeachingPageComponent;
  let fixture: ComponentFixture<TeachingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
