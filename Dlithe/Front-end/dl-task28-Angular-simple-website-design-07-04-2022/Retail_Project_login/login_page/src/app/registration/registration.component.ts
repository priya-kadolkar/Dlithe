import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './RegistrationPwdValidation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.registrationForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      pwd:['',Validators.required],
      confirmPwd:['',Validators.required]
    },
    {validator:PasswordValidation}
    );
   }

  ngOnInit(): void {
  }

}
