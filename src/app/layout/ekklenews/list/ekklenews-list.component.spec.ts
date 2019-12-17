import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkklenewsListComponent } from './ekklenews-list.component';

describe('EkklenewsListComponent', () => {
  let component: EkklenewsListComponent;
  let fixture: ComponentFixture<EkklenewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkklenewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkklenewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
