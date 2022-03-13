import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url = 'http://127.0.0.1:8000/api/student';
  constructor(private http:HttpClient) { }

  list():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url);
  }

  add(student:IStudent):Observable<IStudent>{
    return this.http.post<IStudent>(this._url,student);
  }

  update(student:IStudent):Observable<IStudent>{
    return this.http.put<IStudent>(`${this._url}/${student.id}`,student);
  }

  delete(student:IStudent):Observable<boolean>{
    return this.http.delete<boolean>(`${this._url}/${student.id}`);
  }
}
