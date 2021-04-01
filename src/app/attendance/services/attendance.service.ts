import { Injectable } from '@angular/core';
import { Attendance } from '../model/Attendance';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  // URL_ATTENDANCE = 'https://my-json-server.typicode.com/thiagolima08/planeerija/attendance/';
  // URL_ATTENDANCE =  'https://plannerrijabackend.herokuapp.com/attendance/
  URL_ATTENDANCE = 'http://localhost:3000/attendance/';

  constructor(private httpClient: HttpClient) {}

  getAttendances(): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(this.URL_ATTENDANCE);
  }

  getAttendance(id: number): Observable<Attendance> {
    return this.httpClient.get<Attendance>(`${this.URL_ATTENDANCE}${id}`);
  }

  addAttendance(attendance: Attendance): Observable<Attendance>{
    return this.httpClient.post<Attendance>(this.URL_ATTENDANCE, attendance);
  }

  updateAttendance(attendance: Attendance): Observable<Attendance>{
    return this.httpClient.put<Attendance>(`${this.URL_ATTENDANCE}${attendance.id}`, attendance);
  }

  deleteAttendance(id: number): Observable<any> {
    return this.httpClient.delete<Attendance>(`${this.URL_ATTENDANCE}${id}`);
  }

}
