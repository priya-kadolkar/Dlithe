import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name="Bootcamp";
public siteUrl=window.location.href;
public myId="testId";

public successClass="text-success";
  constructor() { }

  ngOnInit(): void {
  }
getUser(){
  return "Hello "+this.name;
}
}
