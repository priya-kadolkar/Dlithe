import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginPasswordValidation } from './login_password_validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
   submitted:boolean=false;
  constructor(private fb:FormBuilder) { 
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      pwd:['',Validators.required]
      // confirmpwd:['',Validators.required]
    },
    {validator:loginPasswordValidation}
    );
  }

  ngOnInit(): void {
  }

}
