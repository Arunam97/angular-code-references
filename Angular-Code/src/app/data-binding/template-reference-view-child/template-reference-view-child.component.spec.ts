import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceViewChildComponent } from './template-reference-view-child.component';

describe('TemplateReferenceViewChildComponent', () => {
  let component: TemplateReferenceViewChildComponent;
  let fixture: ComponentFixture<TemplateReferenceViewChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateReferenceViewChildComponent]
    });
    fixture = TestBed.createComponent(TemplateReferenceViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
