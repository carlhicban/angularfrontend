import { Component, OnInit } from '@angular/core';
import { VimeoService } from '../service/vimeo.service';
 
@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css']
})
export class VimeoComponent implements OnInit {
  public videos = [] as any;
  constructor(private service:VimeoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.service.get()
      .subscribe(response=>this.videos = response);
  }
 
}
