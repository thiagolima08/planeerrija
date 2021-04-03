import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL_USERS = 'https://my-json-server.typicode.com/thiagolima08/planeerrija/users/';
  URL_USERS =  'https://plannerrijabackend.herokuapp.com/employee';
  // URL_USERS = 'http://localhost:3000/users/';

  constructor(private httpClient: HttpClient) {}

  registerUser(user: User): Observable<User>  {
    const body: User = {
      name: user.name,
      password: user.password,
      email: user.email
    };
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.httpClient.post<User>(this.URL_USERS, body, {headers : reqHeader});
  }

  userAuthentication(userEmail, password): Observable<User>  {
    const data = 'useremail=' + userEmail + '&password=' + password + '&grant_type=password';
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.httpClient.post<User>(this.URL_USERS, data, { headers: reqHeader });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.URL_USERS}${id}`);
  }

  updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.URL_USERS}${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<User>(`${this.URL_USERS}${id}`);
  }

}
