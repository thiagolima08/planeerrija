import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Attendance} from '../../model/Attendance';
import {AttendanceService} from '../../services/attendance.service';

@Component({
  selector: 'app-stack-attendance',
  templateUrl: './stack-attendance.component.html',
  styleUrls: ['./stack-attendance.component.css']
})
export class StackAttendanceComponent implements OnInit {

  dataSource: MatTableDataSource<Attendance>;
  showColumns = ['id', 'tutor', 'pet', 'type', 'description'];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.attendanceService.getAttendances().subscribe(
      attendances => this.dataSource = new MatTableDataSource(attendances)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
