import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataBindingComponent } from './basic-data-binding.component';

describe('BasicDataBindingComponent', () => {
  let component: BasicDataBindingComponent;
  let fixture: ComponentFixture<BasicDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDataBindingComponent]
    });
    fixture = TestBed.createComponent(BasicDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
