import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRoute1Component } from './load-route1.component';

describe('LoadRoute1Component', () => {
  let component: LoadRoute1Component;
  let fixture: ComponentFixture<LoadRoute1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadRoute1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
