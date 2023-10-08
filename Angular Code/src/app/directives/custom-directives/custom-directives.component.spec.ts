import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesComponent } from './custom-directives.component';

describe('CustomDirectivesComponent', () => {
  let component: CustomDirectivesComponent;
  let fixture: ComponentFixture<CustomDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDirectivesComponent]
    });
    fixture = TestBed.createComponent(CustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
