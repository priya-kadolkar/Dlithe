import { Injectable } from '@angular/core';
import { menuItems } from 'src/menu-list';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
menu:any;
  constructor() { }

  // getMenu(){
  //   return this.menu;
  // }
}
