import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {UserModule} from './user/user.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddClientStackComponent } from './attendance/components/add-client-stack/add-client-stack.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StackAttendanceComponent } from './attendance/components/stack-attendance/stack-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientStackComponent,
    HomeComponent,
    StackAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
