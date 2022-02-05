import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: Router, private menuCtrl: MenuController) { }
  check(credential: any) {
    if(credential.username==='jks' && credential.password==='123'){
      this.route.navigate(['/home-page']);
      this.menuCtrl.enable(true);
      localStorage.setItem('Token', 'lksdgdhfjjsdakl43hj2khr3458p42hrwehafl84r8');
    }else {
      this.route.navigate(['/']);
    }
  }
}
