import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {UserModule} from './user/user.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor';
import {AddClientStackComponent} from './attendance/components/add-client-stack/add-client-stack.component';
import {StackAttendanceComponent} from './attendance/components/stack-attendance/stack-attendance.component';
import {ExhibitionScreenComponent} from './exhibition-screen/exhibition-screen.component';
import { HistoryAttendanceComponent } from './attendance/components/history-attendance/history-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    AddClientStackComponent,
    StackAttendanceComponent,
    ExhibitionScreenComponent,
    HistoryAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  exports: [
    MenuBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
