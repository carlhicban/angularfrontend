import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {StudentCourseComponent} from './student-course/student-course.component';
import { LoginComponent } from './login/login.component';
import { VimeoComponent } from './vimeo/vimeo.component';
const routes:Routes=[
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'student-course',
    component:StudentCourseComponent
  },
  {
    path:'vimeo',
    component:VimeoComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
