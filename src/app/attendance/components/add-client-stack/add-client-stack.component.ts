import { Component, OnInit } from '@angular/core';
import {Attendance} from '../../model/Attendance';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AttendanceService} from '../../../attendance/services/attendance.service';

@Component({
  selector: 'app-add-client-stack',
  templateUrl: './add-client-stack.component.html',
  styleUrls: ['./add-client-stack.component.css']
})
export class AddClientStackComponent implements OnInit {
  attendanceNew: Attendance;
  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      tutorName: [null],
      petName: [null],
      petType: [null],
      description: [null]
    });
  }

  insertAttendance(): void {
    this.attendanceService.getAttendances().subscribe(attendances => this.form.value.id = attendances.length + 1);
    this.attendanceNew = this.form.value;
    this.attendanceService.addAttendance(this.attendanceNew).subscribe(
      attendance => console.log(attendance)
    );
  }

  onFormSubmit(): void {
    // alert(JSON.stringify(this.userNew, null, 2));
    alert('Cliente inserido na lista com sucesso!');
    this.form.reset();
  }
}
