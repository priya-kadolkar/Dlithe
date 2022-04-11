import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
cities=['Dharwad','Hubli','Gadag','Mandya'];

registrationModel={
  name:'Priya',
  phno:'9900801506',
  email:'priyakadolkar@gmail.com',
  dob:'2022-04-22',
  address:'Dandeli',
  city:'Dandeli',
  pincode:581325
}
  constructor() { }

  ngOnInit(): void {
  }

}
