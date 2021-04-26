import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Attendance} from '../../model/Attendance';
import {AttendanceService} from '../../services/attendance.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stack-attendance',
  templateUrl: './stack-attendance.component.html',
  styleUrls: ['./stack-attendance.component.css'],
  providers: [AttendanceService]
})
export class StackAttendanceComponent implements OnInit {
  static attendance;

  dataSource: MatTableDataSource<Attendance>;
  showColumns = ['id', 'tutor', 'pet', 'type', 'description', 'actions'];

  constructor(private attendanceService: AttendanceService, private route: Router) { }

  ngOnInit(): void {
    this.attendanceService.getAttendances().subscribe(
      attendances => this.dataSource = new MatTableDataSource(attendances)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  chamar(id: number): void{
    this.attendanceService.getAttendance(id).subscribe(a => StackAttendanceComponent.attendance = a);
    alert('Chamar Número:' + id);
  }

  excluir(id: number): void{
    // this.attendanceService.deleteAttendanceOnScreen(id);
    alert('Atendimento Excluído:' + id);
  }

}
