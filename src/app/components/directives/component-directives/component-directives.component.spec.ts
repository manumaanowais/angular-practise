import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirectivesComponent } from './component-directives.component';

describe('ComponentDirectivesComponent', () => {
  let component: ComponentDirectivesComponent;
  let fixture: ComponentFixture<ComponentDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
