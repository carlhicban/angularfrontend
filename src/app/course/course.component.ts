import { Component, OnInit,TemplateRef } from '@angular/core';
import { CourseService } from '../service/course.service';
import { ICourse } from './course';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public courses =[] as any;
  public modalTitle = '';
  public btnTitle = '';
  public course = new FormControl('');
  public selectedCourse = <ICourse>{};
  modalRef?: BsModalRef;
  
  constructor(private service:CourseService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>,course?:ICourse) {
    if(course){
      this.modalTitle ='Edit Course'
      this.btnTitle = 'Update'
      this.selectedCourse = course;
      this.course.setValue(course.cl_course_name);
    }else{
      this.modalTitle = 'Add Course'
      this.btnTitle = 'Save'
      this.course.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }



  getList(){
    this.service.list()
      .subscribe(response=>this.courses = response)
  }

  delete(course:ICourse){
    this.service.delete(course)
      .subscribe(response=>this.getList());
  }

  save(){
    this.selectedCourse.cl_course_name = this.course.value;

    if(this.btnTitle == "Update"){
      this.service.update(this.selectedCourse)
        .subscribe(response=>{
          this.getList();
        })
    }else{
      this.service.add(this.selectedCourse)
        .subscribe(response=>{
          this.getList();
        })
    }
  }

  reset(){
    this.course.reset();
  }
}
