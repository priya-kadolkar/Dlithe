import { Component, OnInit } from '@angular/core';
import { MenuListService } from '../menu-list.service';

@Component({
  selector: 'app-selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.css']
})
export class SelectedMenuComponent implements OnInit {
selectMenu:any=[];
  constructor(private menuService:MenuListService) {}
  
  ngOnInit(): void {
    this.SelectedData();
  }
  SelectedData(){
    this.selectMenu=this.menuService.menu;
  }

}
