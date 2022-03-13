import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentCourse,IExpectedStudentCourse } from '../student-course/student-course';
import { ICourse } from '../course/course';
import { IStudent } from '../student/student';
@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  private _url = 'http://127.0.0.1:8000/api/student-course';
  private _course_url = 'http://127.0.0.1:8000/api/course';
  private _student_url = 'http://127.0.0.1:8000/api/student';
  constructor(private http:HttpClient) { }

  list():Observable<IStudentCourse[]>{
    return this.http.get<IStudentCourse[]>(this._url);
  }

  courseList():Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this._course_url);
  }

  studentList():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._student_url);
  }

  add(studentCourse:IExpectedStudentCourse):Observable<IExpectedStudentCourse>{
    return this.http.post<IExpectedStudentCourse>(this._url,studentCourse);
  }

  update(studentCourse:IExpectedStudentCourse):Observable<IExpectedStudentCourse>{
    return this.http.put<IExpectedStudentCourse>(`${this._url}/${studentCourse.id}`,studentCourse);
  }

  delete(studentCourse:IExpectedStudentCourse):Observable<boolean>{
    return this.http.delete<boolean>(`${this._url}/${studentCourse.id}`);
  }
}
