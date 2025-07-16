import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRoute2Component } from './load-route2.component';

describe('LoadRoute2Component', () => {
  let component: LoadRoute2Component;
  let fixture: ComponentFixture<LoadRoute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadRoute2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
