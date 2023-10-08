import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableViewChildComponent } from './template-variable-view-child.component';

describe('TemplateVariableViewChildComponent', () => {
  let component: TemplateVariableViewChildComponent;
  let fixture: ComponentFixture<TemplateVariableViewChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVariableViewChildComponent]
    });
    fixture = TestBed.createComponent(TemplateVariableViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
