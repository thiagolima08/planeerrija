import {Component, OnInit} from '@angular/core';
import {Attendance} from '../attendance/model/Attendance';
import {StackAttendanceComponent} from '../attendance/components/stack-attendance/stack-attendance.component';

@Component({
  selector: 'app-exhibition-screen',
  templateUrl: './exhibition-screen.component.html',
  styleUrls: ['./exhibition-screen.component.css'],
  providers: [StackAttendanceComponent]
})
export class ExhibitionScreenComponent implements OnInit {
  attendanceNow: Attendance;
  attendancePrevious: Attendance[];

  constructor() { }

  ngOnInit(): void {
     const {next, previous} = StackAttendanceComponent.attendance;
     this.attendanceNow = next;
     this.attendancePrevious = previous;
    }

}
