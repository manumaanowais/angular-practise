import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4Component } from './route4.component';

describe('Route4Component', () => {
  let component: Route4Component;
  let fixture: ComponentFixture<Route4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
