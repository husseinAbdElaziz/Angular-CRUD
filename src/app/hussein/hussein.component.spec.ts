import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HusseinComponent } from './hussein.component';

describe('HusseinComponent', () => {
  let component: HusseinComponent;
  let fixture: ComponentFixture<HusseinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HusseinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HusseinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
