import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dlithe-project';

  selectCol:any;
  getDetails(col_details:any){
    console.log(col_details)
    this.selectCol=col_details;
  }
}








































































































































{

}
