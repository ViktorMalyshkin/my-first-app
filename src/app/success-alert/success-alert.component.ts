import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  template: `<p>This is Success Alert Component!</p>`,
  styles: [`
    p {
      margin-left: 16px;
      margin-right: 16px;
      background-color: limegreen;
      text-align: center;
      border-radius: 8px;
      padding: 16px;
      border: 1px solid darkgreen;
      color: white;
      font-size: 20px;
    }
  `],
})
export class SuccessAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
