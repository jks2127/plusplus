/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  constructor(private loginservice: LoginService, private menuCtrl: MenuController) { }
  loginForm= new FormGroup({
    username: new FormControl('jks', Validators.required),
    password: new FormControl('123', Validators.required)
  });
  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  onClick() {
    this.loginservice.check(this.loginForm.value);
  }

}
