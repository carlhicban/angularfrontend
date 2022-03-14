import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { LoginComponent } from './login/login.component';
import { VimeoComponent } from './vimeo/vimeo.component';
import { VimeoPipe } from './pipe/vimeo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    CourseComponent,
    StudentCourseComponent,
    LoginComponent,
    VimeoComponent,
    VimeoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
