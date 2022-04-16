import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListService } from './menu-list.service';
import { MenuComponent } from './menu/menu.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SelectedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
