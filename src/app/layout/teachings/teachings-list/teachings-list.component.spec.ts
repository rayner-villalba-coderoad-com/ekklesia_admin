import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingsListComponent } from './teachings-list.component';

describe('TeachingsListComponent', () => {
  let component: TeachingsListComponent;
  let fixture: ComponentFixture<TeachingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
