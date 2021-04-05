import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server 2';
  isServerCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
  }

  onUpdateServerName(event: Event): void {
    console.log(event);
    // this.serverName = (<HTMLInputElement> event.target).value;
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
