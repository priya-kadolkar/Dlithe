import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pastry-list-details',
  templateUrl: './pastry-list-details.component.html',
  styleUrls: ['./pastry-list-details.component.css']
})
export class PastryListDetailsComponent implements OnInit {
@Input() selected_pastry:any;
currPastryId:string | null ='';
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.currPastryId = this.router.snapshot.paramMap.get('list_id');
  }
}
