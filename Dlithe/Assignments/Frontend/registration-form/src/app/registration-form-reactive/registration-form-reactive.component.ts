import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './passwordValidator';

@Component({
  selector: 'app-registration-form-reactive',
  templateUrl: './registration-form-reactive.component.html',
  styleUrls: ['./registration-form-reactive.component.css']
})
export class RegistrationFormReactiveComponent implements OnInit {
cities=['Belgaum','Dharwad','Hubli','Dandeli']
registrationForm:FormGroup;
submitted:boolean=false;
  constructor(private fb:FormBuilder) { 
    this.registrationForm=this.fb.group({
      name:['',Validators.required],
      phno:[
        '',
        [Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999)
        ]
      ],
      email:[
        '',
        Validators.required
      ],
      dob:[
        '',
        Validators.required
      ],
      address:[
        '',Validators.required
      ],
      city:[
        '',Validators.required
      ],
      pincode:[
        '',Validators.required
      ],
      pwd:['',Validators.required],
      confirmpwd:['',Validators.required]
    },
    {validator:PasswordValidation}
    );
  }

  ngOnInit(): void {
  }

}
