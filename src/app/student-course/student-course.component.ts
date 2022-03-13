import { Component, OnInit,TemplateRef } from '@angular/core';
import { StudentCourseService } from '../service/student-course.service';
import { IStudentCourse,IExpectedStudentCourse } from './student-course';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {
  public studentCourses =[] as any;
  public courses =[] as any;
  public students =[] as any;
  public modalTitle = '';
  public btnTitle = '';
  public isEdit = false;
  public studentName = '';
  public course = new FormControl('');
  public student = new FormControl('');
  public studentVal = new FormControl('');
   
  public selectedStudentCourse = <IStudentCourse>{};
  modalRef?: BsModalRef;

  constructor(private service:StudentCourseService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>,studentCourse?:IStudentCourse) {
    if(studentCourse){
      this.modalTitle ='Edit Student Course'
      this.btnTitle = 'Update'
      this.selectedStudentCourse = studentCourse;
      this.studentName = this.students.find((e: { id: number; }) => e.id == studentCourse.tbl_student_id).cl_firstname +' '+ this.students.find((e: { id: number; }) => e.id == studentCourse.tbl_student_id).cl_lastname;
      this.student.setValue(studentCourse.tbl_student_id);
      this.isEdit = true;
    }else{
      this.modalTitle = 'Add Course'
      this.btnTitle = 'Save'
      this.isEdit = false;
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
    this.getCourse();
    this.getStudent();
  }



  getList(){
    this.service.list()
      .subscribe(response=>this.studentCourses = response)
  }

  getCourse(){
    this.service.courseList()
      .subscribe(response=>this.courses = response);
  }

  getStudent(){
    this.service.studentList()
      .subscribe(response=>this.students = response);
  }

  delete(studentCourse:IStudentCourse){
    this.service.delete(studentCourse)
      .subscribe(response=>this.getList());
  }

  save(){
    this.selectedStudentCourse.tbl_student_id = Number(this.student.value);
    this.selectedStudentCourse.tbl_course_id = Number(this.course.value);

    if(this.btnTitle == "Update"){
      // console.log(this.selectedStudentCourse);
      this.service.update(this.selectedStudentCourse)
        .subscribe(response=>{
          this.getList();
        })
    }else{
      this.service.add(this.selectedStudentCourse)
        .subscribe(response=>{
          this.getList();
        })
    }
  }

  reset(){
    this.student.reset();
    this.course.reset();
  }

}
