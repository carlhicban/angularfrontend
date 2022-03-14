import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVimeo } from '../vimeo/vimeo';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {
  private _url = "https://vimeo.com/api/v2/user53171575/videos.json";

  constructor(private http:HttpClient) { }

  get():Observable<IVimeo[]>{
    return this.http.get<IVimeo[]>(this._url);
  }
}
