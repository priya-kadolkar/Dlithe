import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';

const routes: Routes = [
  {path:'menu',
component:MenuComponent
},
{
  path:'selected-menu',
  component:SelectedMenuComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
