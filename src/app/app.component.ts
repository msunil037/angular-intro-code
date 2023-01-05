import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-intro-code';
  fontColor = 'red';
  message = "Welcome!"
  showNameStatus = true;
  names : string[] = ['Amit', 'Alex', 'Amrita', 'Sophia', 'Samira'];
  toggleNames(){
    this.showNameStatus = !this.showNameStatus;
  }
}
