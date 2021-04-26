import { Injectable, EventEmitter } from '@angular/core';
import { Attendance } from '../model/Attendance';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  // URL_ATTENDANCE = 'https://my-json-server.typicode.com/thiagolima08/planeerrija/attendance/';
   URL_ATTENDANCE =  'https://plannerrijabackend.herokuapp.com/appointment';
  // URL_ATTENDANCE = 'http://localhost:3000/attendance/';

  constructor(private httpClient: HttpClient) {}

  getAttendances(): Observable<Attendance[]> {
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.get<Attendance[]>(this.URL_ATTENDANCE, { headers: reqHeader });
  }

  getAttendance(id: number): Observable<Attendance> {
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.get<Attendance>(`${this.URL_ATTENDANCE}/next/${id}`, { headers: reqHeader });
  }

  getPreviousAttendance(): Observable<Attendance[]> {
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.get<Attendance[]>(`${this.URL_ATTENDANCE}/previous`, { headers: reqHeader });
  }

  addAttendance(attendance: Attendance): Observable<Attendance>{
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.post<Attendance>(this.URL_ATTENDANCE, attendance, { headers: reqHeader });
  }

  updateAttendance(attendance: Attendance): Observable<Attendance>{
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.put<Attendance>(`${this.URL_ATTENDANCE}${attendance.id}`, attendance, { headers: reqHeader });
  }

  deleteAttendance(id: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const reqHeader = new HttpHeaders({Authorization: `Bearer: ${token}` });
    return this.httpClient.delete<Attendance>(`${this.URL_ATTENDANCE}${id}`, { headers: reqHeader });
  }

}
