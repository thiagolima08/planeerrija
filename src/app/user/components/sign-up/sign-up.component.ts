import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userNew: User;
  form: FormGroup;
  hide = true;
  Error = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      email: [null],
      password: [null]
    });
  }

  onFormSubmit(): void {
    this.userNew = this.form.value;
    this.userService.registerUser(this.userNew).subscribe(
      user => {
        console.log(user);
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['']);
        this.form.reset();
      },
    (err: HttpErrorResponse) => {
        this.Error = true;
      });
  }
}
