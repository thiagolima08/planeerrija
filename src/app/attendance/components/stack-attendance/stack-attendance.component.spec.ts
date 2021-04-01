import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackAttendanceComponent } from './stack-attendance.component';

describe('StackAttendanceComponent', () => {
  let component: StackAttendanceComponent;
  let fixture: ComponentFixture<StackAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
