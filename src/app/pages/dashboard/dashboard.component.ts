import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
public headerMassaage:String="Discount";

setMassage(){
  this.headerMassaage="You";
}
set(){
  this.headerMassaage="You";

}
}
