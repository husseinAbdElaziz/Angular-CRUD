import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServingComponent } from './api-serving.component';

describe('ApiServingComponent', () => {
  let component: ApiServingComponent;
  let fixture: ComponentFixture<ApiServingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiServingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiServingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
