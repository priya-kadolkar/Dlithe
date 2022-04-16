import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { FormsModule } from '@angular/forms';
import { ColleagueDetailsComponent } from './colleague-details/colleague-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ColleaguesComponent,
    ColleagueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
},)
export class AppModule { }
