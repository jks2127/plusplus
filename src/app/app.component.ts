import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home-page', icon: 'home' },
    { title: 'Chat', url: '/chat-page', icon: 'paper-plane' },
  ];
  constructor() {}
}
