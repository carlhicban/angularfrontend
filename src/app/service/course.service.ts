import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _url = 'http://127.0.0.1:8000/api/course';
  constructor(private http:HttpClient) { }

  list():Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this._url);
  }

  add(course:ICourse):Observable<ICourse>{
    return this.http.post<ICourse>(this._url,course);
  }

  update(course:ICourse):Observable<ICourse>{
    return this.http.put<ICourse>(`${this._url}/${course.id}`,course);
  }

  delete(course:ICourse):Observable<boolean>{
    return this.http.delete<boolean>(`${this._url}/${course.id}`);
  }
}
