import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './user/components/sign-up/sign-up.component';
import {AddClientStackComponent} from './attendance/components/add-client-stack/add-client-stack.component';
import {HomeComponent} from './home/home.component';
import {StackAttendanceComponent} from './attendance/components/stack-attendance/stack-attendance.component';
import {LoginComponent} from './user/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-client-stack', component: AddClientStackComponent},
  { path: 'stack-attendance', component: StackAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
