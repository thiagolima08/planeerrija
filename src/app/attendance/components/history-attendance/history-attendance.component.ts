import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Attendance} from '../../model/Attendance';
import {AttendanceService} from '../../services/attendance.service';

@Component({
  selector: 'app-history-attendance',
  templateUrl: './history-attendance.component.html',
  styleUrls: ['./history-attendance.component.css']
})
export class HistoryAttendanceComponent implements OnInit {

  dataSource: MatTableDataSource<Attendance>;
  showColumns = ['id', 'tutor', 'pet', 'type', 'description', 'date', 'arrived_datetime', 'attendance_datetime'];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.attendanceService.getAttendancesHistory().subscribe(
      attendances => this.dataSource = new MatTableDataSource(attendances)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

}
