import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth , private route: Router, private menuCtrl: MenuController) { }
  
  async login ({email, password}) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      console.error("Error while signing in................");
    }
  }

  async register ({email, password}) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (error) {
      console.error("Error while registering the user.......");      
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
