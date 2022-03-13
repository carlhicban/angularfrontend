import { Component, OnInit,TemplateRef  } from '@angular/core';
import { StudentService } from '../service/student.service';
import { IStudent } from './student';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students = [] as any;
  public modalTitle = '';
  public btnTitle = '';
  public firstname = new FormControl('');
  public lastname = new FormControl('');
  public selectedStudent = <IStudent>{};
  modalRef?: BsModalRef;
  
  constructor(private service:StudentService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>,student?:IStudent) {
    if(student){
      this.modalTitle = 'Edit Student';
      this.btnTitle = 'Update';
      this.selectedStudent = student;
      this.firstname.setValue(student.cl_firstname);
      this.lastname.setValue(student.cl_lastname);
     
    }else{
      this.modalTitle = 'Add Student';
      this.btnTitle = 'Save';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.list()
      .subscribe(response=>this.students = response);
  }

  delete(student:IStudent){
    this.service.delete(student)
      .subscribe(response=>this.getList());
  }

  save(){
    this.selectedStudent.cl_firstname = this.firstname.value;
    this.selectedStudent.cl_lastname = this.lastname.value;

    if(this.btnTitle == "Update"){
      // console.log(this.selectedStudent);
      this.service.update(this.selectedStudent)
        .subscribe(response=>{
          this.getList();
        })
    }else{
      this.service.add(this.selectedStudent)
        .subscribe(response=>{
          this.getList();
        })
    }
  }

  reset(){
    this.firstname.reset();
    this.lastname.reset();
  }
}
