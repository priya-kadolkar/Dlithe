import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormReactiveComponent } from './registration-form-reactive/registration-form-reactive.component';

const routes: Routes = [{
  path:'registration-form-reactive',
  component:RegistrationFormReactiveComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
