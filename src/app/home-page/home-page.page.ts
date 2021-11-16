import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  users: any = [
    {name: 'Jugal kishor singh'},
    {name: 'kishor'},
    {name: 'singh'},
    {name: 'Jugal'},
    {name: 'kishor singh'},
  ];
  constructor(private router: Router, private menuCtrl: MenuController) {
    console.log(this.users[0]);;
  }
  ngOnInit() {
  }
  contentClick() {
    this.router.navigate(['/profile-page']);
  }
  goToChatPage() {
    this.router.navigate(['/chat-page']);
  }
  logOut() {
    this.menuCtrl.enable(false);
    this.router.navigate(['/']);
  }

}
