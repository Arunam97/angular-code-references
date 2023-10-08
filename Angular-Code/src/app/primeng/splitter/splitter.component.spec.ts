import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitterComponent } from './splitter.component';

describe('SplitterComponent', () => {
  let component: SplitterComponent;
  let fixture: ComponentFixture<SplitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitterComponent]
    });
    fixture = TestBed.createComponent(SplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
