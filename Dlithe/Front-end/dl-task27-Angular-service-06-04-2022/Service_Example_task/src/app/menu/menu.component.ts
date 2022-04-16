import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from 'src/menu-list';
import { MenuListService } from '../menu-list.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
Menulist=menuItems;
selectedItem:any=[];
  constructor(private menuService:MenuListService,private router:Router) { }
  // public menu=[];
  ngOnInit(): void {
    // this.GetData();
    // console.log("init called")
  }
    
  OnChange(e:any,item:any){
    // console.log(e.target.value)
    console.log(item);
    // this.selectedItem.push(e.target.value)
    this.selectedItem.push(item)
  }

  GetData(){
    this.menuService.menu=this.selectedItem;
    this.router.navigate(['selected-menu'])
    console.log(this.menuService.menu)
  }
}
