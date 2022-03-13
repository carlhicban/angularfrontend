export interface IStudentCourse{
    id:number,
    tbl_student_id:number,
    tbl_course_id:number,
    cl_course_name:string,
    cl_firstname:string,
    cl_lastname:string
}

export interface IExpectedStudentCourse{
    id:number,
    tbl_student_id:number,
    tbl_course_id:number,
}