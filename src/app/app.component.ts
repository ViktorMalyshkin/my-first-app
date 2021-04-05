import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .white {
      color: white;
    }
  `],
})
export class AppComponent {
  isParagraph: boolean = false;
  logs: any[] = [];

  onParagraph(event): void {
    this.isParagraph = !this.isParagraph;
    console.log(new Date(event.timeStamp));
    this.logs.push(new Date(event.timeStamp));
  }

  backgroundColor(index): string {
    return this.isCheckIndex(index) && 'blue';
  }

  isCheckIndex(index): boolean {
    return index >= 4;
  }
}
