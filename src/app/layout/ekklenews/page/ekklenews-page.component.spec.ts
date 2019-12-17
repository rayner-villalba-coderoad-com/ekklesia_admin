import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkklenewsPageComponent } from './ekklenews-page.component';

describe('EkklenewsPageComponent', () => {
  let component: EkklenewsPageComponent;
  let fixture: ComponentFixture<EkklenewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkklenewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkklenewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
