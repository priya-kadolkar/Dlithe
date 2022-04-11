import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colleague-details',
  templateUrl: './colleague-details.component.html',
  styleUrls: ['./colleague-details.component.css']
})
export class ColleagueDetailsComponent implements OnInit {
@Input() selected_col:any;

  constructor() { }

  ngOnInit(): void {
  }

}
