import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from "../../services/auth/login.service";
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
  dotButtonToggle: boolean = false;
  constructor(private router: Router, private menuCtrl: MenuController, private loginService: LoginService) {
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
    this.loginService.logout();
  }
  dotButton() {
    this.dotButtonToggle = !this.dotButtonToggle;
    console.log("dot button clicked", this.dotButtonToggle);
  }
  dotButtonOptions (page: string){
    console.log("options clicked", page);
    switch (page) {
      case 'chat': 
        this.dotButtonToggle = false;
        this.router.navigate(['/chat-page']);
      break;
      
      case 'home':
        this.dotButtonToggle = false;
        this.router.navigate(['/home-page']);
      break;

      default:
        this.dotButtonToggle = false;
      break;
    }
    
  }
}
