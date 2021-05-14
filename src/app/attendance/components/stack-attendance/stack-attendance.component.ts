import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Attendance} from '../../model/Attendance';
import {AttendanceService} from '../../services/attendance.service';

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

  constructor(private attendanceService: AttendanceService) { }

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
    this.attendanceService.deleteAttendance(id).subscribe();
    this.dataSource = new MatTableDataSource(this.dataSource.filteredData.filter(i => Number(i.id) !== id));
    alert('Atendimento Excluído:' + id);
  }

}
