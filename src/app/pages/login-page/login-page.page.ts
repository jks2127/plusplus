import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  constructor(private loginservice: LoginService, private menuCtrl: MenuController, private router: Router,) { }
  loginForm= new FormGroup({
    email: new FormControl('jks2127@gmail.com', Validators.required),
    password: new FormControl('jitu@123', Validators.required)
  });
  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  signUp() {
    this.loginservice.register(this.loginForm.value).then((user: any)=>{
      if(user) {
        this.router.navigateByUrl('/home-page', {replaceUrl: true})
      }
    });
  }

  logIn() {
    this.loginservice.login(this.loginForm.value).then((user: any)=>{
      if(user) {
        this.router.navigateByUrl('/home-page', {replaceUrl: true})
      }
    });
  }

}
