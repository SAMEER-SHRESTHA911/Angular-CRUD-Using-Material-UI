import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  constructor(
    private _fb:FormBuilder,
    private _empService :  EmployeeService,
    private _dialogRef : DialogRef <EmpAddEditComponent>
  ){
    this.empForm = this._fb.group({
      firstName : '',
      lastName : '',
      email : '',
      dob : '',
      gender : '',
      education : '',
      company : '',
      experience : '',
      package : ''
    })
  }

 educations :string[] = [
  "Matric",
  "Diploma",
  "Intermediate",
  "Graduate",
  "PostGraduate",
 ]
 onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value)
    this._empService.addEmployee(this.empForm.value).subscribe(
      {
        next : (val:any) =>{
          alert("Employee added successfully");
          
          this._dialogRef.close();
        },
        error : (err:any) => {
          console.error(err)
        }
      }
    )
  }
 }
}
