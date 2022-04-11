import { Component, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { pastries } from 'src/pastries_mock';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.css']
})
export class PastryListComponent implements OnInit {
@Output () passDataToApp=new EventEmitter();
  constructor(
    private router:Router
  ) { }
 li=pastries;
  ngOnInit(): void {
  }
  OnClickBtn(list:any){
    //console.log(list);
    this.passDataToApp.emit(list)
    this.router.navigate(['pastry-list-details',list.name])
  }
}
