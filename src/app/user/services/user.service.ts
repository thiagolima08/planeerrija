import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_USERS = 'https://my-json-server.typicode.com/thiagolima08/planeerrija/users/';
  // URL_USERS =  'https://plannerrijabackend.herokuapp.com/users/'
  // URL_USERS = 'http://localhost:3000/users/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.URL_USERS}${id}`);
  }

  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.URL_USERS, user);
  }

  updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.URL_USERS}${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<User>(`${this.URL_USERS}${id}`);
  }

}
