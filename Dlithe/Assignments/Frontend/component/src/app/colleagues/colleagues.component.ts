import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Colleague } from '../colleagues';
import { cl } from 'src/colleagues_mock';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css']
})
export class ColleaguesComponent implements OnInit {
  col_prop = cl;
  @Output() passDetailDatatoApp=new EventEmitter<any>();
  constructor() { 
    
  }

  ngOnInit(): void {}

  onColClicked(col_details :any){
    //console.log(col_details);
    this.passDetailDatatoApp.emit(col_details)
  }
}
