import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userNew: User;
  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      email: [null],
      password: [null],
      birthday: [null]
    });
  }

  insertUser(): void {
    this.userService.getUsers().subscribe(users => this.form.value.id = users.length + 1);
    this.userNew = this.form.value;
    this.userNew.birthday = this.form.value.birthday.toLocaleDateString('pt-BR');
    this.userService.addUser(this.userNew).subscribe(
        user => console.log(user)
      );
  }

  onFormSubmit(): void {
    alert(JSON.stringify(this.userNew, null, 2));
    this.form.reset();
  }
}
