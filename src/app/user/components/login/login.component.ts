import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  isLoginError = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null],
      password: [null]
    });
  }

  onFormSubmit(): void {
    const userEmail = this.form.value.email;
    const password = this.form.value.password;
    this.userService.userAuthentication(userEmail, password).subscribe((data: any) => {
        localStorage.setItem('userToken', data.token);
        this.router.navigate(['/add-client-stack']);
        this.form.reset();
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

  redirect(): void{
    this.router.navigate(['/sign-up']);
  }

}
