import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDirectivesComponent } from './basic-directives.component';

describe('BasicDirectivesComponent', () => {
  let component: BasicDirectivesComponent;
  let fixture: ComponentFixture<BasicDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDirectivesComponent]
    });
    fixture = TestBed.createComponent(BasicDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
