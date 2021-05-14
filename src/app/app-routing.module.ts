import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './user/components/sign-up/sign-up.component';
import {AddClientStackComponent} from './attendance/components/add-client-stack/add-client-stack.component';
import {HomeComponent} from './home/home.component';
import {StackAttendanceComponent} from './attendance/components/stack-attendance/stack-attendance.component';
import {LoginComponent} from './user/components/login/login.component';
import {ExhibitionScreenComponent} from './exhibition-screen/exhibition-screen.component';
import {HistoryAttendanceComponent} from './attendance/components/history-attendance/history-attendance.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-client-stack', component: AddClientStackComponent},
  { path: 'stack-attendance', component: StackAttendanceComponent},
  { path: 'exhibition-screen', component: ExhibitionScreenComponent},
  { path: 'history-attendance', component: HistoryAttendanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
