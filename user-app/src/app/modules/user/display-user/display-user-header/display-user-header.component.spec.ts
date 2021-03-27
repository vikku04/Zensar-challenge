import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserHeaderComponent } from './display-user-header.component';

describe('DisplayUserHeaderComponent', () => {
  let component: DisplayUserHeaderComponent;
  let fixture: ComponentFixture<DisplayUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayUserHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
